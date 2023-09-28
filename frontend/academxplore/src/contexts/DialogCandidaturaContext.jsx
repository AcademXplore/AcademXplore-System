"use client";
import { createContext, useState } from "react";

export const DialogCandidaturaContext = createContext({
  isVisible: false,
  setIsVisible: (value) => {},
  projeto: [],
  setProjeto: (value) => {},
  isLoading: false,
  setIsLoading: (value) => {}
});

export function DialogCandidaturaContextProvider({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [projeto, setProjeto] = useState([]);

  return (
    <DialogCandidaturaContext.Provider value={{ isVisible, setIsVisible, projeto, setProjeto, isLoading, setIsLoading}}>
      {children}
    </DialogCandidaturaContext.Provider>
  );
}
