
import { MyCandidaturasList } from "@/components/MyCandidaturasList/MyCandidaturasList";
import { SearchProjectsContextProvider } from "@/contexts/SearchProjectsContext";

export default function Candidaturas(){
  return(
    <main className="container position-relative h-100 d-flex flex-column">
      <SearchProjectsContextProvider>
        <MyCandidaturasList/>
      </SearchProjectsContextProvider>
    </main>
  )
}