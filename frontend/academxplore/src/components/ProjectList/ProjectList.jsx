import { useProjects } from "@/hooks/useProjects"
import "./ProjectList.css"
import { ProjectCard } from "../ProjectCard/ProjectCard";
import { Loading } from "../Loading/Loading";

export function ProjectList(){
  const {data, isLoading} = useProjects();

  if (isLoading) {
    return (
      <Loading/>
    )
  }

  return(
    <>
      {data?.map(project => <ProjectCard key={project.id} id={project.id} title={project.titulo} banner={project.banner} tags={project.areasInteresse} />)}
    </>
  )
}