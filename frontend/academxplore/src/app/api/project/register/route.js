import { NextResponse } from "next/server";
import { Storage } from "@google-cloud/storage";
import path from "path";
import crypto from "crypto";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function POST(req) {
  try {
    debugger
    const {
      banner,
      titulo,
      descricao,
      objetivos,
      cronograma,
      areasInteresse,
      coorientador,
      recursosNecessarios,
      token,
      professor,
      equipes,
    } = await req.json();

    var image = banner,
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

    var file = academxploreFilesBucket.file(`project-images/${fileName}`);
    file.save(
      imageBuffer,
      {
        metadata: { contentType: "image/jpeg" },
        resumable: false,
        gzip: true,
      },
      function (error) {
        if (error) {
          console.log(error.message);
        }
        
        console.log("SUCESSO")
      
      }
    );
    
    const publicUrl =`https://storage.googleapis.com/academxplore-files/project-images/${fileName}`;
    console.log(publicUrl)

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", token);

    var raw = JSON.stringify({
      banner: publicUrl,
      titulo,
      descricao,
      objetivo: objetivos,
      cronograma,
      areasInteresse: areasInteresse.split(","),
      emailCoorientador: coorientador,
      recursosNecessarios,
      equipes: equipes.split(","),
      professor,
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const res = await fetch(`${API_URL}/projeto/cadastro`, requestOptions)

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
