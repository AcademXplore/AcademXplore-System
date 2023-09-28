import { DialogCandidaturaContext } from "@/contexts/DialogCandidaturaContext";
import { useContext } from "react";

export function useDialogCandidatura(){
  return useContext(DialogCandidaturaContext)
}