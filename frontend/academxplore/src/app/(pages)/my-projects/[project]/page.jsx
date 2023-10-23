"use client";
import { Loading } from "@/components/Loading/Loading";
import { useEquipes } from "@/hooks/useEquipes";
import { useProject } from "@/hooks/useProject";
import { Banner } from "@/components/Banner";
import { NavDetailsProjectContextProvider } from "@/contexts/NavDetailsProjectContext";
import { ButtonsMyProjectDetails } from "@/components/ButtonsMyProjectDetails/ButtonsMyProjectDetails";
import { ParagraphsListUseContext } from "@/components/ParagraphsListUseContext";
import { EquipesListUseContext } from "@/components/EquipesListUseContext";
import { useSession } from "next-auth/react";

export default function MyProjectDetails({ params }) {
  const {data: session} = useSession();
  const { data: project, isLoading: isLoadingProject } = useProject(
    params.project
  );
  const { data: equipes, isLoading: isLoadingEquipes } = useEquipes(
    params.project
  );

  const paragraphs = [
    {
      titulo: "Descrição",
      descricao: project?.descricao,
    },
    {
      titulo: "Objetivos",
      descricao: project?.objetivos,
    },
    {
      titulo: "Cronograma de Atividades",
      descricao: project?.cronograma,
    },
    {
      titulo: "Recursos Necessários",
      descricao: project?.recursosNecessarios,
    },
  ];

  const handleEncerrarProjeto = () => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL
    const idProjeto = params.project
    var myHeaders = new Headers();
    myHeaders.append("Authorization", session?.user?.accessToken);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch(`${API_URL}/projeto/encerrar/${idProjeto}`, requestOptions)
      .then(response => response.text())
      .then(result => alert(result))
      .catch(error => alert("Error: " + error));
  }

  return (
    <NavDetailsProjectContextProvider>
      <main className="container-fluid position-relative h-100 d-flex flex-column">
        {isLoadingEquipes && isLoadingProject ? <Loading />
          :
        <div className="p-4 d-flex flex-column align-items-center ">
          <Banner titulo={project?.titulo} banner={project?.banner} active={project?.status == "Inativo"} />
          <ButtonsMyProjectDetails/>
          <ParagraphsListUseContext paragraphs={paragraphs} />
          <EquipesListUseContext equipes={equipes}/>
          {project?.status == "Ativo" && <button onClick={handleEncerrarProjeto} className="btn btn-danger col-3 mt-4">Encerrar Projeto</button>}
        </div>
        }
      </main>
   </NavDetailsProjectContextProvider>
  );
}
