import React from 'react'
//import {link} from 'react-router-dom';
const Navbarbelt = () => {
    const content=<>
    <div className="text-center text-x1 p-20">
        <ul>
            <link to="Home">
            <li className="my-4 py-4border-b border-slate-800 hover:bg-slate-800">Home</li></link>
            <link>
            <li to="About">About</li></link>
            <link>
            <li to="Services">Services</li></link>
            <link>
            <li to="Contact">Contact</li></link>
        </ul>
    </div>
    </>
  return (
   <nav>
<div className="h-10vhflex justify-between z-50text-white lg:py-5 px-20 py-4 flex-1">
    <div className="flex items-center flex-1">
    <span className="text-3xl font-bold">
        Logo
    </span>
    </div>
    <div classNme="lg:flex md:flex lg:flex-1 items center justify-end font-normal hidden">
        <div className="flex-10">
        <ul className="flex gap-8 mr-16 text[18px]">
            <link>
            <li>Home</li>
            </link>

        </ul>
        </div>
    </div>
</div>
   </nav>
  )
}

export default Navbarbelt
