"use client";
import { createContext, useState } from "react";

export const FormProductContext = createContext({
  isVisible: false,
  setIsVisible: (value) => {},
});

export function FormProductContextProvider({ children }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <FormProductContext.Provider value={{ isVisible, setIsVisible }}>
      {children}
    </FormProductContext.Provider>
  );
}
