import { Form, Formik } from "formik"
import { InputImage } from "../InputImage/InputImage"
import ButtonSubmitProject from "../ButtonSubmitProject/ButtonSubmitProject"
import { useState } from "react"
import * as Yup from 'yup'
import { useSession } from "next-auth/react"

export function DialogInsertImage({tipo, onClick, usuario}){
  const [isFormSubmitting, setFormSubmitting] = useState(false)
  const {data: session} = useSession()

  const initialValues = {
    file: ""
  }

  const validationSchema = Yup.object().shape({
    file: Yup.string()
  })

  const handleSubmit = async(values, {resetForm}) =>{
    setFormSubmitting(true)
    console.log(values)
    try {
      await fetch("/api/profile/photo",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": session?.user?.accessToken
        },
        body: JSON.stringify({
          imagem: values.file,
          tipo,
          usuario
        })
      })
      .then(async (res) => {
        const result = await res.json()
        debugger
        if(result.status === 201){
          alert("Imagem atualizada com sucesso!")
          resetForm()
        }
        else{
          alert(result.message)
          resetForm()
        }
        setFormSubmitting(false)
      })
    } catch (error) {
      setFormSubmitting(false)
      alert("Tente mais tarde")
    }
  }
  return(
    <div className="position-fixed z-1 top-0 start-0 vw-100 vh-100 d-flex justify-content-center align-items-center" style={{backgroundColor: "rgba(0,0,0,0.25)"}}>
      <div className="col-4 bg-light rounded-4 overflow-hidden p-4 z-2">
        <div className="d-flex justify-content-between ">
          <h3>Inserir {tipo}</h3>
          <i onClick={() => {onClick("")}} className="bi bi-x-lg"></i>
        </div>
        <Formik
            validationSchema={validationSchema} 
            initialValues={initialValues}
            onSubmit={handleSubmit}
          >
          {
            ({values, setFieldValue }) => {
              return(
                <Form noValidate className="d-flex flex-column gap-3 w-100 h-100 py-3">
                  <InputImage setFieldValue={setFieldValue} name="file"/>
                  <ButtonSubmitProject 
                    text={isFormSubmitting ? "Carregando..." : "Enviar"}
                    disabled={isFormSubmitting}
                  />
                </Form>
              )
            }
          }
          </Formik>
      </div>
    </div>
  )
}