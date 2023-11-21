import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const API_URL = process.env.EXPO_PUBLIC_API_URL

export function useProject(project){

  const { data, isLoading } = useQuery({
    queryFn: async () => {
      return await axios.get(`${API_URL}/projeto/detalhes/${project}`)
    },
    queryKey: ['projectByID', project]
  })
  return {
    data: data?.data,
    isLoading
  }
}