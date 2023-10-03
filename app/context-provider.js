"use client"

import { createContext, useState } from "react"

export const PropContext = createContext({})

export default function PropProvider({children}){
    
  const [nav, setNav] = useState(true);

  const handleNav = ()=> {
      setNav(!nav)
  }

    return <PropContext.Provider value={{nav, handleNav}} >
        {children}
    </PropContext.Provider>
}