import { FormProductContext } from "@/contexts/FormProductContext";
import { useContext } from "react";

export function useFormProduct(){
  return useContext(FormProductContext)
}