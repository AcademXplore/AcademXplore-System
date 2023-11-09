import { useProjects } from "@/hooks/useProjects"
import { ProjectCard } from "../ProjectCard/ProjectCard";
import { Loading } from "../Loading/Loading";
import { useSearchProjects } from "@/hooks/useSearchProjects";
import { SearchBarProject } from "../SearchBarProject/SearchBarProject";

export function ProjectList(){
  const {search, setSearch} = useSearchProjects()
  const {data, isLoading} = useProjects();
  return(
    <div className="h-100 w-100 d-flex flex-column">
      <SearchBarProject value={search} handleChange={setSearch}/>
      {
        isLoading ?
        <ProjectCard isLoading={isLoading}/>
        :
        data?.map(project => <ProjectCard isLoading={isLoading} key={project.id} id={project.id} title={project.titulo} banner={project.banner} tags={project.areasInteresse} status={project.status}/>)
      }
    </div>
  )
}