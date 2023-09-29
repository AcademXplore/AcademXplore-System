"use client";
import { useProject } from "@/hooks/useProject";
import "../../../../components/ProjectCard/ProjectCard.css";
import Image from "next/image";
import { Loading } from "@/components/Loading/Loading";
import { Banner } from "@/components/Banner";
import { ParagraphsList } from "@/components/ParagraphsList";

export default function ProjectDetails({ params }) {
  const { data, isLoading } = useProject(params.project);

  const paragraphs = [
    {
      titulo: "Descrição",
      descricao: data?.descricao
    },
    {
      titulo: "Objetivos",
      descricao: data?.objetivos
    },
    {
      titulo: "Cronograma de Atividades",
      descricao: data?.cronograma
    },
    {
      titulo: "Recursos Necessários",
      descricao: data?.recursosNecessarios
    }
  ]

  return (
    <main className="container position-relative h-100 d-flex flex-column">
      {isLoading ? <Loading/> :
      <div className="rounded-4 p-5 border-1 border mt-3 border-dark-subtle d-flex flex-column align-items-center bg-light">
        <Banner titulo={data?.titulo} banner={data?.banner}/>
        <ParagraphsList paragraphs={paragraphs}/>
      </div>}
    </main>
  );
}
