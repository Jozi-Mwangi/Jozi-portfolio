import { PrismaClient } from "@prisma/client";
import { title } from "process";
import { PortfolioDataProps } from "../app/types";

const prisma = new PrismaClient();

async function main() {
  // createProject();
  updateProject();
}

const updateProject = async () => {
  try {

    const projectsToUpdate:PortfolioDataProps[] = [
      {id:1, imageUrl:"/Church_Image.jpg"},
      {id:2, imageUrl:"/PortfolioImg.png"}
    ]

    for (const project of projectsToUpdate){

      await prisma.project.update({
        where: { id: project.id },
        data: {
          imageUrl:project.imageUrl  
        },
      });
      console.log("DONE");
      
      console.log(project);  
    }
  } catch (error) {
    console.error("Error updating projects",error)
  }
  
};

const technologies = {
  create: [
    { name: "React" },
    {name:"Next.js 13"},
    { name: "Node.js" },
    {name:"Typescript"},
    {name:"prisma"},
    { name: "Tailwind CSS" },
    { name: "API Intergration" },
  ],
};
const createProject = async () => {
  // const project = await prisma.project.create({
  //   data: {
  //     title: "BBN Church Website",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  //     link: "https://bbnwebsite.vercel.app/",
  //     technologies: technologies,
  //   },
  // });

  const project = await prisma.project.create({
    data:{
      title:"Mwangi's Portfolio",
      description: "My Next.js portfolio application is a showcase of my technical prowess, blending modern technologies to deliver an exceptional user experience. On the backend, I employed Prisma, a powerful database toolkit, ensuring seamless storage and retrieval of projects. This TypeScript-driven backend harmoniously interacts with a React-powered frontend, enriched by the sleek design of Tailwind CSS. With a dynamic database at its core, this portfolio encapsulates a curated collection of my projects, showcasing my expertise in full-stack development.",
      link:"mwangi-portfolio.vercel.app",
      imageUrl:"/PortfolioImg.png",
      technologies:technologies
    }
  })
  console.log(project);
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
  });
