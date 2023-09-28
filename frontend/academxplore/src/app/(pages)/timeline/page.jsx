"use client"
import { ButtonPlusFloat } from "@/components/ButtonPlusFloat/ButtonPlusFloat"
import { DialogFormProjeto } from "@/components/DialogFormProjeto/DialogFormProjeto"
import { ProjectList } from "@/components/ProjectList/ProjectList"
import { FormProductContextProvider } from "@/contexts/FormProductContext"

import { useSession } from "next-auth/react"

export default function Timeline() {

  const {data: session} = useSession()

  const PERFIL = session?.user.perfil.toLowerCase()

  return(
    <FormProductContextProvider>
      <main className="container position-relative min-vh-100 d-flex flex-column justify-content-center">
        <DialogFormProjeto/>
        <ProjectList/>
        {PERFIL == "professor" && <ButtonPlusFloat/>}
      </main>
    </FormProductContextProvider>
  )
}