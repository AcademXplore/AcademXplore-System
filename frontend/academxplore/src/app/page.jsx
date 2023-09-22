import styles from "./page.module.css";
import Image from "next/image";
import logo from "../img/logo.svg"
import Link from 'next/link'

export default function Home() {
  return (
    <main id={styles["main-home"]} className="position-relative vh-100 d-flex align-items-center px-5 ">
      <div className="position-absolute p-4 top-0 start-0">
        <Image src={logo} height={96} width={96}/>
      </div>
      <div className="mx-0 mx-md-5 mt-5 pt-5 d-flex flex-column gap-0 gap-md-5">
        <div className="text-light col-12 col-md-7 gap-2 d-flex flex-column">
          <h1 className="fw-bold">AcademXplore</h1>
          <h2 className="fw-lighter ">Simpler and better</h2>
          <p className="fw-lighter ">Sistema de gestão de projetos acadêmicos desenvolvido por estudantes de Análise e Desenvolvimento de Sistemas. Simplifica a criação, execução e colaboração em projetos, incentivando inovação e excelência. Uma ferramenta essencial para explorar o potencial e alcançar o sucesso acadêmico.</p>
        </div>
        <div className="d-flex flex-column flex-md-row w-100 justify-content-end gap-4">
            <Link className={styles["btn-login-home"]} href="/sign-in">Login</Link>
            <Link className={styles["btn-cadastrar-home"]} href="/sign-up">Criar Conta</Link>
        </div>
      </div>
    </main>
  );
}
