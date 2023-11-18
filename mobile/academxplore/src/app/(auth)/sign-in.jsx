import {StyleSheet, View, Text} from "react-native";
import { useAuth } from "@/src/contexts/auth-context";
import React, { useState } from "react";
import { InputLogin } from "@/src/components/InputLogin";
import { ButtonHome } from "@/src/components/ButtonHome";

export default function SignIn(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {onLogin} = useAuth();

  const signIn = async () => {
    const result = await onLogin(email, password);
    if (result && result.error){
      alert(result.msg);
    }
  };
  return(
    <View style={styles.container}>
      <View style={styles.form}>
        <InputLogin icon="email-outline" onChangeText={setEmail} placeholder="Email" value={email}/>
        <InputLogin icon="lock-outline" secureTextEntry onChangeText={setPassword} placeholder="Senha" value={password}/>
        <View style={styles.btn}>
          <ButtonHome href="/sign-up" outline={false} text="Entrar"/>
        </View>
        <View>
          <Text style={styles.text}> Esqueci a senha </Text>
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
