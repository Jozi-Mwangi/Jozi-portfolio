// "use client";

import React from "react";
// import { getData } from "../api/api.js";
import { MdOutlineOpenInNew } from "react-icons/md";
// import fetchProject from "../api/project.js";

import { PortfolioDataProps, Technology } from "../types";
import { prisma } from "../pages/api/project";
import Image from "next/image";

const Projects: React.FC = async () => {
  console.log("FFront");

  const portfolioData = await prisma.project.findMany({
    take: -1,
    include: {
      technologies: true,
    },
  });

  // if(!portfolioData){
  //   return (
  //     <div>Callback ui </div>
  //   )
  // }

  // console.log(project);

  return (
    <div id="projects" className="px-5 md:px-24 py-5 min-h-screen">
      <div className="flex items-center gap-3 py-5">
        <div className="text-xl font-extrabold">Some Things I have built </div>
        <div className="h-px flex-grow max-w-xs bg-blue-100"></div>
      </div>

      <div className="md:space-y-24 md:py-24">
        {portfolioData?.map((project) => (
          <div
            key={project.id}
            className="flex flex-col-reverse items-center relative lg:flex-row md:gap-3 mb-10 lg:border-none shadow-md border rounded overflow-hidden lg:overflow-visible "
          >
            <div className="w-full lg:w-2/3 xl:w-1/2 z-10 bg-transparent p-4 lg:mt-3">
              <h4 className="text-blue-500 pb-1 text-xs font-mono">
                Featured Projects
              </h4>
              <a
                href={project.link}
                target="_blank"
                className="text-xl font-bold px-4"
              >
                {project.title}
              </a>
              <p className="p-4 lg:bg-blue-500 lg:text-white lg:px-3 lg:my-4">
                {project.description}
              </p>
              <div className="flex flex-wrap text-xs w-full rounded gap-y-4 gap-x-8 font-roboto">
                {project.technologies.map((tech) => (
                  <span className="p-2" key={tech.id}>
                    {tech.name}
                  </span>
                ))}
              </div>
              <div className="mt-4 hover:shadow-lg hover:shadow-blue-300 hover:-translate-y-0.5 rounded-full p-2 w-fit">
                <a href="https://bbnwebsite.vercel.app" target="_blank">
                  <MdOutlineOpenInNew />
                </a>
              </div>
            </div>

            <div className="w-full h-full items-start top-0 left-0 p-4 flex lg:w-2/3 lg:absolute lg:left-auto lg:right-0 lg:top-auto lg:bg-transparent">
              {/* <div className="items-start top-0 left-0 p-4 flex flex-col" > */}
              <a href={project.link} className="h-full " target="_blank">
                <Image
                  alt={project.title}
                  src={project.imageUrl}
                  className="md:h-auto object-cover  "
                  width={600}
                  height={500}
                />
              </a>
            </div>
          </div>
        ))}
      </div>
      {/* {portfolioData.map((item, index)=>(
        <div key={index} >
            <h1>{item.job_title}</h1>
            <div>{item.job_description}</div>
        </div>
      ))} */}
      {/* <div>portfolioData</div> */}
    </div>
  );
};

export default Projects;
