import { render, waitFor } from "@testing-library/react";

import { PortfolioData } from "../app/components";
import { prisma } from "../app/pages/api/project";

import handler from "../app/pages/api/project";


jest.mock("../app/pages/api/project", ()=>{
    handler: jest.fn().mockResolvedValue({
        id: 1,
        title: "BBN Church Website", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        link: "https://bbnwebsite.vercel.app/",
        technolgies: [
            {name:"React"},
            {name:"Node.js"},
            {name:"Tailwind CSS"},
            {name:"API Intergration"},
            {name:"React Redux"}
        ]
    })
})


test("Should find web user name", async ()=>{

    const { getByText } = await render()
    const projectTitle =  getByText(/BBN Church Website/)

    await waitFor(()=>expect)

    expect(await projectTitle).toBeInTheDocument();

    expect(mock).toHaveBeenCalledTimes(1)
    expect(mock).toHaveBeenCalledWith(1)
})