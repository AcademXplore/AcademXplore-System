import { SearchProjectsContext } from "@/contexts/SearchProjectsContext";
import { useContext } from "react";

export function useSearchProjects(){
  return useContext(SearchProjectsContext)
}