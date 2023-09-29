"use client";
import { createContext, useState } from "react";

export const NavDetailsProjectContext = createContext({
  type: "equipes",
  setType: (value) => {},
});

export function NavDetailsProjectContextProvider({children}) {
  const [type, setType] = useState("equipes");

  return (
    <NavDetailsProjectContext.Provider value={{ type, setType }}>
      {children}
    </NavDetailsProjectContext.Provider>
  );
}
