export function Paragraph({titulo, descricao}){
  return(
    <div className="w-100 mt-3 ">
      <h1 className="fw-normal fs-5 text-dark">{titulo}</h1>
      <p className="fs-6 text-dark-emphasis  ms-4">{descricao}</p>            
    </div>
  )
}