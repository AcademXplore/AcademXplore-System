"use client"
import { ButtonPlusFloat } from "@/components/ButtonPlusFloat/ButtonPlusFloat"
import { DialogFormProjeto } from "@/components/DialogFormProjeto/DialogFormProjeto"
import { DialogCandidaturas } from "@/components/DialogCandidaturas/DialogCandidaturas"
import { useSession } from "next-auth/react"
import { FormProductContextProvider } from "@/contexts/FormProductContext"
import { MyProjectsList } from "@/components/MyProjectsList/MyProjectsList"
import { DialogCandidaturaContextProvider } from "@/contexts/DialogCandidaturaContext"
import { SearchProjectsContextProvider } from "@/contexts/SearchProjectsContext"

export default function MyProject() {
  const {data: session} = useSession()
  const PERFIL = session?.user.perfil.toLowerCase()
  return(
    <FormProductContextProvider>
      <DialogCandidaturaContextProvider>
        <main className="container position-relative">
          <DialogFormProjeto/>
          <DialogCandidaturas/>
          <SearchProjectsContextProvider>
            <MyProjectsList/>
          </SearchProjectsContextProvider>
          {PERFIL == "professor" && <ButtonPlusFloat/>}
        </main>
      </DialogCandidaturaContextProvider>
    </FormProductContextProvider>
  )
}