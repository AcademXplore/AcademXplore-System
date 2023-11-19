import { Text, Pressable } from "react-native";
import { Link } from "expo-router";
import { styles } from "./styles";

export function ButtonHome ({href, text, outline, onPress, link}) {
    if(link)
    return (
       
        <Link href={href} asChild
            style={({pressed}) => [
                {
                    backgroundColor: (pressed == outline) ? '#00B8B5' : "transparent",
                    borderColor: (pressed != outline) ? '#00B8B5' : "transparent",
                    borderWidth: 3,
                },
                styles.btn,
            ]}
        >
            <Pressable>
                <Text style={styles.txtBtn}>{text}</Text>
            </Pressable>
        </Link>
    )
    else{
        return(
            <Pressable onPress={onPress}
                style={({pressed}) => [
                    {
                        backgroundColor: (pressed == outline) ? '#00B8B5' : "transparent",
                        borderColor: (pressed != outline) ? '#00B8B5' : "transparent",
                        borderWidth: 3,
                    },
                    styles.btn,
                ]}
            >
                <Text style={styles.txtBtn}>{text}</Text>
            </Pressable>
        )
    }
}
