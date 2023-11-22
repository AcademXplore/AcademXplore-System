import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../contexts/auth-context";
import axios from "axios";

const API_URL = process.env.EXPO_PUBLIC_API_URL

export function useNotificacoes(){
  const {authState} = useAuth()

  const { data, isLoading } = useQuery({
    queryFn: async () => {
      return (await axios.get(`${API_URL}/notificacao/usuario/${authState?.user?.id}`)).data
    },
    queryKey: ['getNoticationsUser', authState?.user?.id]
  })

  return {
    data: data,
    isLoading
  }
}