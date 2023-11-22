import { View, Text, Pressable} from "react-native";
import { styles } from "./styles";

export function Notification ({status, description, date, onPress}) {
  return (
      <Pressable style={styles.container} onPress={onPress}>
        <View style={styles.card}>
          <Text style={styles.description}></Text>  
          <View style={styles.dateContainer}>
            <Text style={styles.date}>  </Text>
          </View>
        </View>
      </Pressable>
  )
}
