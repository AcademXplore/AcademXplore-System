"use client"
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

const API_URL = process.env.NEXT_PUBLIC_API_URL

export function useCandidaturas(projetoId){
  const {data: session} = useSession()  

  const { data, isLoading } = useQuery({
    queryFn: async () => {
  
      var myHeaders = new Headers();
      myHeaders.append("Authorization", session?.user?.accessToken);
    
      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };
      
      return await fetch(`${API_URL}/projeto/candidaturas/${projetoId}`, requestOptions).then(res => res.json())
    },
    queryKey: ['candidaturasDoProjeto']
  })

  return {
    data: data,
    isLoading
  }
}