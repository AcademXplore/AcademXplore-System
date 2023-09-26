import './InputFormProject.css'
import { ErrorMessage, Field } from "formik";

export function InputFormProject({label,name,type,component = "input",...props}){
  return(
    <div className="d-flex flex-column ">
      <div className="w-100 px-3">
        <label className="fs-5" for={name}>{label}</label>
      </div>
      <Field className="w-100 py-2 px-4 rounded-4 border border-0 input-form-project" rows="4" component={component} id={name} name={name} type={type}  {...props}/>
      <div className="text-danger fw-medium" style={{fontSize: "12px"}}>
        <ErrorMessage name={name}/>
      </div>
    </div>
  ) 
}