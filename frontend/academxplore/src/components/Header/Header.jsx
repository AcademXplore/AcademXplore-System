"use client"
import Image from "next/image";
import logo from "../../img/logo.svg";
import Link from 'next/link'
import "./Header.css"
import NavBar from "../NavBar";

export default function Header() {
  
  return (
    <header className="navbar header px-3">
      <div className="container-fluid  ">
        <Link className="navbar-brand" href="/page/timeline">
          <Image src={logo} height={36} width={36} />
        </Link>
        <NavBar/>
      </div>
    </header>
  );
}
