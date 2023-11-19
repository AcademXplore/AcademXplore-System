import { createContext, useContext, useState } from "react";

export const SearchProjectsContext = createContext({
  search: "",
  setSearch: (value) => {},
});

export function useSearchProjects(){
  return useContext(SearchProjectsContext)
}

export function SearchProjectsContextProvider({ children }) {
  const [search, setSearch] = useState("");

  return (
    <SearchProjectsContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchProjectsContext.Provider>
  );
}
