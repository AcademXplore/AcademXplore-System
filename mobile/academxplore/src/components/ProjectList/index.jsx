import { useSearchProjects } from "@/src/contexts/search-projects-context";
import { SearchBarProject } from "../SearchBarProject";
import { View, ScrollView } from "react-native";
import { useProjects } from "@/src/hooks/useProjects";
import { ProjectCard } from "../ProjectCard";

export function ProjectList(){
  const {search, setSearch} = useSearchProjects()
  const {data, isLoading} = useProjects();
  return(
    <View>
      <SearchBarProject value={search} handleChange={setSearch}/>
      <ScrollView>
        {
          isLoading ?
          <ProjectCard isLoading={isLoading}/>
          :
          data?.map(project => <ProjectCard isLoading={isLoading} key={project.id} id={project.id} title={project.titulo} banner={project.banner} tags={project.areasInteresse} status={project.status}/>)
        }
      </ScrollView>
    </View>
  )
}