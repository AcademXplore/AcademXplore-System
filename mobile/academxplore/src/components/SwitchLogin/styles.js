const { StyleSheet } = require("react-native");

export const styles = StyleSheet.create({
  containerSwitch: {
    flexDirection: "row",
    borderRadius: 10,
    backgroundColor: "#018482", 
    width: '100%',
    marginVertical: 15
  },
  switch: {
    width: '50%',
    borderRadius: 10,
    paddingVertical: 10
  },
  textSwitch: {
    color: '#fff',
    fontSize: 15,
    fontFamily: "Poppins-Regular",
    textAlign: 'center'
  }
});