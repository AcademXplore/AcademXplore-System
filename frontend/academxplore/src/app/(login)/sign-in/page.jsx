'use client'
import {Formik, Form} from 'formik'
import InputLogin from '@/components/InputLogin/InputLogin';
import ButtonSubmit from '@/components/ButtonSubmit/ButtonSubmit';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import * as Yup from 'yup'
import { signIn, useSession } from 'next-auth/react';

export default function SignIn() {
  const [error, setError] = useState("")
  const [isFormSubmitting, setFormSubmitting] = useState(false)
  const router = useRouter();
  const { status } = useSession()

  useEffect(() => {
    if(status === "authenticated"){
      router.push("/timeline")
    }
  }, [status, router])

  const initialValues = {
    email: "",
    password: ""
  }

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Digite um e-mail válido")
      .required("O campo e-mail é obrigatório"),
    password: Yup.string().required("O campo senha é obrigatório")
  })

  const handleSubmit = (values, {resetForm}) => {
    setFormSubmitting(true)
    try {
      signIn("Credentials", {...values, redirect: false}).then(
        ({error})=>{
          if(!error){
            router.push("/timeline")
          }
          else{
            renderError("Erro ao tentar fazer login!")
            resetForm()
          }
          setFormSubmitting(false)
        }
      )
    } catch (error) {
      setFormSubmitting(false)
      renderError("Erro ao tentar fazer login!")
    }
  }
  const renderError = (msg) => {
    setError(msg)
    setTimeout(() => {
      setError("")
    }, 3000)
  }

  return (
    <main className="d-flex flex-column w-100 h-100 ">
      <Formik 
        validationSchema={validationSchema} 
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
      {
        ({values}) => {
          return(
            <Form noValidate className='d-flex flex-column w-100 justify-content-between h-100 mt-3 '>
              <div className='w-100'>
                <InputLogin iconBootstrap="bi bi-person" name="email" placeholder="Nome" type="email" required/>
                <InputLogin iconBootstrap="bi bi-lock" name="password" placeholder="Senha" type="password" autoComplete="off" required/>
              </div>
              <div className='w-100 align-items-center d-flex flex-column'>
                <ButtonSubmit 
                  text={isFormSubmitting ? "Carregando..." : "Entrar"}
                  disabled={isFormSubmitting}
                />
                {!values.email && !values.password && error && (
                  <span className='text-light text-medium fs-6'>{error}</span>
                )}
                <button className='bg-transparent border border-0 text-light mt-3 text-decoration-underline'>Esqueceu a senha?</button>
              </div>
            </Form>
          )
        }
      }
      </Formik>
      
    </main>
  );
}
