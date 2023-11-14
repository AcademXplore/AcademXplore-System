import {StyleSheet, Text, View} from "react-native";
import { HomeScreen } from '@/src/components/HomeScreen';

export default function SignIn(){
  return(
    <>
      <View>
      <Text style={styles.text}>Cadastro</Text>
        {/*Criação do formulário*/}
      </View>
      <View>
        {/*Botão de login ou cadastro*/}
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 8,
    flexDirection: "column",
  },
  text: {
    fontFamily: 'Poppins-ExtraLight',
    color: 'white',
    fontSize: 32,
    textAlign: 'center',
  },
});