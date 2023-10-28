import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div id="about" className="px-5 md:px-24 min-h-screen justify-center">
      <div className="flex items-center gap-3 py-5">
        <div className="text-xl font-extrabold">About Me </div>
        <div className="h-px flex-grow max-w-xs bg-blue-100"></div>
      </div>
      <div
        className="flex flex-col items-center
        justify-center md:text-xl gap-20 lg:flex-row "
      >
        <div>
          <p>I'm a dedicated lifelong learner based in Nairobi, Kenya. My journey in the world of technology began as a self-taught enthusiast, and I've since honed my skills to become a proficient full-stack developer.</p><br/><p> With a passion for crafting seamless, user-centric experiences, I thrive on the challenges and rewards of software development. Whether it's building robust back-end solutions or
          creating intuitive front-end interfaces, I relish the opportunity to
          bring ideas to life through code.</p> <br/><p> Beyond coding, I'm deeply
          committed to fostering a collaborative and inclusive tech community. I
          believe in the power of sharing knowledge and experiences, and I
          actively engage with fellow developers to exchange insights and
          elevate our collective expertise.</p> <br/><p>I'm excited to be part of this dynamic and
          ever-evolving field, and I'm eager to contribute my skills and passion
          to projects that push the boundaries of what's possible in software
          development. Let's connect and embark on exciting ventures together!</p> 
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
