import { useAuth } from "@/src/contexts/auth-context";
import { gerarNumeroAleatorio } from "@/src/utils/gerarNumeroAleatorio";
import axios from "axios";
import { Link, usePathname } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { IconCandidaturas } from "../IconCandidaturas";
import { Banner } from "../Banner";

export function ProjectCard({ id, title, banner, tags, status, isLoading }){
  const {authState} = useAuth()
  // const {setIsVisible, setProjeto, setIsLoading} = useDialogCandidatura()
  // const {setIsOpen, setEquipes, setIsLoading: setIsLoadingEquipesCandidatura, setProjetoId} = useSelectEquipeCandidatura()
  const pathname = usePathname();

  const PERFIL = authState?.user.perfil

  const checkarSeJaCandidatou = async () => {
    const API_URL = process.env.EXPO_PUBLIC_API_URL
    var raw = {
      usuarioID: authState?.user?.id,
      projetoID: id
    }
    const res = (await axios.post(`${API_URL}/candidatura/confirmar`, raw)).data

    return res
  }

  // const handleCandidatar = async () =>{
  //   setIsOpen(true)
  //   setIsLoadingEquipesCandidatura(true)
  //   const possuiCandidatura = await checkarSeJaCandidatou()
  //   if(possuiCandidatura){
  //     setIsLoadingEquipesCandidatura(false)
  //     setIsOpen(false)
  //     alert("Você já se candidatou nesse projeto anteriormente. Tente um outro projeto...")
  //   }
  //   else{
  //     var myHeaders = new Headers();
  //     myHeaders.append("Authorization", session?.user?.accessToken);
    
  //     var requestOptions = {
  //       method: 'GET',
  //       headers: myHeaders,
  //       redirect: 'follow'
  //     };
  //     const res = await fetch(`/api/project/equipes/${id}`, requestOptions).then(res => res.json())
  //     setProjetoId(id)
  //     setEquipes(res?.data?.equipes)
  //     setIsLoadingEquipesCandidatura(false)
  //   }
  // }

  // const openDialogCandidaturas = async () => {
  //   try{
  //     setIsVisible(true)
  //     setIsLoading(true)
  //     await fetch("/api/project/candidatura/"+id, {
  //       method: "GET",
  //       headers:{
  //         "Content-Type": "application/json",
  //         "Authorization": session?.user.accessToken
  //       }
  //     })
  //     .then(async (res) => {
  //       const result = await res.json()
        
  //       if(result.status == 201){
  //         setProjeto(result.data)
  //       }
  //     })
  //     setIsLoading(false)
  //   }
  //   catch(error){

  //   }
  // }

  return(
    <View id={id} style={styles.container}>
      <Banner banner={banner} titulo={title} key={id} active={status == "Inativo"} isLoading={isLoading}/>
      <View style={styles.containerDetails}>
        <View style={styles.containerTags}>
          {
            tags?.map(tag => (
              <View key={tag.id} style={{
                backgroundColor: `rgb(${gerarNumeroAleatorio()}, ${gerarNumeroAleatorio()}, ${gerarNumeroAleatorio()})`,
              }}>
                <Text
                  style={styles.tag}
                  key={tag.id}
                >
                  {tag.nome}
                </Text>
              </View>
            ))
          }
        </View>
        <View style={styles.containerBtns}>
          {
            (pathname == "/" || pathname == "/candidacy")?
            <>
              <Link style={({pressed}) => [
                  {
                    backgroundColor: pressed ? '#206B6A' : "transparent",
                  },
                  styles.btnEntenderMais,
                ]} href={`/project-details/${id}`} 
                asChild
              >
                <Pressable>
                  <Text style={[
                    {
                      color:  true ? '#206B6A' : "transparent",
                    },
                    styles.textBtnEntenderMais
                  ]}>Entender mais</Text>
                </Pressable>
              </Link>
              {PERFIL == "ALUNO" && pathname == "/" && 
                <Pressable style={({pressed}) => [
                  {
                    backgroundColor: pressed ? "transparent" : '#206B6A',
                  },
                  styles.btnCandidacy,
                ]} onPress={() => handleCandidatar()} children={({pressed}) => (
                  <Text style={[styles.textBtnCandidacy, {color: pressed ? "#206B6A" : "#fff",}]}>Candidatar-se</Text>
                )}/>
                }
            </>
          : 
          <>
            {PERFIL == "PROFESSOR" && status == "Ativo" && <IconCandidaturas onPress={() => openDialogCandidaturas()}/>}
            <Link style={({pressed}) => [
                {
                  backgroundColor: pressed ? "transparent" : '#206B6A',
                },
                styles.btnCandidacy,
              ]} href={`/my-projects/${id}`} asChild>
              <Pressable>
                <Text style={[styles.textBtnCandidacy, {color: "#fff",}]}>Abrir Projeto</Text>
              </Pressable>
            </Link>
          </>    
          }
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    marginBottom: 12,
    borderColor: "gray",
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: "#fff"
  },
  containerDetails:{
    width: "100%",
    justifyContent: 'space-between',
    paddingTop: 12,
    alignItems: 'center',
    flexDirection: 'row'
  },
  containerTags: {
    gap: 8,
    width: "50%",
    flexDirection: 'row',
    flexWrap: "wrap",
  },
  tag: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    fontFamily: 'Poppins-Medium',
    color: '#fff',
    fontSize: 8,
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  },
  containerBtns: {
    gap: 8,
    width: "50%",
    flexDirection: 'row',
    justifyContent: "flex-end"
  },
  btnEntenderMais:{
    borderWidth: 1,
    borderColor: "#206B6A",
    borderRadius: 5,
    paddingVertical: 7,
    paddingHorizontal: 16,
  },
  textBtnEntenderMais:{
    fontFamily: 'Poppins-Medium',
    fontSize: 10
  },
  btnCandidacy: {
    borderWidth: 1,
    borderColor: "#206B6A",
    borderRadius: 5,
    paddingVertical: 7,
    paddingHorizontal: 16,
  },
  textBtnCandidacy: {
    fontSize: 10,
    fontFamily: 'Poppins-Medium',
  }
})