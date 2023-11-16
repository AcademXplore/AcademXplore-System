import { HomeScreen } from "@/src/components/HomeScreen";
import { SwitchLogin } from "@/src/components/SwitchLogin";
import { SwitchContextProvider } from "@/src/contexts/switch-context";
import { Slot, usePathname } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function LayoutAuth(){
  const pathname = usePathname()
  return(
    <SwitchContextProvider pathname={pathname}>
      <HomeScreen>
        <View style={styles.container}>
          <View>
            <Text style={styles.text}>Simple and Better</Text>
          </View>
          <SwitchLogin/>
          <Slot/>
        </View>
      </HomeScreen>
    </SwitchContextProvider>
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
  }
});