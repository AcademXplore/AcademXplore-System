import {StyleSheet, View, Text} from "react-native";
import { useAuth } from "@/src/contexts/auth-context";
import React, { useState } from "react";
import { InputLogin } from "@/src/components/InputLogin";
import { ButtonHome } from "@/src/components/ButtonHome";

export default function SignIn(){
  const [nome, setNome] = useState('');
  const [CPF, setCPF] = useState('');
  const [email, setEmail] = useState('');
  const [instituicao, setInstituicao] = useState('');
  const [tipoPerfil, setTipoPerfil] = useState('');
  const [matricula, setMatricula] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const {onLogin} = useAuth();

  const signUp = async () => {
    const result = await onLogin(nome, CPF, email, instituicao, tipoPerfil, matricula, senha, confirmarSenha);
    if (result && result.error){
      alert(result.msg);
    }
  };
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
        <View style={styles.btn}>
          <ButtonHome href="/sign-in" outline={false} text="Cadastrar"/>
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
  btn: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 3,
    flexDirection: 'column'
  }
});
