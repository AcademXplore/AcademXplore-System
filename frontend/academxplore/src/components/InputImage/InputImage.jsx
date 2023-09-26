"use client"
import { useState } from 'react';
import './InputImage.css'
import { ErrorMessage, Field } from "formik";

export function InputImage({name, setFieldValue, ...props}){
  const [image, setImage] = useState("")
  const handleInput = (e) => {
    const file = e.currentTarget.files[0]
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      setImage(reader.result);
      setFieldValue(name, reader.result)
    };
  }
  
  return (
    <>
      <div className="input-image d-flex justify-content-center py-5" style={{backgroundImage: `url("${image}")`}}>
        <label className="label-banner" for="file">Adicione uma imagem</label>
        <Field id="file" type="file" accept="image/jpeg" onInput={(e) => handleInput(e)} value={undefined} name={name} {...props}/>
      </div>
      <div className="text-danger fw-medium" style={{fontSize: "12px"}}>
        <ErrorMessage name={name}/>
      </div>
    </>
  )
}