"use client"
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

const API_URL = process.env.NEXT_PUBLIC_API_URL

export function useMyProjects(){
  const {data: session} = useSession()  

  const PERFIL = session?.user.perfil.toLowerCase()

  const USERID = session?.user.id

  const ENDPOINT = PERFIL == "professor" ? "professor/projetos" : "aluno/equipes"

  const { data, isLoading } = useQuery({
    queryFn: async () => {
  
      var myHeaders = new Headers();
      myHeaders.append("Authorization", session?.user?.accessToken);
    
      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };
      
      return await fetch(`${API_URL}/${ENDPOINT}/${USERID}`, requestOptions).then(res => res.json())
    },
    queryKey: ['myProjects']
  })

  return {
    data: data,
    isLoading
  }
}