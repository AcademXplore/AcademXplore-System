import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      display: "flex",
      flexWrap: "wrap",
      borderRadius: 12,
      padding: 8,
      marginVertical: 4,
      flexDirection: 'row',
      alignItems: 'center',
    },
    card: {
        flexWrap: "wrap",
        width: "100%",
    },
    dateContainer: {
        right: 2,
        position: 'absolute',
        bottom: 0,
    },
    description: {
        width: "100%",
        marginBottom: 25,
        color: "white"
    },
    date: {
        color: "white"
    }
  });