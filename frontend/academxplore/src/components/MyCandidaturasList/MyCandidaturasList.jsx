"use client"
import { ProjectCard } from "../ProjectCard/ProjectCard";
import { useSession } from "next-auth/react";
import { Loading } from "../Loading/Loading";
import { SearchBarProject } from "../SearchBarProject/SearchBarProject";
import { useSearchProjects } from "@/hooks/useSearchProjects";
import { useMyCandidaturas } from "@/hooks/useMyCandidaturas";

export function MyCandidaturasList(){
  const {search, setSearch} = useSearchProjects()
  const {data, isLoading} = useMyCandidaturas();

  return(
    <>
      <SearchBarProject value={search} handleChange={setSearch}/>
      {
        isLoading ?
          <ProjectCard isLoading={isLoading}/>
        :
        data?.map(project => <ProjectCard isLoading={isLoading} key={project.id} id={project.id} title={project.titulo} banner={project.banner} tags={project.areasInteresse} status={project.status}/>)
      }
    </>
  )
}