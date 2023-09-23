"use client"
import Image from "next/image";
import logo from "../../img/logo.svg";
import Link from 'next/link'
import "./Header.css"
import NavBar from "../NavBar";
import { signOut } from "next-auth/react";

export default function Header() {
  
  return (
    <header className="navbar header px-3">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/timeline">
          <Image alt="Logo do acadmxplore" src={logo} height={36} width={36} />
        </Link>
        <NavBar/>
        <button onClick={signOut}>Sair Temporario</button>
      </div>
    </header>
  );
}
