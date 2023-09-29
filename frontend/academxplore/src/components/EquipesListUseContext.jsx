import { useNavDetailsProject } from "@/hooks/useNavDetailsProject"

export function EquipesListUseContext({equipes = []}){
  const {type} = useNavDetailsProject()
  return(
    <>
    {type == "equipes" && equipes?.map((equipe) => equipe.nome)}
    </>
  )
}