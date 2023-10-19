import { ProjectCard } from "../ProjectCard/ProjectCard";
import { useMyProjects } from "@/hooks/useMyProjects";
import { useSession } from "next-auth/react";
import { Loading } from "../Loading/Loading";
import { SearchBarProject } from "../SearchBarProject/SearchBarProject";
import { useSearchProjects } from "@/hooks/useSearchProjects";

export function MyProjectsList(){
  const {search, setSearch} = useSearchProjects()
  const {data: session} = useSession()
  const {data, isLoading} = useMyProjects();
  const PERFIL = session?.user.perfil.toLowerCase()

  if (isLoading) {
    return (
      <Loading/>
    )
  }

  return(
    <>
      <SearchBarProject value={search} handleChange={setSearch}/>
      {PERFIL == "professor" ? 
      data?.map(project => <ProjectCard key={project.id} id={project.id} title={project.titulo} banner={project.banner} tags={project.areasInteresse} status={project.status}/>) : 
      data?.map(equipe => <ProjectCard key={equipe.projeto.id} id={equipe.projeto.id} title={equipe.projeto.titulo} banner={equipe.projeto.banner} tags={equipe.projeto.areasInteresse} status={equipe.projeto.status}/>)}
    </>
  )
}