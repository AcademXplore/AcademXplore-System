import { Animated, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      width: "100%",
      alignSelf: 'center',
      marginTop: 12
    },
    containerInput: {
      position: 'relative',
      width: "100%",
    },
    input: {
      backgroundColor: "#C0D2D2",
      paddingVertical: 10,
      paddingLeft: 30,
      borderRadius: 12
    },
    icon: {
      position: 'absolute',
      top: "50%",
      right: 12,
      transform: [{translateY: -12}] 
    },
    
  });