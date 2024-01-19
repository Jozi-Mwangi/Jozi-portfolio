import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div id="about" className="px-5 md:px-24 justify-center">
      <div className="flex items-center gap-3 py-5">
        <div className="text-xl font-extrabold">About Me </div>
        <div className="h-px flex-grow max-w-xs bg-blue-100"></div>
      </div>
      <div
        className="flex flex-col items-center
        justify-center md:text-xl gap-20 lg:flex-row "
      >
        <div>
          <p>I'm a Mechanical Engineering graduate with a developer's soul, always on the lookout for ideas to turn into innovative ventures. Passionate about sustainable tech, I aspire to bridge the gap between machines and code.</p><p> My expertise lies in merging mechanical ingenuity with cutting-edge software, aiming for a greener and technologically advanced future. </p><p>Open to opportunities, I'm eager to create solutions that benefit our community. Join me on this journey as we explore the possibilities of crafting sustainable tech solutions. Let's innovate, create, and contribute to a more environmentally conscious world together!</p> 
        </div>
        <Image
          src="/Joe.jpeg"
          alt="Joe-Mwangi"
          width={300}
          height={300}
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default About;
