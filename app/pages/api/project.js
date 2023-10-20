import { PrismaClient } from "@prisma/client";
// const { PrismaClient } = require("@prisma/client")


export const prisma = new PrismaClient({
    log:["query", "info","error","warn"]
});

export default async function handler (req, res) {
    if (req.method == "GET"){
        try {
            const project = await prisma.project.findUnique({
                where: {
                    id: 1
                },
                include: {
                    technologies:true
                }
            })

            console.log("Project", project);
            res.status(200).json(project);
            
        } catch (error) {
            console.error(error);
            res.status(500).json({message: "Internal Server Error"})
        } finally {
            await prisma.$disconnect();
        }
    } else {
        res.status(405).json({message:"Method not Allowed"})
    }
}
