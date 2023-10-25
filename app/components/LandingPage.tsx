import { BsFillCloudDownloadFill } from "react-icons/bs";
import Image from "next/image";

import React from 'react'

const LandingPage = () => {
  return (
    <main className="flex flex-col mx-auto w-full min-h-screen justify-center gap-7  px-5 xs:px-9 sm:px-11 md:px-24" >

        <div className="lg:flex ">
        <div className=" flex flex-col w-full mt-8">
        <span className="text-blue-500 pb-1 lg:text-lg text-sm font-mono">
            Hello,my name is
        </span>
        <span className="text-5xl lg:my-1 lg:text-[50px] font-extrabold pb-1">
            Mwangi Joseph
        </span>
        <p className="text-2xl lg:my-2 lg:text-4xl font-bold text-gray-400 pb-2">
            I build products using code.
        </p>
        <p className="lg:my-3 pb-8 md:text-2xl">
        "I'm a passionate creator and learner based in Nairobi, Kenya. Self-taught in full-stack development, I'm on a journey to master the art of software engineering. Currently, I'm also pursuing a degree in mechanical engineering, blending creativity and technical expertise in my pursuits."
        </p>
        <button className="border w-fit p-3 rounded-2xl flex gap-3  items-center my-2 justify-center">
            <span>
            <BsFillCloudDownloadFill />
            </span>
            <span className="md:text-xl" >Resume</span>
        </button>
        </div>

        <div className="w-full flex justify-center ">
        <Image
            src="/dev.png"
            height={400}
            className="lg:w-full"
            width={400}
            alt="dev-image"
        />
        </div>
    </div>
    </main>
  )
}

export default LandingPage