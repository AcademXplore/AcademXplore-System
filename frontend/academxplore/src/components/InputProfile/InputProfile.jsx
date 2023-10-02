"use client"
import { ErrorMessage, Field } from "formik"
import React from "react"

export function InputProfile({label, name, type, ...props}){
  return(
    <>
      <div className="d-flex flex-column ">
        <label htmlFor={name + "id"}>{label}</label>
        <Field className="border border-1 border-dark-subtle rounded-2 p-1" id={name + "id"} name={name} type={type} {...props}/>
      </div>
      <div className="text-danger fw-medium" style={{fontSize: "12px"}}>
        <ErrorMessage name={name}/>
      </div>
    </>
  )
}