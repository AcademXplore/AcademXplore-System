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
      <View style={{borderRadius: 12, gap: 2, paddingHorizontal: 16, marginTop: 12, flexDirection: 'column', alignItems: 'center'}}>
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