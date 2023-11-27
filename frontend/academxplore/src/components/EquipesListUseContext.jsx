'use client'
import { useNavDetailsProject } from "@/hooks/useNavDetailsProject"
import { gerarNumeroAleatorio } from "@/utils/gerarNumeroAleatorio"
import { useRouter } from "next/navigation"
import Image from "next/image"

export function EquipesListUseContext({equipes = []}){
  const {type} = useNavDetailsProject()
  const router = useRouter()
 
  return(
    <div className="row mt-3 gap-3 col-8">
    {type == "equipes" && equipes?.map((equipe) => {
      return(
        <div className="mt-2 col col-lg-4 p-0 bg-light rounded-4 border border-2 border-dark-subtle overflow-hidden">
          <div className="p-4 text-center fs-4 text-light" style={{backgroundColor: `rgb(${gerarNumeroAleatorio()}, ${gerarNumeroAleatorio()}, ${gerarNumeroAleatorio()})`}}>{equipe.nome}</div>
          {equipe.alunos.map(aluno => {
            return (
              <>
                <div key={aluno.id} onClick={() => router.push(`/profile/${aluno.id}`)} style={{cursor: 'pointer'}} className="px-2 mt-2 d-flex justify-content-evenly align-items-center gap-2">
                  <div className="rounded-circle overflow-hidden ">
                    <Image className="" src={aluno.foto} alt="foto aluno" height={80} width={80}/>
                  </div>
                  <span>
                    {aluno.nome}
                  </span>
                </div>
                <hr/>
                </>
            )
          })}
        </div>
      )
    })}
    </div>
  )
}