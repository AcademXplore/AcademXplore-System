"use client"
import "./OptionNavBar.css"
import Link from "next/link";

export default function OptionNavBar({className, onClick, selected, texto, href}) {
  return (
    <Link onClick={onClick} className="option-li" href={href}>
      <li className={"d-flex flex-column align-items-center rounded-1 px-2 py-1 " + (selected ? "bg-light text-primary-color" : "text-light")}>
        <i className={className}></i>
        <p className="m-0 text-option-bar">{texto}</p>
      </li>
    </Link>
  );
}
