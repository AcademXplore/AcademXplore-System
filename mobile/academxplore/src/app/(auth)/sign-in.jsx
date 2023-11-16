import {StyleSheet, View} from "react-native";
import { useAuth } from "@/src/contexts/auth-context";
import React, { useState } from "react";
import { InputLogin } from "@/src/components/InputLogin";
import { ButtonHome } from "@/src/components/ButtonHome";

export default function SignIn(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {onLogin, onRegister} = useAuth();

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
        <InputLogin icon="lock-outline" secureTextEntry onChangeText={setPassword} placeholder="Password" value={password}/>
        <View style={styles.btn}>
          <ButtonHome style href="/sign-up" outline={true} text="Sign In"/>
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
    fontFamily: 'Poppins-ExtraLight',
    color: 'white',
    fontSize: 32,
    textAlign: 'center',
  },
  form: {
    gap: 10,
    width: '100%', 
    justifyContent: 'flex-end'
  },
  btn: {
    alignItems: 'center',
  }
});
