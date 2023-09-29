"use client";
import { Loading } from "@/components/Loading/Loading";
import { useEquipes } from "@/hooks/useEquipes";
import { useProject } from "@/hooks/useProject";
import { Banner } from "@/components/Banner";
import { NavDetailsProjectContextProvider } from "@/contexts/NavDetailsProjectContext";
import { ButtonsMyProjectDetails } from "@/components/ButtonsMyProjectDetails/ButtonsMyProjectDetails";
import { ParagraphsListUseContext } from "@/components/ParagraphsListUseContext";
import { EquipesListUseContext } from "@/components/EquipesListUseContext";

export default function MyProjectDetails({ params }) {
  
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

  return (
    <NavDetailsProjectContextProvider>
      <main className="container-fluid position-relative h-100 d-flex flex-column">
        {isLoadingEquipes && isLoadingProject ? <Loading />
          :
        <div className="p-4 d-flex flex-column align-items-center ">
          <Banner titulo={project?.titulo} banner={project?.banner} />
          <ButtonsMyProjectDetails/>
          <ParagraphsListUseContext paragraphs={paragraphs} />
          <EquipesListUseContext equipes={equipes}/>
        </div>
        }
      </main>
   </NavDetailsProjectContextProvider>
  );
}
