import { Image } from 'expo-image';
import { Text, View, StyleSheet } from 'react-native';
export function Banner({ titulo, banner, active, isLoading }) {
  return(
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={banner}
        contentFit="fill"
        alt={titulo}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    width: "100%",
    overflow: 'hidden',
    height: 180
  },
  image: {
    flex: 1,
    width: '100%',
    backgroundColor: '#0553',
  },
})