import {createContext, useContext, useEffect, useState} from 'react'

const SwitchContext = createContext({
  toggle: true,
  setToggle: () => {}
})

export const useSwitch = () => {
  return useContext(SwitchContext)
}

export function SwitchContextProvider({children, pathname}){
  const [toggle, setToggle] = useState(pathname == "/sign-in")

  return <SwitchContext.Provider value={{toggle, setToggle}}>{children}</SwitchContext.Provider>
}