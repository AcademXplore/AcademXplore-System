import { Text, View, Pressable, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { HomeScreen } from '@/src/components/HomeScreen';

export default function Home(){
  
  return (
    <HomeScreen>
      <View style={styles.containerText}>
        <Text style={styles.title}>AcademXplore</Text>
        <Text style={styles.subtitle}>Simpler and better</Text>
        <Text style={styles.paragraph}>Sistema de gestão de projetos acadêmicos desenvolvido por estudantes de Análise e Desenvolvimento de Sistemas. Simplifica a criação, execução e colaboração em projetos, incentivando inovação e excelência. Uma ferramenta essencial para explorar o potencial e alcançar o sucesso acadêmico.</Text>
      </View>
      <View style={styles.containerButtons}>
        <Link href="/sign-in" asChild
          style={({pressed}) => [
            {
              backgroundColor: !pressed ? '#00B8B5' : "transparent",
              borderColor: pressed ? '#00B8B5' : "transparent",
              borderWidth: 3
            },
            styles.btnLogin,
          ]}
        >
          <Pressable>
            <Text style={styles.txtBtnLogin}>Login</Text>
          </Pressable>
        </Link>
        <Link href="/sign-up" asChild
          style={({pressed}) => [
            {
              backgroundColor: pressed ? '#00B8B5' : "transparent",
              borderColor: !pressed ? '#00B8B5' : "transparent",
              borderWidth: 3
            },
            styles.btnCriarConta,
          ]}
        >
          <Pressable>
            <Text style={styles.txtBtnCriarConta}>Criar conta</Text>
          </Pressable>
        </Link>
      </View>
    </HomeScreen>
  )
}

const styles = StyleSheet.create({
  containerText: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    textAlign: "center",
    fontFamily: 'Poppins-Bold',
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
    fontFamily: 'Poppins-ExtraLight',
    fontSize: 20,
    color: "#fff",
    marginTop: 24
  },
  containerButtons: {
    flex: 1,
    paddingHorizontal: 40,
    justifyContent: 'center',
    gap: 28
  },
  btnLogin: {
    height: 40,
    justifyContent: 'center',
    borderRadius: 10
  },
  btnCriarConta: {
    height: 40,
    justifyContent: 'center',
    borderRadius: 10
  },
  txtBtnLogin: {
    textAlign: "center",
    fontSize: 20,
    color: '#fff',
    fontFamily: 'Poppins-Medium'
  },
  txtBtnCriarConta: {
    textAlign: "center",
    fontSize: 20,
    color: '#fff',
    fontFamily: 'Poppins-Medium'
  }
})