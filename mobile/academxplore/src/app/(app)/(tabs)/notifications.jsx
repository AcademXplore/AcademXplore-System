import { Tabs } from "expo-router";
import { Text, View, ScrollView } from "react-native";
import { Notification } from "@/src/components/Notification";
import { useNotificacoes } from "@/src/hooks/useNotificacoes";
import { useAuth } from "@/src/contexts/auth-context";
import axios from "axios";
import { useState } from "react";

export default function Notifications(){
  const {data, isLoading} = useNotificacoes()
  const [isVisible, setIsVisible] = useState(false)
  const [notificacao, setNotificacao] = useState({titulo: "", descricao: ""})
  const [isLoadingNotificacao, setIsLoadingNotificacao] = useState(false)
  
  const atualizarNotificacao = async (notificationId) => {
    debugger
    setIsLoadingNotificacao(true)
    const API_URL = process.env.EXPO_PUBLIC_API_URL
    const res = (await axios.get(`${API_URL}/notificacao/${notificationId}`)).data
    await axios.put(`${API_URL}/notificacao/${notificationId}`)
       
    setNotificacao({titulo: res.titulo, descricao: res.descricao})
    setIsLoadingNotificacao(false)
    setIsVisible(true)
  }
  
  
  return(
    <ScrollView style={{flex: 1, position: 'relative', flexDirection: 'column'}}>
      {isVisible &&
        <View style={{position: 'absolute', top: 0, left: 0, height: '100%', width: '100%', zIndex: 3, flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.25)'}}>
          <View style={{width: '100%', borderRadius: 10, overflow: 'hidden'}} >
            <View style={{backgroundColor: "#206B6A", width: '100%', padding: 10}}><Text>{notificacao.titulo}</Text></View>
            <View style={{backgroundColor: "#00B8B5", width: '100%', padding: 5, alignItems: 'center'}}><Text>Notificação</Text></View>
            <View style={{width: '100%', backgroundColor: '#fff', padding: 12}}>
              <View style={{borderWidth: 3, borderRadius: 8, borderColor: '#00B8B5', width: '100%', paddingHorizontal: 8, paddingVertical: 12}}><Text>{notificacao.descricao}</Text></View>
            </View>
          </View>
        </View>
      }
      <View style={{borderRadius: 12, gap: 2, paddingVertical: 12, paddingHorizontal: 16, borderColor: "#000", borderWidth: 1, marginTop: 12, flexDirection: 'column', alignItems: 'center', backgroundColor: '#fff'}}>
      {
        data?.map(notification => {
          return(
            <Notification onPress={() => atualizarNotificacao(notification.id)} key={notification.id} status={notification.status} description={notification.descricao} date={notification.dataCriacao}/>
          )
        })
      }

      </View>
      
    </ScrollView>
  )
}