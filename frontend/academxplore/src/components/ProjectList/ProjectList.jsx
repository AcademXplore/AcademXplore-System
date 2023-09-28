import { useProjects } from "@/hooks/useProjects"
import { ProjectCard } from "../ProjectCard/ProjectCard";
import { Loading } from "../Loading/Loading";

export function ProjectList(){
  const {data, isLoading} = useProjects();

  return(
    <div className="h-100 w-100 d-flex flex-column">
      {isLoading && <Loading/>}
      {data?.map(project => <ProjectCard key={project.id} id={project.id} title={project.titulo} banner={project.banner} tags={project.areasInteresse} />)}
    </div>
  )
}