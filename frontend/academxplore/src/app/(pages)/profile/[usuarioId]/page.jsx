"use client"
import { InputProfile } from "@/components/InputProfile/InputProfile"
import { Loading } from "@/components/Loading/Loading"
import { useProfile } from "@/hooks/useProfile"
import { Form, Formik } from "formik"
import { useSession } from "next-auth/react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function ProfileUserById({params}){
  const {data: session} = useSession()
  const {push} = useRouter()
  useEffect(() => {
    if(session?.user?.id == params.usuarioId){
      push("/profile")
    }
  }, [session, params])
  const {data, isLoading} = useProfile(params.usuarioId, "profileOtherUserByID")
  const [isDisabled, setIsDisabled] = useState(true)
  if (isLoading) {
    return (
      <Loading/>
    )
  }
  const initialValues = {
    nome: data?.nome || "",
    matricula: data?.matricula || "",
    instituicao: data?.instituicao || "",
    dataInicio: data?.dataInicio.split("T")[0] || "",
    lattes: data?.lattes || "",
    cpf: data?.cpf || "",
    telefone: data?.telefone || "",
    curso: data?.curso || "",
    dataFim: data?.dataFim.split("T")[0] || "",
    linkedin: data?.linkedin || "",
    formacao: data?.formacao || "",
    sobreVoce: data?.sobreVoce || ""
  }
  
  return(
    <main className="container position-relative py-3 h-100 d-flex justify-content-center gap-4">
      <div className="col-12 col-md-5 rounded-4 gap-2 border-1 border border-dark-subtle d-flex flex-column align-items-center bg-light overflow-hidden ">
        <div className="w-100 bg-dark-subtle rounded-4 position-relative" style={{height: "259px"}}>
          <Image className="w-100 h-100" src="https://img.freepik.com/fotos-gratis/pessoas-em-reuniao-de-negocios-em-alto-angulo_23-2148911819.jpg?w=740&t=st=1695514500~exp=1695515100~hmac=18634a8c4afe9fbd551b25fe487feb51403b7566027e6bf19b960b1efcd097f7" fill/>
        </div>
        <div className="position-relative w-100 " style={{height: '160px'}}>
          <div className="rounded-circle border border-5 border-light position-absolute overflow-hidden start-50 top-75 translate-middle " style={{height: '160px', width: '160px'}}>
            <Image className="w-100 h-100 object-fit-fill" src="https://img.freepik.com/fotos-gratis/pessoas-em-reuniao-de-negocios-em-alto-angulo_23-2148911819.jpg?w=740&t=st=1695514500~exp=1695515100~hmac=18634a8c4afe9fbd551b25fe487feb51403b7566027e6bf19b960b1efcd097f7" fill />
          </div>
          <div className="position-absolute top-50 start-50 translate-middle-x d-flex flex-column align-items-center">
            <span className="fs-5 fw-semibold">{data?.nome}</span>
            <span className="fs-5 fw-semibold">{data?.email}</span>
          </div>
        </div>
        <hr className="w-100" />
        <div className="d-flex justify-content-evenly w-100">
          <div className="d-flex flex-column align-items-center">
            <span className="fw-semibold fs-4">2</span>
            <span className="text-dark-emphasis">Projetos</span>
            <span className="text-dark-emphasis">Concluídos</span>
          </div>
          <div className="d-flex flex-column align-items-center">
            <span className="fw-semibold fs-4">2</span>
            <span className="text-dark-emphasis">Projetos</span>
            <span className="text-dark-emphasis">Ativos</span>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-7 rounded-4 p-4 border-1 border border-dark-subtle bg-light">
        <Formik
          initialValues={initialValues}
        >
          {({values}) => {
            return(
              <Form noValidate className='d-flex flex-column w-100 h-100 align-items-center'>
                <div className="d-flex w-100 justify-content-start">
                  <span className="fs-3">Perfil</span>
                </div>
                <div className="d-flex w-100 gap-4 ">
                  <div className="w-50 flex-column d-flex gap-2 ">
                    <InputProfile name="nome" type="text" label="Nome" disabled={isDisabled}/>
                    <InputProfile name="matricula" type="text" label="Matrícula" disabled={isDisabled}/>
                    <InputProfile name="instituicao" type="text" label="Instituição de Ensino" disabled={isDisabled}/>
                    <InputProfile name="dataInicio" type="date" label="Data de Início do Curso" disabled={isDisabled}/>
                    <InputProfile name="lattes" type="url" label="Lattes" disabled={isDisabled}/>
                  </div>
                  <div className="w-50 flex-column d-flex gap-2 ">
                    <InputProfile name="cpf" type="text" label="CPF" disabled={isDisabled}/>
                    <InputProfile name="telefone" type="tel" label="Telefone" disabled={isDisabled}/>
                    <InputProfile name="curso" type="text" label="Curso" disabled={isDisabled}/>
                    <InputProfile name="dataFim" type="date" label="Data do Fim do Curso" disabled={isDisabled}/>
                    <InputProfile name="linkedin" type="url" label="Linkedin" disabled={isDisabled}/>
                  </div>
                </div>
                <div className="w-100 mt-2">
                  <InputProfile name="formacao" type="text" label="Formação" disabled={isDisabled}/>  
                </div>
                <div className="w-100 mt-2">
                  <InputProfile name="sobreVoce" type="text" component="textarea" rows="3" label="Sobre Você" disabled={isDisabled}/>  
                </div>
              </Form>
            )
          }}
        </Formik>

      </div>
    </main>
  )
 
}