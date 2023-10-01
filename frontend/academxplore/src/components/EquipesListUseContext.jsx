import { useNavDetailsProject } from "@/hooks/useNavDetailsProject"
import { gerarNumeroAleatorio } from "@/utils/gerarNumeroAleatorio"
import Image from "next/image"

export function EquipesListUseContext({equipes = []}){
  const {type} = useNavDetailsProject()
 
  return(
    <div className="d-flex mt-3 gap-3 col-12 justify-content-center flex-wrap">
    {type == "equipes" && equipes?.map((equipe) => {
      return(
        <div className="mt-2 col-12 col-md-3 bg-light rounded-4 border border-2 border-dark-subtle overflow-hidden">
          <div className="p-4 text-center fs-4 text-light" style={{backgroundColor: `rgb(${gerarNumeroAleatorio()}, ${gerarNumeroAleatorio()}, ${gerarNumeroAleatorio()})`}}>{equipe.nome}</div>
          {equipe.alunos.map(aluno => {
            return (
              <div className="px-2 mt-2 d-flex justify-content-evenly align-items-center gap-2">
                <Image className="rounded-5" src="" alt="" height={80} width={80}/>
                {aluno.nome}
              </div>
            )
          })}
        </div>
      )
    })}
    </div>
  )
}