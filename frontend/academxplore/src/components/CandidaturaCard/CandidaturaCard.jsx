import Image from "next/image";
import "./CandidaturaCard.css"
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export function CandidaturaCard({id, light, nome, foto, userId}) {
  const {data: session} = useSession()
  const router = useRouter()
  
  const aceitarCandidatura = () =>{
    const API_URL = process.env.NEXT_PUBLIC_API_URL
    const confirmacao = window.confirm("Deseja realmente aceitar a candidatura deste aluno?")
    if(confirmacao){
      var myHeaders = new Headers();
      myHeaders.append("Authorization", session?.user?.accessToken);

      var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        redirect: 'follow'
      };

      fetch(`${API_URL}/candidatura/aceitar/${id}`, requestOptions)
      .then(response => {
        if(response.status == 200){
          alert("Candidatura aceito com sucesso")
        }
      })
      .catch(error => alert(error));
    }
  }
  const recusarCandidatura = () =>{
    const API_URL = process.env.NEXT_PUBLIC_API_URL
    const mensagem = window.prompt("Digite o motivo que levou a recusa da candidatura do aluno, explique brevemente!")
    if(mensagem != null){
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Authorization", session?.user?.accessToken);

      var raw = JSON.stringify({
        mensagem: mensagem
      });

      var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      fetch(`${API_URL}/candidatura/recusar/${id}`, requestOptions)
        .then(response => {
          if(response.status == 200){
            alert("Candidatura recusada com sucesso")
          }
        })
        .catch(error => alert(error));
    }

  }

  return(
    <div className={"d-flex justify-content-between align-items-center px-3 " + (light ? "bg-candidatura-light" : "bg-candidatura-dark")}>
      <div className="d-flex align-items-center gap-3 p-1" style={{cursor: 'pointer'}} onClick={() => router.push(`/profile/${userId}`)}>
        <Image className="rounded-5 object-fit-cover " src={foto} height={60} width={60}/>
        <span className="nome-candidato">{nome}</span>
      </div>
      <div className="d-flex gap-1 fs-5">
        <i onClick={() => aceitarCandidatura()} className="bi bi-check-square text-success "></i>
        <i onClick={() => recusarCandidatura()} className="bi bi-x-square text-danger "></i>
      </div>
    </div>
  )
}