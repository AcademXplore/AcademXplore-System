import { Banner } from '@/src/components/Banner';
import { useProject } from '@/src/hooks/useProject';
import { useLocalSearchParams } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function ProjectDetails() {
  const { project } = useLocalSearchParams();
  const { data, isLoading } = useProject(project);

  return (
    <ScrollView style={styles.container}>
        <Banner titulo={data?.titulo} banner={data?.banner}/>
        <View style={styles.paragraphsList}>
          <View style={styles.paragraph}>
            <Text style={styles.titulo}>Descrição</Text>
            <Text style={styles.descricao}>{data?.descricao}</Text>
          </View>
          <View style={styles.paragraph}>
            <Text style={styles.titulo}>Objetivos</Text>
            <Text style={styles.descricao}>{data?.objetivos}</Text>
          </View>
          <View style={styles.paragraph}>
            <Text style={styles.titulo}>Cronograma de Atividades</Text>
            <Text style={styles.descricao}>{data?.cronograma}</Text>
          </View>
          <View style={styles.paragraph}>
            <Text style={styles.titulo}>Recursos Necessários</Text>
            <Text style={styles.descricao}>{data?.recursosNecessarios}</Text>
          </View>
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    flexDirection: 'column',
    backgroundColor: '#fff',
    padding: 12
  },
  paragraphsList: {
    flex: 1,
    flexDirection: 'column',
    width: '100%'
  },
  paragraph: {
    width: '100%',
    marginTop: 20
  },
  titulo: {
    fontSize: 24
  },
  descricao: {
    fontSize: 16,
    marginTop: 5
  }
})