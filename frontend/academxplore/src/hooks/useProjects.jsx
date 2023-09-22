"use client"
import { useQuery } from "@tanstack/react-query";
//import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL

const fetcher = async () => {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkMzM3NDQzMC03MjFiLTRhZGEtOTI0Yy1mYTAwOWU4MWFiNTUiLCJpYXQiOjE2OTUzMzUwNDIsImV4cCI6MTY5NTQyMTQ0Mn0.nb2-nC1vmFwY0MBlGh5zSrvbzqO52gyr5RajjbUTN38");

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  
  return await fetch(`${API_URL}/projeto/ativo`, requestOptions).then(res => res.json())
}

export function useProjects(){
  const { data, isLoading } = useQuery({
    queryFn: fetcher,
    queryKey: ['projectsActive']
  })

  return {
    data: data,
    isLoading
  }
}