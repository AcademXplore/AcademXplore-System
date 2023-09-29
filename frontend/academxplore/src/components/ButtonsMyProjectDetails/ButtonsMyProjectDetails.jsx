import { useNavDetailsProject } from "@/hooks/useNavDetailsProject"
import { IconPeopleTeam } from "../IconPeopleTeam"
import { IconInformation } from "../IconInformation"

export function ButtonsMyProjectDetails(){
  const {type, setType} = useNavDetailsProject()
  return (
    <div className="col-12 col-md-8 mt-3 d-flex justify-content-center py-1 rounded-3 gap-5" style={{backgroundColor: "#206B6A"}}>
      <button className={"btn d-flex flex-column align-items-center col-2 " + (type == "equipes" && "bg-light")} style={{color: (type == "equipes" ? "#206B6A" : "#FFFFFF")}} onClick={() => setType("equipes")}><IconPeopleTeam fill={type == "equipes" ? "#206B6A" : "#FFFFFF"}/>Equipes</button>
      <button className={"btn d-flex flex-column align-items-center col-2 " + (type == "informacoes" && "bg-light")} style={{color: (type == "informacoes" ? "#206B6A" : "#FFFFFF")}} onClick={() => setType("informacoes")}><IconInformation fill={type == "informacoes" ? "#206B6A" : "#FFFFFF"}/>Informações</button>
    </div>
  )
}