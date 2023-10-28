"use client"
import { Loading } from "@/components/Loading/Loading"
import { useNotificacoes } from "@/hooks/useNotificacoes"
import { gerarNumeroAleatorio } from "@/utils/gerarNumeroAleatorio"
import { useSession } from "next-auth/react"
import Image from "next/image"
import { useState } from "react"

export default function Notification() {
  const {data, isLoading} = useNotificacoes()
  const {data: session} = useSession()
  const [isVisible, setIsVisible] = useState(false)
  const [notificacao, setNotificacao] = useState({titulo: "", descricao: ""})
  const [isLoadingNotificacao, setIsLoadingNotificacao] = useState(false)

  const atualizarNotificacao = async (notificationId) => {
    debugger
    setIsLoadingNotificacao(true)
    const API_URL = process.env.NEXT_PUBLIC_API_URL
    var myHeaders = new Headers();
    myHeaders.append("Authorization", session?.user.accessToken);

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    const res = await fetch(`${API_URL}/notificacao/${notificationId}`, requestOptions).then(response => response.json())
    console.log(res)
    await fetch("/api/notification/" + notificationId, {
      method: "PUT",
      headers:{
        "Content-Type": "application/json",
        "Authorization": session?.user.accessToken
      }
    })
   
    setNotificacao({titulo: res.titulo, descricao: res.descricao})
    setIsLoadingNotificacao(false)
    setIsVisible(true)
  }

  return(
    <main className="container position-relative h-100 d-flex flex-column">
      {isVisible &&
        <div className="position-fixed top-0 start-0 vh-100 vw-100 z-1 d-flex justify-content-center align-items-center" onClick={() => {setIsVisible(false)}} style={{backgroundColor: 'rgba(0,0,0,0.25)'}}>
          <div className="col-12 col-md-4 rounded-3 text-light overflow-hidden " >
            <div className="w-100 p-3 fs-3" style={{backgroundColor: "#206B6A"}}>{notificacao.titulo}</div>
            <div className="w-100 p-1 text-center fw-medium fs-5" style={{backgroundColor: "#00B8B5", color: "#206B6A"}}>Notificação</div>
            <div className="w-100 bg-light p-3">
              <div className="w-100 text-dark fs-6 px-2 py-3" style={{border: "3px solid #00B8B5", borderRadius: "8px"}}>{notificacao.descricao}</div>
            </div>
          </div>
        </div>
      }
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