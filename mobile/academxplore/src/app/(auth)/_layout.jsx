import { HomeScreen } from "@/src/components/HomeScreen";
import { Slot } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function LayoutAuth(){
  return(
    <HomeScreen>
      <View style={styles.container}>
        <View>
          <Text style={styles.text}>Simple and Better</Text>
        </View>
        <View>
          {/*Botões de criar conta e login adicionar, de preferencia criar component separado*/}
        </View>
        <Slot/>
      </View>
    </HomeScreen>
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