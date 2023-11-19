import { useQuery } from "@tanstack/react-query";
import { useDeferredValue } from "react";
import axios from "axios";
import { useSearchProjects } from "../contexts/search-projects-context";

const API_URL = process.env.EXPO_PUBLIC_API_URL

export function useProjects(){  
  const {search} = useSearchProjects()

  const searchDeferred = useDeferredValue(search)

  const { data, isLoading } = useQuery({
    queryFn: async () => {
      return await axios.get(`${API_URL}/projeto/ativo`)    
    },
    queryKey: ['projectsActive']
  })
  const filteredProjects = data?.data.filter(project => {
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