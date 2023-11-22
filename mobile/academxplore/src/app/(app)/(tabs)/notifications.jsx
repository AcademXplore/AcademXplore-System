import { Tabs } from "expo-router";
import { Text, View } from "react-native";
import { Notification } from "@/src/components/Notification";

export default function Notifications(){
  return(
    <View style={{flex: 1, backgroundColor: 'gray'}}>
      <Notification> </Notification>
    </View>
  )
}