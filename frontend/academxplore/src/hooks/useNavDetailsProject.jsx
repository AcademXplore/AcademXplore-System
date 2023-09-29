import { NavDetailsProjectContext } from "@/contexts/NavDetailsProjectContext";
import { useContext } from "react";

export function useNavDetailsProject(){
  return useContext(NavDetailsProjectContext)
}