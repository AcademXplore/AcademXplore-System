import { View, Text, Pressable} from "react-native";
import { styles } from "./styles";

export function Notification ({status, description, date, onPress}) {
  return (
      <Pressable style={[styles.container, {backgroundColor: status=="Ativo" ? "#00B8B5" : "#006B69"} ]} onPress={onPress}>
        <View style={styles.card}>
          <Text style={styles.description}> {description} </Text>  
          <View style={styles.dateContainer}>
            <Text style={styles.date}> {new Date(date).toLocaleString()} </Text>
          </View>
        </View>
      </Pressable>
  )
}
