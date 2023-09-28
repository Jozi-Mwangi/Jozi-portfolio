"use client"

import "dotenv/config"
import React from 'react'
import Image from 'next/image'

import { BsGithub, BsInstagram, BsLinkedin, BsWhatsapp } from "react-icons/bs"
import { MdMenu } from "react-icons/md"
import { FaXTwitter } from "react-icons/fa6"
import { SiGmail } from "react-icons/si"

require("dotenv").config();

const NAVIGATION_ITEMS = [
    {title:"ABOUT"},
    {title:"CONTACT"},
    {title:"PROJECTS"}
]


const Nav = () => {
  return (
    <nav>
        <div className="flex justify-between px-4 py-2 items-center" >
            
            <div className='hidden'><Image src="/profile.png" height={50} className='rounded-full' width={50} alt='profile' /></div>
            <div className='hidden' ><MdMenu size={40}/></div>

            <div className='my-4 flex flex-col items-center w-full text-3xl'>
                {
                    NAVIGATION_ITEMS.map((item)=>(
                        <div className='my-7' >
                            {item.title}
                        </div>
                    ))
                }
                <div className='my-7 w-full flex justify-center gap-6 border-b pb-7'>
                    <div><BsGithub/></div>
                    <div><FaXTwitter/></div>
                    <div><BsInstagram/></div>
                    <div><BsLinkedin/></div>
                </div>

                <a href={`mailto:${process.env.EMAIL_ADRESS}`} className="p-5 border-black transition duration-300 my-7 border-2 w-full flex justify-center gap-7" target="_blank" ><span>Send a Mail</span><span><SiGmail/></span></a>
                
                <a className="p-5 border-black transition duration-300 border-2 w-full flex justify-center gap-7" target="_blank"  href={`https://wa.me/${process.env.PHONE_NUMBER}`} ><span>Say hello</span><span><BsWhatsapp/></span></a>
            </div>
        </div>
    </nav>
  )
}

export default Nav