import { Form, Formik } from "formik"
import "./DialogFormProjeto.css"
import { InputImage } from "../InputImage/InputImage"
import { InputFormProject } from "../InputFormProject/InputFormProject"
import { useState } from "react";
import ButtonSubmitProject from "../ButtonSubmitProject/ButtonSubmitProject";
import { useRouter } from "next/navigation";
import * as Yup from 'yup'
import { InputTags } from "../InputTags/InputTags";
import { useSession } from "next-auth/react";
import { useFormProduct } from "@/hooks/useFormProduct";

export function DialogFormProjeto(){
  const {isVisible, setIsVisible} = useFormProduct()
  const [error, setError] = useState("")
  const [isFormSubmitting, setFormSubmitting] = useState(false)
  const {data} = useSession()

  const initialValues = {
    file: "",
    titulo: "",
    descricao: "",
    objetivos: "",
    cronograma: "",
    areasInteresse: "",
    equipes: "",
    coorientador: "",
    recursosNecessarios: ""
  }

  const validationSchema = Yup.object().shape({
    file: Yup.string(),
    titulo: Yup.string().required("Adicione um título para o projeto!"),
    descricao: Yup.string().required("Adicione uma descrição para o projeto!"),
    objetivos: Yup.string().required("Adicione um objetivo para o projeto!"),
    cronograma: Yup.string().required("Adicione o cronograma para o projeto!"),
    areasInteresse: Yup.string(),
    equipes: Yup.string(),
    coorientador: Yup.string().email(),
    recursosNecessarios: Yup.string()
  })

  const handleSubmit = async(values, {resetForm}) => {
    setFormSubmitting(true)
    try {
      await fetch("/api/project/register",{
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          banner: values.file,
          titulo: values.titulo,
          descricao: values.descricao,
          objetivos: values.objetivos,
          cronograma: values.cronograma,
          areasInteresse: values.areasInteresse,
          coorientador: values.coorientador,
          recursosNecessarios: values.recursosNecessarios,
          token: data?.user?.accessToken,
          professor: data?.user?.id,
          equipes: values.equipes
        })
      })
      .then(async (res) => {
        const result = await res.json()
        debugger
        console.log(result)
        if(result.status === 201){
          alert(result.message)
          resetForm()
        }
        else{
          renderError(result.message)
          resetForm()
        }
        setFormSubmitting(false)
      })
    } catch (error) {
      setFormSubmitting(false)
      renderError("Tente mais tarde")
    }
  }

  const renderError = (msg) => {
    setError(msg)
    setTimeout(() => {
      setError("")
    }, 3000)
  }

  const handleFecharDialogo = () => {
    setIsVisible(false)
  }

  return(
    <div className={"fixed-top vw-100 fundo-dialogo vh-100 justify-content-center align-items-center py-md-4 " + (isVisible ? "d-flex visible" : "d-none invisible")}>
      <div className="container bg-light h-100 rounded-4 p-4 overflow-hidden ">
        <div className="d-flex justify-content-between">
          <h1 className="fw-normal text-dark fs-3 ">Insira os dados do seu projeto</h1>
          <i className="bi bi-x-lg fs-3" onClick={handleFecharDialogo}></i>
        </div>
        <Formik
          validationSchema={validationSchema} 
          initialValues={initialValues}
          onSubmit={handleSubmit}
        >
        {
          ({values, setFieldValue}) => {
            return(
              <Form noValidate className="d-flex flex-column gap-3 w-100 overflow-scroll h-100 py-3">
                <InputImage setFieldValue={setFieldValue} name="file"/>
                <InputFormProject name="titulo" label="Título" type="text" placeholder="Insira sem o título do projeto..."/>
                <InputFormProject name="descricao" label="Descrição" type="text" component="textarea" placeholder="Insira uma breve descrição do projeto..."/>
                <InputFormProject name="objetivos" label="Objetivos" type="text" component="textarea" placeholder="Quais os objetivos que deseja alcançar?"/>
                <InputFormProject name="cronograma" label="Cronograma de Atividades" type="text" component="textarea" placeholder="Escreva o cronograma detalhado das atividades."/>
                <InputTags setFieldValue={setFieldValue} name="areasInteresse" label="Áreas de Interesse" type="text" placeholder="Digite as áreas que deseja adicionar ao projeto. (Utilize vírgula para adicionar outra tag)"/>
                <InputTags setFieldValue={setFieldValue} name="equipes" label="Equipes" type="text" placeholder="Digite as equipes que deseja adicionar ao projeto. (Utilize vírgula para adicionar outra tag)"/>
                <InputFormProject name="coorientador" label="Co-orientador" type="email" placeholder="Digite o email do coorientador..."/>
                <InputFormProject name="recursosNecessarios" label="Recursos Necessários" type="text" component="textarea" placeholder="Digite o que é necessário para os alunos conseguirem participar do projeto..."/>
                <ButtonSubmitProject 
                  text={isFormSubmitting ? "Carregando..." : "Criar"}
                  disabled={isFormSubmitting}
                />
                {!values.banner && !values.titulo && !values.descricao && !values.cronograma && !values.areasInteresse && !values.coorientador && !values.recursosNecessarios && (
                <span className='text-danger text-medium fs-6'>{error}</span>
              )}

              </Form>
            )
          }
        }
        </Formik>
      </div>
    </div>
  )
}