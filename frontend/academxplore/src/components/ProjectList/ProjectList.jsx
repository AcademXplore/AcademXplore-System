"use client"
import { useProjects } from "@/hooks/useProjects"
import "./ProjectList.css"
import { ProjectCard } from "../ProjectCard/ProjectCard";
import { Loading } from "../Loading/Loading";

export function ProjectList(){
  const {data, isLoading} = useProjects();
  console.log(data)

  if (isLoading) {
    return (
      <Loading/>
    )
  }

  return(
    <>
      {data?.map(project => <ProjectCard id={project.id} title={project.titulo} banner={project.banner} tags={project.areasInteresse} />)}
    </>
  )
}