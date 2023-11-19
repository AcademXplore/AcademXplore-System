import { Text, View, StyleSheet } from "react-native";
import { Redirect } from "expo-router";
import { HomeScreen } from '@/src/components/HomeScreen';
import { useAuth } from "../contexts/auth-context";
import { ButtonHome } from "../components/ButtonHome";

export default function Home(){
  const {authState} = useAuth()

  if (authState?.authenticated) {
    return <Redirect href="/" />;
  }

  return (
    <HomeScreen>
      <View style={styles.containerText}>
        <Text style={styles.title}>AcademXplore</Text>
        <Text style={styles.subtitle}>Simpler and better</Text>
        <Text style={styles.paragraph}>Sistema de gestão de projetos acadêmicos desenvolvido por estudantes de Análise e Desenvolvimento de Sistemas. Simplifica a criação, execução e colaboração em projetos, incentivando inovação e excelência. Uma ferramenta essencial para explorar o potencial e alcançar o sucesso acadêmico.</Text>
      </View>
     
      <View style={styles.containerButtons}>
        <ButtonHome href="/sign-in" outline={false} link text="Login"/>
        <ButtonHome href="/sign-up" outline link text="Criar conta"/>
      </View>
    </HomeScreen>
  )
}

const styles = StyleSheet.create({
  containerText: {
    flex: 6,
    alignItems: "center",
    justifyContent: "flex-start"
  },
  title: {
    textAlign: "center",
    fontFamily: 'Poppins-SemiBold',
    fontSize: 32,
    color: "#fff"
  },
  subtitle: {
    textAlign: "center",
    fontFamily: 'Poppins-ExtraLight',
    fontSize: 26,
    color: "#fff",
    marginTop: -14
  },
  paragraph: {
    textAlign: "center",
    fontFamily: 'Poppins-Light',
    fontSize: 20,
    color: "#fff",
    marginTop: 24
  },
  containerButtons: {
    flex: 3,
    paddingHorizontal: 40,
    justifyContent: 'center',
    gap: 28
  },
})