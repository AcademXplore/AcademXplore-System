import { useSession } from "next-auth/react";
import "./ProjectCard.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function ProjectCard({ id, title, banner, tags }) {
  const {data: session} = useSession()
  const [seCandidatou, setSeCandidatou] = useState(false)

  const PERFIL = session?.user.perfil.toLowerCase()

  const gerarNumeroAleatorio = () => {
    const numeroAleatorio = Math.random();

    const numeroEntreZeroE255 = Math.floor(numeroAleatorio * 256);

    return numeroEntreZeroE255;
  };

  const handleCandidatar = () =>{
    setSeCandidatou(!seCandidatou)
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
        <div className="d-flex gap-3 ">
          <Link className="btn-entenda-mais" href={`/project-details/${id}`} >Entender mais</Link>
          {PERFIL == "aluno" && <div className="btn-candidatar" onClick={handleCandidatar} type="button">{seCandidatou ? <i className="bi bi-check-lg text-light"></i> : "Candidatar-se"}</div>}
        </div>
      </div>
    </div>
  );
}
