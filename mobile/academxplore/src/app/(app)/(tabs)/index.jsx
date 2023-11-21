import { ProjectList } from "@/src/components/ProjectList";
import { SearchProjectsContextProvider } from "@/src/contexts/search-projects-context";
import { Text, View, StyleSheet } from "react-native";

export default function Timeline(){
  return(
    <SearchProjectsContextProvider>
      <View style={styles.container}>
        <ProjectList/>
      </View>
    </SearchProjectsContextProvider>
  )
}

const styles =StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#F3F3F3',
    paddingHorizontal: 24,
    paddingBottom: 60
  }
})