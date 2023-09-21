import ButtonSubmit from '@/components/ButtonSubmit/ButtonSubmit';
import InputLogin from '../../../components/InputLogin/InputLogin'
import "../login.css"

export default function SignUp() {
  return (
    <main className="d-flex w-100 h-100">
      <div>
        {/* <ButtonSelectionSignInOrSignUp/> */}
      </div>
      <div className="w-100 h-100 justify-content-center align-items-center d-flex align-items-end flex-column">  
        <form className="w-100 h-50 justify-content-center align-items-center d-flex flex-column" action="">
          <InputLogin iconBootstrap="bi bi-person" placeholder="Nome" type="text"/>
          <InputLogin iconBootstrap="bi bi-person-vcard" placeholder="CPF" type="text"/>
          <InputLogin iconBootstrap="bi bi-envelope" placeholder="E-mail" type="email"/>
          <InputLogin iconBootstrap="bi bi-mortarboard" placeholder="Instituição" type="text"/>
          <InputLogin iconBootstrap="bi bi-person-video3" placeholder="Aluno/Professor" type="text"/>
          <InputLogin iconBootstrap="bi bi-person-badge" placeholder="Matrícula" type="text"/>
          <InputLogin iconBootstrap="bi bi-lock" placeholder="Senha" type="password"/>
          <InputLogin iconBootstrap="bi bi-lock" placeholder="Confirmar Senha" type="password"/>
          <ButtonSubmit/>
        </form>
      </div>
    </main>
  );
}
