import {View, Image, ImageBackground } from "react-native";
import {styles} from "./styles"
import Logo from './img/Logo.png'
import BgImage from "../../assets/bg-telas-iniciais.png";
import { StatusBar } from 'expo-status-bar';

export function HomeScreen({children}){
  return (
    <View style={styles.container}>
      <StatusBar style="light"/>
      <ImageBackground source={BgImage} resizeMode="cover" style={styles.bgImage} imageStyle={{opacity:0.5}}>
        <View style={styles.containerLogo}>
          <Image source={Logo}/>
        </View>
        {children}
      </ImageBackground>
    </View>
  )
}