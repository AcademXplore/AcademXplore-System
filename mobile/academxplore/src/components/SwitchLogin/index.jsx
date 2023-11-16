import { Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import { useSwitch } from "@/src/contexts/switch-context";
import { Link } from "expo-router";

export function SwitchLogin(){
  const {toggle, setToggle} = useSwitch()  
  return(
    <View style={styles.containerSwitch}>
      <Link href='/sign-in' style={[styles.switch, {backgroundColor: toggle ? "#00B8B5" : "transparent"}]} asChild>
        <Pressable onPress={() => setToggle(true)} >
          <Text style={styles.textSwitch}>Login</Text>
        </Pressable>
      </Link>
      <Link href='/sign-up' style={[styles.switch, {backgroundColor: !toggle ? "#00B8B5" : "transparent"}]} asChild>
        <Pressable onPress={() => setToggle(false)} >
          <Text style={styles.textSwitch}>Criar Conta</Text>
        </Pressable>
      </Link>
    </View>
  )
}