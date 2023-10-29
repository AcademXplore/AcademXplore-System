'use client'

import { useNav } from "@/hooks/useNav";
import OptionNavBar from "./OptionNavBar/OptionNavBar";
import { NavTypes } from "@/types/NavTypes";
import { useSession } from "next-auth/react";

export default function NavBar() {
  const {type, setType} = useNav()
  const {data: session} = useSession()
  
  const handleChangeType = (value) =>{
    setType(value)
  }
  
  return (
    <nav>
      <ul className="list-unstyled d-flex flex-md-row gap-3 my-auto ">
        <OptionNavBar onClick={() => handleChangeType(NavTypes.timeline)} className="bi bi-house" texto="Início" href="/timeline" selected={type === NavTypes.timeline}/>
        <OptionNavBar onClick={() => handleChangeType(NavTypes.myProjects)} className="bi bi-kanban" texto="Meus Projetos" href="/my-projects" selected={type === NavTypes.myProjects}/>
        {session?.user?.perfil == "ALUNO" && 
        <OptionNavBar onClick={() => handleChangeType(NavTypes.candidaturas)} className="bi bi-people" texto="Candidaturas" href="/candidaturas" selected={type === NavTypes.candidaturas}/>
        }
        <OptionNavBar onClick={() => handleChangeType(NavTypes.notifications)} className="bi bi-bell" texto="Notificações" href="/notifications" selected={type === NavTypes.notifications}/>
        <OptionNavBar onClick={() => handleChangeType(NavTypes.profile)} className="bi bi-person-circle" texto="Perfil" href="/profile" selected={type === NavTypes.profile}/>
      </ul>
    </nav>
  );
}
