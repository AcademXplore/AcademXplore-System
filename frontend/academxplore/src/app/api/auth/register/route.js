import { NextResponse } from "next/server";

const API_URL = process.env.NEXT_PUBLIC_API_URL

export async function POST(req){
  try {
    debugger
    const {nome, cpf, email, instituicao, perfil, matricula, password} = await req.json()

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      nome,
      cpf,
      email,
      instituicao,
      perfil,
      matricula,
      senha: password
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    const res = await fetch(`${API_URL}/usuario/cadastro`, requestOptions)
      .then(response => response.text())
      .then(result => result)
      .catch(error => {throw new Error(error)});

    if(res == "Usuário já cadastrado!"){
      return NextResponse.json({
        message: res,
        status: 500
      })
    }
    return NextResponse.json({
      message: res,
      status: 201
    })

  } catch (error) {
    return NextResponse.json({
      message: error,
      status: 500
    })
  }
}