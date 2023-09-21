import { NavContext } from "@/contexts/NavContext";
import { useContext } from "react";

export function useNav(){
  return useContext(NavContext)
}