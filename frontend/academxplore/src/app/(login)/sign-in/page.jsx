'use client'
import {Formik, Form} from 'formik'
import InputLogin from '@/components/InputLogin/InputLogin';
import ButtonSubmit from '@/components/ButtonSubmit/ButtonSubmit';
import * as Yup from 'yup'

export default function SignIn() {

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

  const handleSubmit = () => {
    
  }

  return (
    <main className="d-flex flex-column w-100 h-100 ">
      <Formik 
        validationSchema={validationSchema} 
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
      {
        ({value}) => {
          return(
            <Form noValidate className='d-flex flex-column w-100 h-100 justify-content-between align-items-center mt-3 '>
              <div className='w-100'>
                <InputLogin iconBootstrap="bi bi-person" name="email" placeholder="Nome" type="email" required/>
                <InputLogin iconBootstrap="bi bi-lock" name="password" placeholder="Senha" type="password" autoComplete="off" required/>
              </div>
              <ButtonSubmit text="Entrar"/>
            </Form>
          )
        }
      }
      </Formik>
      <button className='bg-transparent border border-0 text-light mt-3 text-decoration-underline'>Esqueceu a senha?</button>
    </main>
  );
}
