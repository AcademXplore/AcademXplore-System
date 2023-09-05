import Image from "next/image";
import styles from "./page.module.css";
import backgroundImage from "../app/Images/01.jpg";

export default function Home() {
  return (
    <main>
      <div>

        <div>
            <h1 className={styles.h1}> AcademXplore </h1>
            <h2 className={styles.h1}> Simpler and better </h2>
            <h4 className={styles.h1}> Sistema de gestão de projetos acadêmicos desenvolvido por estudantes de 
             Análise e Desenvolvimento de Sistemas. Simplifica a criação, execução e 
            colaboração em projetos, incentivando inovação e excelência. Uma ferramenta 
            essencial para explorar o potencial e alcançar o sucesso acadêmico.</h4>
        </div>

            <div>
              <button onclick="" > Login </button>
              <button onclick="" > Criar conta </button>

            </div>
      </div>
    </main>
  );
}
