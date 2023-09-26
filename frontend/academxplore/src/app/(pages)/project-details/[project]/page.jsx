"use client";
import { useProject } from "@/hooks/useProject";
import "../../../../components/ProjectCard/ProjectCard.css";
import Image from "next/image";
import { Loading } from "@/components/Loading/Loading";

export default function ProjectDetails({ params }) {
  const { data, isLoading } = useProject(params.project);

  if (isLoading) {
    return (
      <Loading/>
    )
  }

  return (
    <main className="container">
      <div className="rounded-4 p-5 border-1 border mt-3 border-dark-subtle d-flex flex-column align-items-center bg-light">
        <div className="rounded-3 w-100 overflow-hidden card card-image">
          <Image
            alt={data?.titulo}
            className="card-img banner object-fit-cover "
            fill
            src={data?.banner}
          />
          <div className="card-img-overlay d-flex col-6 ">
            <h1 className="my-auto text-card-image">{data?.titulo}</h1>
          </div>
        </div>
        <div className="d-flex flex-column w-100">
          <div className="w-100 mt-3 ">
            <h1 class="fw-normal fs-4 text-dark">Descrição</h1>
            <p className="fs-6 text-dark-emphasis  ms-4">{data?.descricao}</p>            
          </div>
          <div className="w-100 mt-3 ">
            <h1 class="fw-normal fs-4 text-dark">Objetivos</h1>
            <p className="fs-6 text-dark-emphasis  ms-4">{data?.objetivos}</p>            
          </div>
          <div className="w-100 mt-3 ">
            <h1 class="fw-normal fs-4 text-dark">Cronograma de Atividades</h1>
            <p className="fs-6 text-dark-emphasis  ms-4">{data?.cronograma}</p>            
          </div>
          <div className="w-100 mt-3 ">
            <h1 class="fw-normal fs-4 text-dark">Recursos Necessários</h1>
            <p className="fs-6 text-dark-emphasis  ms-4">{data?.recursosNecessarios}</p>            
          </div>
         

        </div>
      </div>
    </main>
  );
}
