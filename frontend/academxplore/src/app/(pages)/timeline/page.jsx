"use client"
import { ButtonPlusFloat } from "@/components/ButtonPlusFloat/ButtonPlusFloat"
import { DialogFormProjeto } from "@/components/DialogFormProjeto/DialogFormProjeto"
import { ProjectList } from "@/components/ProjectList/ProjectList"
import { SelectEquipeCandidatura } from "@/components/SelectEquipeCandidatura/SelectEquipeCandidatura"
import { FormProductContextProvider } from "@/contexts/FormProductContext"
import { SelectEquipeCandidaturaContextProvider } from "@/contexts/SelectEquipeCandidaturaContext"

import { useSession } from "next-auth/react"

export default function Timeline() {

  const {data: session} = useSession()

  const PERFIL = session?.user.perfil.toLowerCase()

  return(
    <FormProductContextProvider>
      <SelectEquipeCandidaturaContextProvider>
        <main className="container position-relative h-100 d-flex flex-column">
          <DialogFormProjeto/>
          <SelectEquipeCandidatura/>
          <ProjectList/>
          {PERFIL == "professor" && <ButtonPlusFloat/>}
        </main>
      </SelectEquipeCandidaturaContextProvider>
    </FormProductContextProvider>
  )
}