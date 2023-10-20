"use client"

import React, { useContext } from 'react'
import { BsGithub, BsInstagram, BsLinkedin, BsWhatsapp } from "react-icons/bs"
import { FaXTwitter } from 'react-icons/fa6'
import { PropContext } from './context-provider'

const LeftPanel = () => {

  const { nav } =useContext(PropContext)

  return (
    <div className={nav?'hidden fixed md:-left-60  xl:-left-64 md:flex bottom-36 transform rotate-90':"hidden"} >
        
        <div className='flex gap-3 items-center ' >
          
          <a href='https://github.com/Jozi-Mwangi' target='_blank' className='-rotate-90 transition-all text-slate-800 hover:text-blue-500 hover:translate-x-0.5 p-2'  >
            <BsGithub size={30} />
          </a>

          <a href='https://github.com/Jozi-Mwangi' target='_blank' className='-rotate-90 transition-all text-slate-800 hover:text-blue-500 hover:translate-x-0.5 p-2'  >
            <BsInstagram size={30} />
          </a>

          <a href='www.linkedin.com/in/mwangi-joseph-506a11211' target='_blank' className='-rotate-90 transition-all text-slate-800 hover:text-blue-500 hover:translate-x-0.5 p-2'  >
            < BsLinkedin size={30} />
          </a>
          <a href='https://twitter.com/JoeKaffeine' target='_blank' className='-rotate-90 transition-all text-slate-800 hover:text-blue-500 hover:translate-x-0.5 p-2'  >
            < FaXTwitter size={30} />
          </a>
          
          <div className="h-1 bg-slate-300 w-[500px]"></div>
        </div>
    </div>
  )
}

export default LeftPanel