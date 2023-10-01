import { SelectEquipeCandidaturaContext } from "@/contexts/SelectEquipeCandidaturaContext";
import { useContext } from "react";

export function useSelectEquipeCandidatura(){
  return useContext(SelectEquipeCandidaturaContext)
}