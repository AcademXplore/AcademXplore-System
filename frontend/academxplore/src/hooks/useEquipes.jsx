"use client"
import { useQuery } from "@tanstack/react-query"
import { useSession } from "next-auth/react"

export function useEquipes(project){
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
      return await fetch(`/api/project/equipes/${project}`, requestOptions).then(res => res.json())
    },
    queryKey: ['equipesDoProjeto', project]
  })
  
  return {
    data: data?.data?.equipes,
    isLoading
  }
}

