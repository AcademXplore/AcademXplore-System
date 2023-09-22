'use client'

import { useNav } from "@/hooks/useNav";
import OptionNavBar from "./OptionNavBar/OptionNavBar";
import { NavTypes } from "@/types/NavTypes";

export default function NavBar() {
  const {type, setType} = useNav()
  
  const handleChangeType = (value) =>{
    setType(value)
  }
  
  return (
    <nav>
      <ul className="list-unstyled d-flex flex-md-row gap-3 my-auto ">
        <OptionNavBar onClick={() => handleChangeType(NavTypes.timeline)} className="bi bi-house" texto="Início" href="/timeline" selected={type === NavTypes.timeline}/>
        <OptionNavBar onClick={() => handleChangeType(NavTypes.myProjects)} className="bi bi-kanban" texto="Meus Projetos" href="/my-projects" selected={type === NavTypes.myProjects}/>
        <OptionNavBar onClick={() => handleChangeType(NavTypes.notifications)} className="bi bi-bell" texto="Notificações" href="/notifications" selected={type === NavTypes.notifications}/>
        <OptionNavBar onClick={() => handleChangeType(NavTypes.profile)} className="bi bi-person-circle" texto="Perfil" href="/profile" selected={type === NavTypes.profile}/>
      </ul>
    </nav>
  );
}
