"use client"
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { useSearchProjects } from "./useSearchProjects";
import { useDeferredValue } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL

export function useMyCandidaturas(){

  const {search} = useSearchProjects()

  const searchDeferred = useDeferredValue(search)

  const {data: session} = useSession()  

  const USERID = session?.user.id

  const { data, isLoading } = useQuery({
    queryFn: async () => {
  
      var myHeaders = new Headers();
      myHeaders.append("Authorization", session?.user?.accessToken);
    
      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };
      
      return await fetch(`${API_URL}/candidatura/usuario/${USERID}`, requestOptions).then(res => res.json())
    },
    queryKey: ['myCandidaturas']
  })

  const filteredProjects = data?.filter(project => {
    let titulo = project.titulo.toLowerCase().includes(searchDeferred.toLowerCase())
    let areasInteresse = false
    for(let area of project.areasInteresse){
      if(area.nome.toLowerCase().includes(searchDeferred.toLowerCase())){
        areasInteresse = true
        break
      }
    }
    return titulo || areasInteresse
  })

  return {
    data: filteredProjects,
    isLoading
  }
}