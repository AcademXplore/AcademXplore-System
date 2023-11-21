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
      <View style={styles.containerTitulo}>
        <Text style={styles.titulo}>{titulo}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    width: "100%",
    overflow: 'hidden',
    height: 180,
    position: 'relative'
  },
  image: {
    flex: 1,
    width: '100%',
  },
  containerTitulo: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.25)',
    width: '100%',
    height: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 16,
    flexWrap: 'wrap'
  },
  titulo: {
    color: '#fff',
    fontFamily: 'Poppins-Regular',
    fontSize: 24,
    
  }
})