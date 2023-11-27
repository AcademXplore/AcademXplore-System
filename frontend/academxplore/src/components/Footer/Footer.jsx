import Link from "next/link"
import "./Footer.css"
import { useNav } from "@/hooks/useNav";
import { NavTypes } from "@/types/NavTypes";
import { useSession } from "next-auth/react";

export function Footer(){
  const {type, setType} = useNav()
  const {data: session} = useSession()
  
  const handleChangeType = (value) =>{
    setType(value)
  }
  
  return(
    <footer className="vw-100 bg-light position-absolute bottom- d-flex flex-column align-items-center py-3 gap-3">
      <div style={{height: "2px", width: "95%", backgroundColor: "#206B6A"}}></div>
      <div className="d-flex align-items-center h-100">
        <nav>
          <ul className="d-flex list-unstyled gap-4 m-0 ">
            <Link className="text-decoration-none" style={{color: "#206B6A"}} onClick={() => handleChangeType(NavTypes.timeline)} href={NavTypes.timeline}><li>Início</li></Link>
            <Link className="text-decoration-none" style={{color: "#206B6A"}} onClick={() => handleChangeType(NavTypes.myProjects)} href={NavTypes.myProjects}><li>Meus Projetos</li></Link>
            {session?.user?.perfil == "ALUNO" &&
              <Link className="text-decoration-none" style={{color: "#206B6A"}} onClick={() => handleChangeType(NavTypes.candidaturas)} href={NavTypes.candidaturas}><li>Candidaturas</li></Link>
            }
            <Link className="text-decoration-none" style={{color: "#206B6A"}} onClick={() => handleChangeType(NavTypes.notifications)} href={NavTypes.notifications}><li>Notificações</li></Link>
            <Link className="text-decoration-none" style={{color: "#206B6A"}} onClick={() => handleChangeType(NavTypes.profile)} href={NavTypes.profile}><li>Perfil</li></Link>
          </ul>
        </nav>
      </div>
      <div style={{height: "2px", width: "95%", backgroundColor: "#206B6A"}}></div>
    </footer>
  )
}