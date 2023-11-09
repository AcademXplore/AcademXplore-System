"use client"
import logo from "../../img/logo.svg";
import Image from "next/image";
import Link from "next/link";
import "./login.css"
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";

export default function RootLayoutLogin({ children }) {
  const router = useRouter()
  const pathname = usePathname()
  const [left, setLeft] = useState(pathname == "/sign-in" ? "50%" : "0")
  
  const handleSignIn = () => {
    setLeft("50%")
    router.push("/sign-in")
  }
  const handleSignUp = () => {
    setLeft("0")
    router.push("/sign-up")
  }

  return (
    <section className="d-flex w-100 vh-100 ">
      <div className="col-md-8 h-100 justify-content-center align-items-center d-none  d-md-flex align-items-end flex-column background-image-meet">
        <div className="col-4 justify-content-center align-items-center d-flex overflow-hidden ">
          <Image alt="Logo do academxplore" src={logo} style={{width: "260px", height: "260px"}} />
        </div>
        <h1 className="fw-lighter text-light">Simpler and better</h1>
      </div>
      <div className="background-primary-color col-12 col-md-4 h-100 p-5 d-flex flex-column">
        <div className="button-box">
          <div id="btn" style={{left: left}}></div>
          <button className="toggle-btn text-light fw-bolder" type="button" onClick={handleSignUp}>Criar Conta</button>
          <button className="toggle-btn text-light fw-bolder" type="button" onClick={handleSignIn}>Login</button>
        </div>
        {children}
      </div>
    </section>
  );
}
