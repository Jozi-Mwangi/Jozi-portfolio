"use client"

import React, { useContext } from 'react'
import { PropContext } from './context-provider'

const RightPanel = () => {

    const {nav} = useContext(PropContext)

    return (
        <div className={ nav?'fixed hidden md:-right-60 xl:-right-64 md:flex bottom-36  transform rotate-90 ': "hidden"} > 
            {/* rotate-90 */}
            <div className=' flex gap-3 items-center ' >
                {/* <div>jozi.mwangi@gmail.com</div> */}
                  <a href='mailto:jozi.mwangi@gmail.com' className=' p-2 text-lg' >jozi.mwangi@gmail.com</a>

                <div className="h-1 bg-slate-300 w-[500px]"></div>
            </div>   

        </div>
    )

}

export default RightPanel