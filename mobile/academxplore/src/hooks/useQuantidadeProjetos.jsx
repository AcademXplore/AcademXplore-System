"use client"
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const API_URL = process.env.EXPO_PUBLIC_API_URL

export function useQuantidadeProjetos(id){
  
  const { data, isLoading } = useQuery({
    queryFn: async () => {
      return await axios.get(`${API_URL}/projeto/quantidade/${id}`)
    },
    queryKey: ['quantidadeProjetos', id]
  })
  console.log(data.data)
  return {
    data: data.data,
    isLoading
  }
}