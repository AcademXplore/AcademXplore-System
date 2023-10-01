"use client"
import { useSession } from "next-auth/react";
import "./ProjectCard.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { IconCandidaturas } from "../IconCandidaturas";
import { useDialogCandidatura } from "@/hooks/useDialogCandidatura";
import { gerarNumeroAleatorio } from "@/utils/gerarNumeroAleatorio";
import { useSelectEquipeCandidatura } from "@/hooks/useSelectEquipeCandidatura";

export function ProjectCard({ id, title, banner, tags }) {
  const {data: session} = useSession()
  const {isVisible, setIsVisible, setProjeto, setIsLoading} = useDialogCandidatura()
  const {isOpen, setIsOpen, setEquipes, setIsLoading: setIsLoadingEquipesCandidatura, setProjetoId} = useSelectEquipeCandidatura()
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
      <div className="rounded-3 w-100 overflow-hidden card card-image">
        <Image alt={title}
          className="card-img banner object-fit-cover "
          fill
          src={banner}
        />
        <div className="card-img-overlay d-flex col-6 ">
          <h1 className="my-auto text-card-image">{title}</h1>
        </div>
      </div>
      <div className="w-100 d-flex justify-content-between pt-4 align-items-center">
        <div className="d-flex gap-3">
          {tags?.map((tag) => (
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
          ))}
        </div>
        {pathname == "/timeline" ?
        <div className="d-flex gap-3 ">
          <Link className="btn-entenda-mais" href={`/project-details/${id}`} >Entender mais</Link>
          {PERFIL == "aluno" && <div className="btn-candidatar" onClick={handleCandidatar} type="button">Candidatar-se</div>}
        </div> 
        : 
        <div className="d-flex gap-3 ">
          {PERFIL == "professor" && <IconCandidaturas className="align-self-center" onClick={() => openDialogCandidaturas()}/>}
          <Link className="btn-abrir-projeto" href={`/my-projects/${id}`} >Abrir Projeto</Link>
        </div>
        }
      </div>
    </div>
  );
}
