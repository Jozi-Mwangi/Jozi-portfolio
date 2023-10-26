"use client"

import { ChildrenProps } from "../types";
import { createContext, useState } from "react"

export const PropContext = createContext({})


export default function PropProvider(props:ChildrenProps):React.JSX.Element{
    
  const [nav, setNav] = useState(true);

  const handleNav = ()=> {
      setNav(!nav)
  }

    return <PropContext.Provider value={{nav, handleNav}} >
        {props.children}
    </PropContext.Provider>
}