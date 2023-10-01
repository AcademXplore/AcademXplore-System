import { NextResponse } from "next/server";
import { headers } from 'next/headers'

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function POST(request) {
  try {
    const token = headers().get('Authorization')
    const {usuarioID, projetoID, equipeID} = request.json()
    
    var raw = JSON.stringify({
      usuarioID,
      projetoID,
      equipeID
    });

    var myHeaders = new Headers();
    myHeaders.append("Authorization", token);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    const res = await fetch(`${API_URL}/candidatura/criar`,requestOptions);
    if (res.status != 200) {
      return NextResponse.json({
        message: res.text(),
        status: 500,
      });
    }
    return NextResponse.json({
      message: "",
      status: 201,
    });
  } catch (error) {
    return NextResponse.json({
      message: error,
      status: 500,
    });
  }
}
