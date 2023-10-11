import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { useSearchProjects } from "./useSearchProjects";
import { useDeferredValue } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL

export function useProjects(){
  const {data: session} = useSession()  
  
  const {search} = useSearchProjects()

  const searchDeferred = useDeferredValue(search)

  const { data, isLoading } = useQuery({
    queryFn: async () => {
  
      var myHeaders = new Headers();
      myHeaders.append("Authorization", session?.user?.accessToken);
    
      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };
      
      return await fetch(`${API_URL}/projeto/ativo`, requestOptions).then(res => res.json())
    },
    queryKey: ['projectsActive']
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