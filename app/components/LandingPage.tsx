import { BsFillCloudDownloadFill } from "react-icons/bs";
import Image from "next/image";

import React from "react";

const LandingPage = () => {
  return (
    <main className="flex flex-col mx-auto w-full min-h-screen justify-center gap-7  px-5 xs:px-9 sm:px-11 md:px-24">
      <div className="lg:flex lg:justify-center">
        <div className=" flex flex-col w-full my-8">
          <span className="text-blue-500 pb-1 lg:text-md text-xs font-mono">
            Hello,my name is
          </span>
          <span className="text-4xl lg:my-1 lg:text-[40px] font-extrabold pb-1">
            Mwangi Joseph
          </span>
          <p className="text-xl lg:my-2 lg:text-3xl font-bold text-gray-400 pb-2">
            I build products using code.
          </p>
          <p className="lg:my-3 pb-8 md:text-xl">
            "I'm a passionate creator and learner based in Nairobi, Kenya.
            Self-taught in full-stack development, I'm on a journey to master
            the art of software engineering. Currently, I'm also pursuing a
            degree in mechanical engineering, blending creativity and technical
            expertise in my pursuits."
          </p>
          <button className="border w-fit p-3 rounded-2xl">
            <a href="/Mwangi Software CV.pdf" download="Mwangi Software CV.pdf" className=" flex gap-3  items-center my-2 justify-center" >
            <span>
              <BsFillCloudDownloadFill />
            </span>
            <span className="md:text-md">Resume</span>
            </a>
          </button>
        </div>

        <div className="container px-4 h-full mx-auto my-auto w-full flex justify-center ">
          <Image
            src="/Dev.jpg"
            height={300}
            className="lg:w-full"
            width={400}
            alt="dev-image"
          />
        </div>
      </div>
    </main>
  );
};

export default LandingPage;
