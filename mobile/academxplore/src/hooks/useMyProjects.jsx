import { useQuery } from "@tanstack/react-query";
import { useDeferredValue } from "react";
import { useAuth } from "../contexts/auth-context";
import axios from "axios";
import { useSearchProjects } from "../contexts/search-projects-context";

const API_URL = process.env.EXPO_PUBLIC_API_URL

export function useMyProjects(){

  const {search} = useSearchProjects()

  const searchDeferred = useDeferredValue(search)

  const {authState} = useAuth()  

  const PERFIL = authState?.user.perfil.toLowerCase()

  const USERID = authState?.user.id

  const ENDPOINT = PERFIL == "professor" ? "professor/projetos" : "aluno/equipes"

  const { data, isLoading } = useQuery({
    queryFn: async () => {
      return (await axios.get(`${API_URL}/${ENDPOINT}/${USERID}`)).data
    },
    queryKey: ['myProjects']
  })

  const filteredProjects = data?.filter(value => {
    const project = PERFIL == "professor" ? value : value.projeto
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