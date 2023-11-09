import "./ForgotPassword.css"

export function ForgotPassword({onClick}){
  
  return(
    <div className='position-absolute vw-100 vh-100 top-0 start-0 z-1 d-flex align-items-center justify-content-center' style={{backgroundColor: "rgba(0,0,0,0.5)"}}>
        <div className='col-5 bg-light'>
            <i className='bi bi-x-lg text-dark' onClick={onClick}></i>
        </div>
    </div>
  )
}