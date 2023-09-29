import { NextResponse } from "next/server";
import { headers } from 'next/headers'

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function GET(request, { params }) {
  try {
    
    const token = headers().get('Authorization')
    const projectId = params.projectId

    var myHeaders = new Headers();
    myHeaders.append("Authorization", token);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    const res = await fetch(`${API_URL}/projeto/equipes/${projectId}`,requestOptions);

    if (res.status != 200) {
      return NextResponse.json({
        message: res.text(),
        status: 500,
      });
    }
    return NextResponse.json({
      data: await res.json(),
      status: 201,
    });

  } catch (error) {
    return NextResponse.json({
      message: error,
      status: 500,
    });
  }
}