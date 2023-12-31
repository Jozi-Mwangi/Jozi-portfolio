"use client";

import React from "react";
import { BsGithub, BsInstagram, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { useNavContext} from "./context-provider";
import { NavContextProps } from "../types";

const LeftPanel = () => {

  const context = useNavContext() as NavContextProps;
  const { nav } = context;

  return (
    <div
      className={
        nav
          ? "hidden fixed md:-left-72  xl:-left-64 md:flex bottom-36 transform rotate-90"
          : "hidden"
      }
    >
      <div className="flex gap-3 items-center ">
        <a
          href="https://github.com/Jozi-Mwangi"
          target="_blank"
          className="-rotate-90 transition-all text-slate-800 hover:text-blue-500 hover:translate-x-0.5 p-2"
        >
          <BsGithub size={20} />
        </a>

        <a
          href="https://github.com/Jozi-Mwangi"
          target="_blank"
          className="-rotate-90 transition-all text-slate-800 hover:text-blue-500 hover:translate-x-0.5 p-2"
        >
          <BsInstagram size={20} />
        </a>

        <a
          href="www.linkedin.com/in/mwangi-joseph-506a11211"
          target="_blank"
          className="-rotate-90 transition-all text-slate-800 hover:text-blue-500 hover:translate-x-0.5 p-2"
        >
          <BsLinkedin size={20} />
        </a>
        <a
          href="https://twitter.com/JoeKaffeine"
          target="_blank"
          className="-rotate-90 transition-all text-slate-800 hover:text-blue-500 hover:translate-x-0.5 p-2"
        >
          <FaXTwitter size={20} />
        </a>

        <div className="h-1 bg-slate-300 w-[500px]"></div>
      </div>
    </div>
  );
};

export default LeftPanel;
