import { View, TextInput} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from "./styles";


export function InputLogin ({icon, placeholder, onChangeText, value, ...props}) {
    return (
        <View style={styles.containerInput}>
          <MaterialCommunityIcons style={styles.icon} name={icon} size={32} color="#019E9C"/>
          <TextInput style={styles.input} placeholderTextColor={'#BEBEBE'} placeholder={placeholder} onChangeText={(text) => onChangeText(text)} value={value} {...props}/>
        </View>
    )
}