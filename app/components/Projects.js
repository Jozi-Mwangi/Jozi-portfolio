"use client";

import React, { useEffect, useState } from "react";
// import { getData } from '../api/api'
import { getData } from "../api/api.js";
import { MdOutlineOpenInNew } from "react-icons/md";

const Projects = () => {
  console.log("FFront");

  const [portfolioData, setPortfolioData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await getData();
        console.log(response);
        setPortfolioData(response);
      } catch (error) {
        console.error("Unable to fetch Data", error.message);
      }
    };
    fetchData();
  }, []);
  console.log(portfolioData);

  return (
    <div id="projects" className="px-5 py-5">
      <div className="flex items-center gap-3 py-5">
        <div className="text-2xl font-extrabold">Some Things I have built </div>
        <div className="h-px flex-grow max-w-xs bg-blue-100"></div>
      </div>
      
      <div>
        <div className="flex flex-col-reverse items-center md
        relative lg:flex-row md:gap-3 mb-10 lg:border-none shadow-md border rounded overflow-hidden lg:overflow-visible ">
          <div className="w-full lg:w-2/3 xl:w-1/2 z-10 bg-transparent p-4 lg:mt-3">
            <h4 className="text-blue-500 pb-1 text-sm font-mono">
              Featured Projects
            </h4>
            <a
              href="https://bbnwebsite.vercel.app"
              target="_blank"
              className="text-2xl font-bold px-4"
            >
              Church Website
            </a>
            <p className="p-4 lg:bg-blue-500 lg:text-white lg:my-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className="flex flex-wrap text-xs rounded gap-y-4 gap-x-8 font-roboto">
              <span>React</span>
              <span>Tailwind CSS</span>
              <span>Node.js</span>
              <span>React-Router-Dom</span>
            </div>
            <div className="mt-4 hover:shadow-lg hover:shadow-blue-300 hover:-translate-y-0.5 rounded-full p-2 w-fit">
              <a href="https://bbnwebsite.vercel.app" target="_blank">
                <MdOutlineOpenInNew />
              </a>
            </div>
          </div>

          <div className="w-full h-full items-start top-0 left-0 p-4 flex lg:w-2/3 lg:absolute lg:left-auto lg:right-0 lg:top-auto lg:bg-transparent">
          {/* <div className="items-start top-0 left-0 p-4 flex flex-col" > */}
            <a href="https://bbnwebsite.vercel.app" className="h-full ">
              <img
                alt="Church-img"
                src="/churchWeb.jpg"
                className="md:h-auto object-cover  "
              />
            </a>
          </div>
        </div>
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
  console.log("Finished Render");
};

export default Projects;
