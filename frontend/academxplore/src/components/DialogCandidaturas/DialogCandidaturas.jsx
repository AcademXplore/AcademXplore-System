import { useDialogCandidatura } from "@/hooks/useDialogCandidatura"
import "../DialogFormProjeto/DialogFormProjeto.css"
import Image from "next/image"
import { CandidaturaCard } from "../CandidaturaCard/CandidaturaCard"
import { Loading } from "../Loading/Loading"


export function DialogCandidaturas(){
  const {isVisible, setIsVisible, projeto, setProjeto, isLoading} = useDialogCandidatura()
  const closeDialog = () => {
    setIsVisible(!isVisible)
    setProjeto([])
  }


  return (
    <>
      {isVisible && (
        <div className="fixed-top vw-100 fundo-dialogo vh-100 justify-content-center d-flex align-items-center py-md-4">
          <div className="p-3 bg-light h-75 col-4 rounded-3 d-flex flex-column ">
            <div className="w-100 d-flex justify-content-between">
              <h5>Candidaturas Pendentes</h5>
              <i onClick={closeDialog} style={{cursor: "pointer"}} className="bi bi-x fs-4"></i>
            </div>
            {isLoading && <Loading/>}
            <div className="d-flex flex-column overflow-y-auto">
              {projeto?.map((candidato, i) => <CandidaturaCard key={candidato.id} id={candidato.id} nome={candidato.aluno.nome} light={i % 2 == 0}/>)}
            </div>
              
          </div>
        </div>
      )}
    </>

  )
}