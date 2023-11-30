import { useSearchProjects } from "@/src/contexts/search-projects-context";
import { SearchBarProject } from "../SearchBarProject";
import { View, ScrollView } from "react-native";
import { ProjectCard } from "../ProjectCard";
import { useMyProjects } from "@/src/hooks/useMyProjects";
import { useAuth } from "@/src/contexts/auth-context";

export function MyProjectsList(){
  const {search, setSearch} = useSearchProjects()
  const {data, isLoading} = useMyProjects();
  const {authState} = useAuth()
  const PERFIL = authState?.user.perfil.toLowerCase()
  return(
    <View>
      <SearchBarProject value={search} handleChange={setSearch} />
      <ScrollView style={{marginTop: 12}} showsVerticalScrollIndicator={false}>
        {
          isLoading ?
          <ProjectCard isLoading={isLoading}/>
          :
          PERFIL == "professor" ? 
            data?.map(project => <ProjectCard isLoading={isLoading} key={project.id} id={project.id} title={project.titulo} banner={project.banner} tags={project.areasInteresse} status={project.status}/>)
            :
            data?.map(equipe => <ProjectCard isLoading={isLoading} key={equipe.projeto.id} id={equipe.projeto.id} title={equipe.projeto.titulo} banner={equipe.projeto.banner} tags={equipe.projeto.areasInteresse} status={equipe.projeto.status}/>)
        }
      </ScrollView>
    </View>
  )
}