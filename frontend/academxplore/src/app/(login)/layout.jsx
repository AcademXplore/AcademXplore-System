import logo from "../../img/logo.svg";
import Image from "next/image";
import Link from "next/link";
import "./login.css"

export default function RootLayoutLogin({ children }) {
  return (
    <main className="d-flex w-100 vh-100 ">
      <div className="col-md-8 h-100 justify-content-center align-items-center d-none  d-md-flex align-items-end flex-column background-image-meet">
        <div className="col-4 justify-content-center align-items-center d-flex overflow-hidden ">
          <Image alt="Logo do academxplore" src={logo} style={{width: "260px", height: "260px"}} />
        </div>
        <h1 className="fw-lighter text-light">Simpler and better</h1>
      </div>
      <div className="background-primary-color col-12 col-md-4 h-100 p-5">
        <div>
          <Link className="btn-login-page" href="/sign-in">Login</Link>
          <Link className="btn-cadastrar-page" href="/sign-up">Criar Conta</Link>
        </div>
        {children}
      </div>
    </main>
  );
}
