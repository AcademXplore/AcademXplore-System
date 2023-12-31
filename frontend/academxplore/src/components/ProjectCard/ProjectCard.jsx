"use client"
import { useSession } from "next-auth/react";
import "./ProjectCard.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconCandidaturas } from "../IconCandidaturas";
import { useDialogCandidatura } from "@/hooks/useDialogCandidatura";
import { gerarNumeroAleatorio } from "@/utils/gerarNumeroAleatorio";
import { useSelectEquipeCandidatura } from "@/hooks/useSelectEquipeCandidatura";
import { Banner } from "../Banner";

export function ProjectCard({ id, title, banner, tags, status, isLoading }) {
  const {data: session} = useSession()
  const {setIsVisible, setProjeto, setIsLoading} = useDialogCandidatura()
  const {setIsOpen, setEquipes, setIsLoading: setIsLoadingEquipesCandidatura, setProjetoId} = useSelectEquipeCandidatura()
  const pathname = usePathname();

  const PERFIL = session?.user.perfil.toLowerCase()

  const checkarSeJaCandidatou = async () => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", session?.user?.accessToken);

    var raw = JSON.stringify({
      usuarioID: session?.user?.id,
      projetoID: id
    });
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    const res = await fetch(`${API_URL}/candidatura/confirmar`, requestOptions).then(res => res.json())

    return res
  }

  const handleCandidatar = async () =>{
    setIsOpen(true)
    setIsLoadingEquipesCandidatura(true)
    const possuiCandidatura = await checkarSeJaCandidatou()
    if(possuiCandidatura){
      setIsLoadingEquipesCandidatura(false)
      setIsOpen(false)
      alert("Você já se candidatou nesse projeto anteriormente. Tente um outro projeto...")
    }
    else{
      var myHeaders = new Headers();
      myHeaders.append("Authorization", session?.user?.accessToken);
    
      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };
      const res = await fetch(`/api/project/equipes/${id}`, requestOptions).then(res => res.json())
      setProjetoId(id)
      setEquipes(res?.data?.equipes)
      setIsLoadingEquipesCandidatura(false)
    }
  }

  const openDialogCandidaturas = async () => {
    try{
      setIsVisible(true)
      setIsLoading(true)
      await fetch("/api/project/candidatura/"+id, {
        method: "GET",
        headers:{
          "Content-Type": "application/json",
          "Authorization": session?.user.accessToken
        }
      })
      .then(async (res) => {
        const result = await res.json()
        
        if(result.status == 201){
          setProjeto(result.data)
        }
      })
      setIsLoading(false)
    }
    catch(error){

    }
  }

  return (
    <div
      id={id}
      className="rounded-4 p-4 border-1 border mt-3 border-dark-subtle d-flex flex-column align-items-center bg-light"
    >
      
      <Banner banner={banner} titulo={title} key={id} active={status == "Inativo"} isLoading={isLoading}/>
      <div className="w-100 d-flex justify-content-between pt-4 align-items-center">
        <div className="d-flex gap-3">
          {
            isLoading ? 
            <span
              className="py-2 px-3 fw-medium text-light d-flex align-items-center "
              style={{
                background: ` linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),rgb(${gerarNumeroAleatorio()}, ${gerarNumeroAleatorio()}, ${gerarNumeroAleatorio()})`,
                fontSize: "12px",
                cursor: "default"
              }}
            >
              <span class="placeholder" style={{width: "70px"}}></span>
            </span>
            :
            tags?.map((tag) => (
              <span
                className="py-1 px-3 fw-medium text-light"
                style={{
                  background: ` linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),rgb(${gerarNumeroAleatorio()}, ${gerarNumeroAleatorio()}, ${gerarNumeroAleatorio()})`,
                  fontSize: "12px",
                  cursor: "default"
                }}
                key={tag.id}
              >
                {tag.nome}
              </span>
            ))
          }
        </div>
        
        <div className="d-flex gap-3 ">
        {
          isLoading ?
            <a class="btn-abrir-projeto placeholder" aria-disabled="true">Carregando...</a>
          :
          (pathname == "/timeline" || pathname == "/candidaturas")?
            <>
              <Link className="btn-entenda-mais" href={`/project-details/${id}`} >Entender mais</Link>
              {PERFIL == "aluno" && pathname == "/timeline" && <button className="btn-candidatar" onClick={handleCandidatar} type="button">Candidatar-se</button>}
            </>
          : 
            <>
              {PERFIL == "professor" && status == "Ativo" && <IconCandidaturas className="align-self-center" onClick={() => openDialogCandidaturas()}/>}
              <Link className="btn-abrir-projeto" href={`/my-projects/${id}`} >Abrir Projeto</Link>
            </>          
        }
        </div>
      </div>
    </div>
  );
}
