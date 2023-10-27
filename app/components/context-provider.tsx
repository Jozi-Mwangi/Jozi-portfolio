"use client"

import { ChildrenProps, NavContextProps } from "../types";
import { createContext, useContext, useState } from "react"

export const NavContext = createContext<NavContextProps | {}>({})


export default function PropProvider({children}:ChildrenProps):React.JSX.Element{
    
  const [nav, setNav] = useState(true);

  const handleNav = ()=> {
      setNav(!nav)
  }

    return <NavContext.Provider value={{nav, handleNav}} >
        {children}
    </NavContext.Provider>
}

export function useNavContext (){
    const context = useContext(NavContext);
    if(!context){
        throw new Error(
            "Please use the NavContext!"
        )
    }
    return context;
}