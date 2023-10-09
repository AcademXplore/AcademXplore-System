"use client";
import { createContext, useState } from "react";

export const SelectEquipeCandidaturaContext = createContext({
  isOpen: false,
  setIsOpen: (value) => {},
  equipes: [],
  setEquipes: (value) => {},
  isLoading: false,
  setIsLoading: (value) => {},
  projetoId: "",
  setProjetoId: (value) => {},
});

export function SelectEquipeCandidaturaContextProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [equipes, setEquipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [projetoId, setProjetoId] = useState("");

  return (
    <SelectEquipeCandidaturaContext.Provider value={{ isOpen, setIsOpen, equipes, setEquipes, isLoading, setIsLoading, projetoId, setProjetoId }}>
      {children}
    </SelectEquipeCandidaturaContext.Provider>
  );
}
