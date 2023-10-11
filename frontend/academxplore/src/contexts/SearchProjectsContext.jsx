"use client";
import { createContext, useState } from "react";

export const SearchProjectsContext = createContext({
  search: "",
  setSearch: (value) => {},
});

export function SearchProjectsContextProvider({ children }) {
  const [search, setSearch] = useState("");

  return (
    <SearchProjectsContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchProjectsContext.Provider>
  );
}
