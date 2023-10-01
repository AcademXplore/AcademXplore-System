import { useEquipes } from "@/hooks/useEquipes"
import { useSelectEquipeCandidatura } from "@/hooks/useSelectEquipeCandidatura"
import { Loading } from "../Loading/Loading"
import { useSession } from "next-auth/react"

export function SelectEquipeCandidatura(){
  const {data: session} = useSession()
  const {isOpen, setIsOpen, equipes, setEquipes, isLoading, projetoId, setProjetoId} = useSelectEquipeCandidatura()

  const closeSelectEquipe = () => {
    setIsOpen(!isOpen)
    setEquipes([])
    setProjetoId("")
  }

  const candidatarNaEquipe = (equipeID) => {

    const API_URL = process.env.NEXT_PUBLIC_API_URL

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", session?.user?.accessToken);

    var raw = JSON.stringify({
      usuarioID: session?.user?.id,
      projetoID: projetoId,
      equipeID
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(`${API_URL}/candidatura/criar`, requestOptions)
      .then(async response => {
        if(response.status == 200){
          closeSelectEquipe()
          alert(await response.text())
        }
      })
      .catch(error => alert(error));

  }

  return (
    <>
      {isOpen && (
        <div className="fixed-top vw-100 fundo-dialogo vh-100 justify-content-center d-flex align-items-center py-md-4">
          <div className="bg-light rounded-4 border-1 border border-dark-subtle col-12 col-md-5 p-4">
            <div className="d-flex justify-content-between align-items-center">
              <h4 className="text-dark">Escolha uma Equipe</h4>
              <i className="bi bi-x-lg" onClick={closeSelectEquipe}></i>
            </div>
            <hr/>
            {isLoading ? <Loading/> :
              (
                equipes?.map(equipe => {
                  return(
                    <>
                      <div key={equipe.id} className="d-flex justify-content-between ">
                        <span key={equipe.id} className="fs-5">{equipe.nome}</span>
                        <button key={equipe.id} className="btn btn-success" onClick={() => candidatarNaEquipe(equipe.id)}>Escolher</button>
                      </div>
                      <hr/>
                    </>
                  )
                })
              )  
            }
          </div>
        </div>
      )}
    </>
  )
}