import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div id="about" className="px-5"  >
        <div className="flex items-center gap-3 py-5" >
            <div className="text-2xl font-extrabold" >About Me </div>
            <div className="h-px flex-grow max-w-xs bg-blue-100"></div>
        </div>
        <div className="flex flex-col items-center
        justify-center  gap-20 lg:flex-row " >
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            <Image src="/Joe.jpeg" alt="Joe-Mwangi" width={300} height={300} className="rounded-full"  />
        </div>
    </div>
  )
}

export default About