import { View, TextInput } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from "./styles";

export function SearchBarProject({value, handleChange}){
  return(
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <TextInput style={styles.input} value={value} onChangeText={(text) => handleChange(text)} placeholder="Digite o título ou área de interesse..."/>
        <MaterialCommunityIcons name="magnify" size={24} style={styles.icon} />
      </View>
    </View>
  )
}