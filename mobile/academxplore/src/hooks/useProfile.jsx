"use client"
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const API_URL = process.env.EXPO_PUBLIC_API_URL

export function useProfile(id, queryKey){

  const { data, isLoading } = useQuery({
    queryFn: async () => {
      return (await axios.get(`${API_URL}/usuario/${id}`)).data
    },
    queryKey: [queryKey]
  })
  return {
    data: data,
    isLoading
  }
}