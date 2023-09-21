import "./InputLogin.css"

export default function InputLogin(props){
  return(
    <div className="position-relative ">
      <i className={"position-absolute start-0 color-icon " + props.iconBootstrap}></i>
      <input className="bg-transparent input-login px-4" placeholder={props.placeholder} type={props.type} name={props.name} id={props.id} />
    </div>
  )
}