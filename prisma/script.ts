import { PrismaClient } from "@prisma/client";
import { title } from "process";

const prisma = new PrismaClient()

async function main() {

    const technologies = {
        create: [
            {name:"React"},
            {name:"Node.js"},
            {name:"Tailwind CSS"},
            {name:"API Intergration"},
            {name:"React Redux"},
        ]
    }

    const project = await prisma.project.create({
        data: {
            title: "BBN Church Website",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            link: "https://bbnwebsite.vercel.app/",
            technologies: technologies,  
        }
    })     
    console.log(project);
    
}

main()
    .then(async()=>{
        await prisma.$disconnect()
    })
    .catch (async (e)=>{
        console.log(e);
        await prisma.$disconnect()
        process.exit(1)
    })