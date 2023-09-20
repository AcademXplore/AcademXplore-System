import OptionNavBar from "./OptionNavBar/OptionNavBar";
export default function NavBar() {
  return (
    <nav>
      <ul className="list-unstyled d-flex flex-md-row gap-3 my-auto ">
        <OptionNavBar className="bi bi-house" texto="Início" selected={false}/>
        <OptionNavBar className="bi bi-kanban" texto="Meus Projetos" selected/>
        <OptionNavBar className="bi bi-bell" texto="Notificações" selected={false}/>
        <OptionNavBar className="bi bi-person-circle" texto="Perfil" selected={false}/>
      </ul>
    </nav>
  );
}
