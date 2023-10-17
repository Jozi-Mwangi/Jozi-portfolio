import React from "react";
import { SiGmail } from "react-icons/si";
import { BsWhatsapp } from "react-icons/bs";


const Contact = () => {
  return (
    <div
      id="projects"
      className="px-5 py-5 items-center text-center flex flex-col justify-center"
    >
      <div className="text-5xl pb-5 container w-fit font-extrabold">
        Get In Touch{" "}
      </div>
      <p className="md:text-2xl text">
        I'm currently looking for opportunities.
        <br /> Whether its a Full-Time Job or a Freelance work.
        <br /> Send me a message, I'll try to get back to you as soon as
        possible.
      </p>
      <div className="flex my-7 text-lg gap-16 ">
        <button className="rounded-sm p-4 border-solid border-slate-500 border-4" >
            <a href={`https://wa.me/${process.env.PHONE_NUMBER}`} target="_blank" className="flex items-center gap-3" ><span>Say Hello </span><span><BsWhatsapp/></span></a>
        </button>
        <button  className="rounded-sm p-4 border-solid border-slate-500 border-4" >
            <a href={`mailto:${process.env.EMAIL_ADRESS}`} target="_blank" className="flex items-center gap-3" ><span>Send an Email </span><span><SiGmail/></span></a>
        </button>
      </div>
    </div>
  );
};

export default Contact;
