import Image from "next/image";
import "./CandidaturaCard.css"

export function CandidaturaCard({light, nome, foto}) {

  return(
    <div className={"d-flex justify-content-between align-items-center px-3 " + (light ? "bg-candidatura-light" : "bg-candidatura-dark")}>
      <div className="d-flex align-items-center gap-3 p-1">
        <Image className="rounded-5 object-fit-cover " src="https://img.freepik.com/fotos-gratis/pessoas-em-reuniao-de-negocios-em-alto-angulo_23-2148911819.jpg?w=740&t=st=1695514500~exp=1695515100~hmac=18634a8c4afe9fbd551b25fe487feb51403b7566027e6bf19b960b1efcd097f7" height={60} width={60}/>
        <span className="nome-candidato">{nome}</span>
      </div>
      <div className="d-flex gap-1 fs-5">
        <i className="bi bi-check-square text-success "></i>
        <i className="bi bi-x-square text-danger "></i>
      </div>
    </div>
  )
}