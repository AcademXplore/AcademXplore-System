"use client"
import { Loading } from "@/components/Loading/Loading"
import { useNotificacoes } from "@/hooks/useNotificacoes"
import { gerarNumeroAleatorio } from "@/utils/gerarNumeroAleatorio"
import { useSession } from "next-auth/react"
import Image from "next/image"

export default function Notification() {
  const {data, isLoading} = useNotificacoes()
  const {data: session} = useSession()
  const atualizarNotificacao = async (notificationId) => {
    await fetch("/api/notification/" + notificationId, {
      method: "PUT",
      headers:{
        "Content-Type": "application/json",
        "Authorization": session?.user.accessToken
      }
    })
    .then(async (res) => {
     //Resposta API notificação
    })
  }

  return(
    <main className="container position-relative h-100 d-flex flex-column">
       <div className="rounded-4 gap-2 py-3 px-4 border-1 border mt-3 border-dark-subtle d-flex flex-column align-items-center bg-light">
         {isLoading ? <Loading/> : 
          data?.map(notification => {
            return(
              <div onClick={() => atualizarNotificacao(notification.id)} key={notification.id} id={notification.id} className="w-100 py-2 px-5 gap-3 position-relative align-items-center text-light rounded-3 d-flex" style={{cursor: "pointer",backgroundColor: notification.status == "Ativo" ? "var(--secundary-color)" : "var(--primary-color)"}}>
                <div className="justify-content-center d-flex" style={{minHeight: "60px", minWidth: "60px", borderRadius: "100%", backgroundColor: `rgb(${gerarNumeroAleatorio()}, ${gerarNumeroAleatorio()}, ${gerarNumeroAleatorio()})`}}>
                  <h2 className="align-self-center my-auto">FB</h2>
                </div>
                <div className="text-wrap">
                  <span>{notification.descricao}</span>
                  <div style={{right: "20px", fontSize: "12px"}} className="position-absolute bottom-0">
                    <span>{new Date(notification.dataCriacao).toLocaleString()}</span>
                  </div>
                </div>
                
              </div>
            )
          })
         }
       </div>
    </main>
  )
}