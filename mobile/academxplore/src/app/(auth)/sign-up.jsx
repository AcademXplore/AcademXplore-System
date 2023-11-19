import {StyleSheet, View, Text, Alert} from "react-native";
import { useAuth } from "@/src/contexts/auth-context";
import React, { useState } from "react";
import { InputLogin } from "@/src/components/InputLogin";
import { ButtonHome } from "@/src/components/ButtonHome";
import { Redirect, useRouter } from "expo-router";
import { useSwitch } from "@/src/contexts/switch-context";

export default function SignIn(){
  const {setToggle} = useSwitch()
  const [nome, setNome] = useState('');
  const [CPF, setCPF] = useState('');
  const [email, setEmail] = useState('');
  const [instituicao, setInstituicao] = useState('');
  const [tipoPerfil, setTipoPerfil] = useState('');
  const [matricula, setMatricula] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const {onRegister} = useAuth();
  const router = useRouter();
  
  const signUp = async () => {
    const result = await onRegister(nome, CPF, email, instituicao, tipoPerfil, matricula, senha, confirmarSenha);
    Alert.alert("Parabéns!", result, [
      {
        text: 'Ok',
        onPress: redirectLogin,
        style: 'default',
      }]);
    if (result && result.error){
      Alert.alert(result.msg.error, "Tente novamente!");
    }
  };
  const redirectLogin = () => {
    setToggle(true)
    router.push('/sign-in')
  }
  return(
    <View style={styles.container}>
      <View style={styles.form}>
        <InputLogin icon="account-outline" onChangeText={setNome} placeholder="Nome" value={nome}/>
        <InputLogin icon="smart-card-outline" onChangeText={setCPF} placeholder="CPF" value={CPF}/>
        <InputLogin icon="email-outline" onChangeText={setEmail} placeholder="E-mail" value={email}/>
        <InputLogin icon="school-outline" onChangeText={setInstituicao} placeholder="Instituição" value={instituicao}/>
        <InputLogin icon="account-tie" onChangeText={setTipoPerfil} placeholder="Aluno/Professor" value={tipoPerfil}/>
        <InputLogin icon="clipboard-account-outline" onChangeText={setMatricula} placeholder="Matrícula" value={matricula}/>
        <InputLogin icon="lock-outline" secureTextEntry onChangeText={setSenha} placeholder="Senha" value={senha}/>
        <InputLogin icon="lock-outline" secureTextEntry onChangeText={setConfirmarSenha} placeholder="Confirmar Senha" value={confirmarSenha}/>
        <View style={styles.containerBtn}>
          <ButtonHome outline onPress={signUp} text="Cadastrar"/>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
    width: '100%',
    flex: 8,
    flexDirection: "column",
    
  },
  text: {
    fontFamily: 'Poppins-Regular',
    color: 'white',
    fontSize: 15,
    textAlign: 'center'
  },
  form: {
    gap: 10,
    width: '100%', 
    flex: 2,
  },
  containerBtn: {
    justifyContent: 'flex-end',
    flex: 3,
    flexDirection: 'column',
    width: "50%",
    alignSelf: 'center'
  }
});
