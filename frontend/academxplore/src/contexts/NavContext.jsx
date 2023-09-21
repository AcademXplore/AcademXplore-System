"use client";
import { createContext, useState } from "react";
import { NavTypes } from "@/types/NavTypes";

export const NavContext = createContext({
  type: NavTypes.timeline,
  setType: (value) => {},
});

export function NavContextProvider({ children, pathname }) {
  const [type, setType] = useState(pathname);

  return (
    <NavContext.Provider value={{ type, setType }}>
      {children}
    </NavContext.Provider>
  );
}
