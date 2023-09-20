import InputLogin from '../../../components/InputLogin/InputLogin'
import "../login.css"

export default function SignUp() {
  return (
    <main className="d-flex w-100 vh-100 background-primary-color">
      {/* <ButtonSelectionSignInOrSignUp/> */}
      <form action="">
        <InputLogin iconBootstrap="bi bi-person" placeholder="Nome" type="password"/>
        <InputLogin iconBootstrap="bi bi-person-vcard" placeholder="CPF" type="text"/>
        <InputLogin iconBootstrap="bi bi-envelope" placeholder="E-mail" type="email"/>
        {/* <ButtonSubmitForm/> */}
      </form>
    </main>
  );
}
