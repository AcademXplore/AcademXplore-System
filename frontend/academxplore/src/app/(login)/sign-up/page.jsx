"use client"
import ButtonSubmit from '@/components/ButtonSubmit/ButtonSubmit';
import InputLogin from '../../../components/InputLogin/InputLogin'
import {Formik, Form} from 'formik'
import "../login.css"
import * as Yup from 'yup'
import { cpfIsInvalid } from '@/utils/cpfIsInvalid';
import { optionIsValid } from '@/utils/optionIsValid';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';

export default function SignUp() {
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
    nome: "",
    cpf: "",
    email: "",
    instituicao: "",
    perfil: 0,
    matricula: "",
    password: "",
    confirmaPassword: ""
  }
 
  const validationSchema = Yup.object().shape({
    nome: Yup.string().required("O campo Nome é obrigatório"),
    cpf: Yup.string().test('test-invalid-cpf','CPF inválido',(cpf) =>  cpfIsInvalid(cpf)).required("O campo CPF é obrigatório"),
    email: Yup.string()
      .email("Digite um e-mail válido")
      .required("O campo e-mail é obrigatório"),
    instituicao: Yup.string().required("O campo Intituição é obrigatório"),
    perfil: Yup.string().test('test-invalid-option','Opção inválida', (option) => optionIsValid(option)).required("O campo Perfil é obrigatório"),
    matricula: Yup.string().required("O campo matricula é obrigatório"),
    password: Yup.string().required("O campo senha é obrigatório"),
    confirmaPassword: Yup.string()
      .required('O campo confirmação de senha é obrigatório')
      .oneOf([Yup.ref('password')], 'As senhas devem corresponder')
  })

  const handleSubmit = async (values, {resetForm}) => {
    
    setFormSubmitting(true)
    try {
      await fetch("/api/auth/register",{
        method: "POST",
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          nome: values.nome,
          cpf: values.cpf,
          email: values.email,
          instituicao: values.instituicao,
          perfil: values.perfil,
          matricula: values.matricula,
          password: values.password
        })
      })
      .then(async (res) => {
        const result = await res.json()

        if(result.status === 201){
          alert(result.message)
          router.push("/sign-in")
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

  const options = [
    {value: 0, texto: "Selecione..."},
    {value: "ALUNO", texto: "Aluno"},
    {value: "PROFESSOR", texto: "Professor"},
  ]

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

                <InputLogin iconBootstrap="bi bi-person" name="nome" placeholder="Nome" type="text" required/>
                <InputLogin iconBootstrap="bi bi-person-vcard" name="cpf" placeholder="CPF" type="text" required/>
                <InputLogin iconBootstrap="bi bi-envelope" name="email" placeholder="E-mail" type="email" required/>
                <InputLogin iconBootstrap="bi bi-mortarboard" name="instituicao" placeholder="Instituição" type="text" required/>
                <InputLogin iconBootstrap="bi bi-person-video3" name="perfil" options={options} type="select" required/>
                <InputLogin iconBootstrap="bi bi-person-badge" name="matricula" placeholder="Matrícula" type="text" required/>
                <InputLogin iconBootstrap="bi bi-lock" name="password" placeholder="Senha" type="password" required/>
                <InputLogin iconBootstrap="bi bi-lock" name="confirmaPassword" placeholder="Confirmar Senha" type="password" required/>
              </div>
              <div className='w-100 align-items-center d-flex flex-column'>
                <ButtonSubmit 
                  text={isFormSubmitting ? "Carregando..." : "Cadastrar-se"}
                  disabled={isFormSubmitting}
                />
                {!values.nome && !values.cpf && !values.email && !values.instituicao && !values.perfil && !values.matricula && !values.password && !values.confirmaPassword && (
                  <span className='text-danger text-medium fs-6'>{error}</span>
                )}
              </div>
            </Form>
          )
        }
      }
      </Formik>
    </main>
  );
}
