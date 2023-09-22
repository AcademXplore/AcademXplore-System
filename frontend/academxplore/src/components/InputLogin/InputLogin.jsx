"use client"
import "./InputLogin.css"
import { ErrorMessage, Field } from "formik"
import React from "react"

export default function InputLogin({iconBootstrap, type, name, required, options, ...props}){

  return(
    <>
      <div className="position-relative w-100">
        
        <i className={"position-absolute start-0 top-50 color-icon " + iconBootstrap} style={{transform: "translateY(-50%)"}}></i>
        {type != "select" ? 
        <Field className="bg-transparent input-login px-4 py-2 w-100" type={type} name={name} {...props} /> : 
        <Field className="form-select rounded-0 bg-transparent input-login px-4 py-2 w-100" as={type} name={name} {...props}>
          {options.map(option => <option key={option.value} className="option-text" value={option.value}>{option.texto}</option>)}
        </Field>
        }
        {required && <i className="position-absolute end-0 top-50 text-danger bi bi-asterisk" style={{fontSize: "8px", transform: "translateY(-50%)"}}></i>}
       
      </div>
      <div className="text-danger fw-medium" style={{fontSize: "12px"}}>
        <ErrorMessage name={name}/>
      </div>
    </>
  )
}