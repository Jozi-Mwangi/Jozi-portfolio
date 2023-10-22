import { render, waitFor} from "@testing-library/react";
import Home from "../app/page";
import "@testing-library/jest-dom"
import { describe } from "node:test";


// describe("Home", ()=>{
//     it("renders the name",async ()=>{
//         const {getByText} =  render(<Home/>)

//         const nameElement = getByText(/Joseph Mwangi/);

//         await waitFor(()=>{
//             expect(nameElement).toBeInTheDocument();
//         })
//     })

// })