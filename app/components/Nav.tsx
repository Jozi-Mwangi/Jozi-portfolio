"use client";

import "dotenv/config";
import React, { useState, useEffect } from "react";
import Image from "next/image";

import { useNavContext } from "./context-provider";
import { NavItemsProps, NavContextProps } from "../types";


import { BsGithub, BsInstagram, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { MdMenu } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { AiOutlineClose } from "react-icons/ai";

require("dotenv").config();

const NAVIGATION_ITEMS:NavItemsProps = [
  { title: "About", href: "#about" },
  { title: "Contact", href: "#contact" },
  { title: "Projects", href: "#projects" },
];


const Nav = ({}) => {
  
  const context = useNavContext() as NavContextProps;
  const { nav, handleNav } = context;

  const handleOverflow = () => {
    handleNav()
    document.body.style.overflowY = nav? "auto" : "hidden"
  }
  useEffect(()=>{
    return ()=>{
      document.body.style.overflowY = "auto"
    } 
  },[])
  
  return (
    <nav className={` bg-white bg-opacity-90 transition-all duration-300 translate-y-0`}>
      <div className="flex flex-col justify-between px-4 py-2 items-center">
        <div className="flex mx-auto md:px-24 justify-between w-full items-center">
          <div className="">
            <Image
              src="/profile.png"
              height={50}
              className="rounded-full"
              width={50}
              alt="profile"
            />
          </div>

          <div onClick={handleOverflow} className="block lg:hidden">
            <div className="right-5">
              {nav ? <MdMenu size={40} /> : <AiOutlineClose size={40} />}
            </div>
          </div>

          <div className="hidden lg:flex text-lg font-mono">
            {NAVIGATION_ITEMS.map((item) => (
              <a className="mx-7" key={item.title} href={item.href}>
                {item.title}
              </a>
            ))}
          </div>
        </div>

        <div
          className={
            !nav ? "my-4 flex flex-col items-center w-full text-3xl" : "hidden"
          }
        >
          {NAVIGATION_ITEMS.map((item) => (
            <a className="my-7" key={item.title} href={item.href}>
              {item.title.toUpperCase()}
            </a>
          ))}
          <div className="my-7 w-full flex justify-center gap-6 border-b pb-7">
            <div>
              <BsGithub />
            </div>
            <div>
              <FaXTwitter />
            </div>
            <div>
              <BsInstagram />
            </div>
            <div>
              <BsLinkedin />
            </div>
          </div>

          <a
            href={`mailto:${process.env.EMAIL_ADRESS}`}
            className="p-5 border-black transition duration-300 my-7 border-2 w-full flex justify-center gap-7"
            target="_blank"
          >
            <span>Send a Mail</span>
            <span>
              <SiGmail />
            </span>
          </a>

          <a
            className="p-5 border-black transition duration-300 border-2 w-full flex justify-center gap-7"
            target="_blank"
            href={`https://wa.me/${process.env.PHONE_NUMBER}`}
          >
            <span>Say hello</span>
            <span>
              <BsWhatsapp />
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
