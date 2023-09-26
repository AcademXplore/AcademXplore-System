"use client"

import { Loading } from "@/components/Loading/Loading"
import { useProfile } from "@/hooks/useProfile"

export default function Profile() {
  const {data, isLoading} = useProfile()

  if (isLoading) {
    return (
      <Loading/>
    )
  }

  return(
    <main >
      <div>id: {data?.id}</div> 
      <div>Nome: {data?.nome}</div> 
      <div>CPF: {data?.cpf}</div> 
      <div>email: {data?.email}</div> 
      <div>instituicao: {data?.instituicao}</div> 
      <div>perfil: {data?.perfil}</div>
      <div>matricula: {data?.matricula}</div> 
      <div>lattes: {data?.lattes}</div> 
      <div>linkedin: {data?.linkedin}</div> 
      <div>telefone: {data?.telefone}</div> 
      <div>curso: {data?.curso}</div> 
      <div>sobreVoce: {data?.sobreVoce}</div>
      <div>formacao: {data?.formacao}</div> 
      <div>dataInicio: {data?.dataInicio}</div> 
      <div>dataFim: {data?.dataFim}</div>    
    </main>
  )
}