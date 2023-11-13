import React from 'react';
import { ImageBackground, Image, StyleSheet, Text, View } from "react-native";
import Icon from "../../../assets/icon.png";
import BgImage from "../../../assets/bg-telas-iniciais.png";

export const SignUp = () => (
  <View style={styles.container}>
    {/* <View style={styles.header}> */}
        <ImageBackground source={BgImage} resizeMode="cover" style={styles.bgImage}>
            <Image source={Icon}/>
            <Text style={styles.text}> Simple and Better</Text>
        </ImageBackground>
    {/* </View> */}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
});
