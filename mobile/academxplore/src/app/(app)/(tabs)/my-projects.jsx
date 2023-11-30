import { SearchProjectsContextProvider } from "@/src/contexts/search-projects-context";
import { Text, View, StyleSheet } from "react-native";
import { MyProjectsList } from "@/src/components/MyProjects";

export default function MyProjects(){
  return(
    <SearchProjectsContextProvider>
      <View style={styles.container}>
        <MyProjectsList/>
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