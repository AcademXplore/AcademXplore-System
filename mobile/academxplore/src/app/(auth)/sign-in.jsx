import {StyleSheet, View, Text, Alert} from "react-native";
import { useAuth } from "@/src/contexts/auth-context";
import React, { useState } from "react";
import { InputLogin } from "@/src/components/InputLogin";
import { ButtonHome } from "@/src/components/ButtonHome";
import { useRouter } from "expo-router";

export default function SignIn(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {onLogin} = useAuth();
  const router = useRouter()

  const signIn = async () => {
    const result = await onLogin(email, password);
    if (result && result.error){
      Alert.alert(result.msg.error, "Tente novamente");
    }
    else{
      console.log(result?.accessToken)
      if(result?.accessToken){
        router.push("/")
      }
    }
  };
  return(
    <View style={styles.container}>
      <View style={styles.form}>
        <InputLogin icon="email-outline" onChangeText={setEmail} placeholder="Email" value={email}/>
        <InputLogin icon="lock-outline" secureTextEntry onChangeText={setPassword} placeholder="Senha" value={password}/>
        <View style={styles.containerBtn}>
          <ButtonHome onPress={signIn} outline text="Entrar"/>
        </View>
        {/* <View>
          <Text style={styles.text}> Esqueci a senha </Text>
        </View> */}
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
