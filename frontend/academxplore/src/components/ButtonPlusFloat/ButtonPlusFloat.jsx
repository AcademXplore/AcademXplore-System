import { useFormProduct } from "@/hooks/useFormProduct"
import "./ButtonPlusFloat.css"

export function ButtonPlusFloat(){
  const {isVisible, setIsVisible} = useFormProduct()

  const handleAbrirDialogo = () =>{
    setIsVisible(!isVisible)
  }
  return(
    <button className="button-plus-float z-3" onClick={handleAbrirDialogo}>
      <i className="bi bi-plus"></i>
    </button>
  )
}