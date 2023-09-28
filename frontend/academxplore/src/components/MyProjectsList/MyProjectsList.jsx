import { ProjectCard } from "../ProjectCard/ProjectCard";
import { useMyProjects } from "@/hooks/useMyProjects";
import { useSession } from "next-auth/react";
import { Loading } from "../Loading/Loading";

export function MyProjectsList(){
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
      {PERFIL == "professor" ? 
      data?.map(project => <ProjectCard key={project.id} id={project.id} title={project.titulo} banner={project.banner} tags={project.areasInteresse} />) : 
      data?.map(equipe => <ProjectCard key={equipe.projeto.id} id={equipe.projeto.id} title={equipe.projeto.titulo} banner={equipe.projeto.banner} tags={equipe.projeto.areasInteresse} />)}
    </>
  )
}