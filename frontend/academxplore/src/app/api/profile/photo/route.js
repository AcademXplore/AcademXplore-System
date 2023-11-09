import { NextResponse } from "next/server";
import { Storage } from "@google-cloud/storage";
import path from "path";
import crypto from "crypto";
import { headers } from 'next/headers'

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function POST(req) {
  try {
    debugger
    const token = headers().get('Authorization')
    const {
      imagem,
      tipo,
      usuario
    } = await req.json();

    var image = imagem,
      fileName = crypto.randomUUID() + "-original.jpeg",
      base64EncodedImageString = image.replace(/^data:image\/\w+;base64,/, ""),
      imageBuffer = Buffer.from(base64EncodedImageString, "base64");

    const gc = new Storage({
      keyFilename: path.join(
        __dirname,
        "../../../../../../angelic-turbine-400123-bf8bcde44427.json"
      ),
      projectId: "angelic-turbine-400123",
    });

    const academxploreFilesBucket = gc.bucket("academxplore-files");

    var file = ""
    var pathFile = ""
    if(tipo == "foto"){
      pathFile = `foto-profile-images/${fileName}`
      file = academxploreFilesBucket.file(pathFile);
    }
    else if(tipo == "banner"){
      pathFile = `banner-profile-images/${fileName}`
      file = academxploreFilesBucket.file(pathFile);
    }
    file.save(
      imageBuffer,
      {
        metadata: { contentType: "image/jpeg" },
        resumable: false,
        gzip: true,
      },
      function (error) {
        if (error) {
          return error.message;
        }

        return "SUCESSO";
      }
    );

    const publicUrl = `https://storage.googleapis.com/academxplore-files/${pathFile}`;

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", token);

    var raw = JSON.stringify({
      "id": usuario?.id,
      "nome": usuario?.nome,
      "cpf": usuario?.cpf,
      "email": usuario?.email,
      "instituicao": usuario?.instituicao,
      "perfil": usuario?.perfil,
      "matricula": usuario?.matricula,
      "lattes": usuario?.lattes,
      "linkedin": usuario?.linkedin,
      "telefone": usuario?.telefone,
      "curso": usuario?.curso,
      "sobreVoce": usuario?.sobreVoce,
      "formacao": usuario?.formacao,
      "dataInicio": usuario?.dataInicio,
      "dataFim": usuario?.dataFim,
      "foto": tipo == "foto" ? publicUrl : usuario?.foto,
      "banner": tipo == "banner" ? publicUrl : usuario?.banner
    });

    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    const res = await fetch(`${API_URL}/usuario`, requestOptions)

    if (res.status != 200) {
      return NextResponse.json({
        message: res.text(),
        status: 500,
      });
    }
    return NextResponse.json({
      message: res.text(),
      status: 201,
    });
  } catch (error) {
    return NextResponse.json({
      message: error,
      status: 500,
    });
  }
}
