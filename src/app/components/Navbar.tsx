"use client"
import React from 'react'
import { FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { SiAdblockplus } from "react-icons/si";

const Navbar = () => {
  return (
    <nav className='flex px-[2rem] items-center justify-between border-1
     border-gray-200 bg-red-50 relative max-h-[2rem]'>
        <div className="flex  gap-[0.6rem] pl-[2rem]">
            <span className='h-3 w-3 rounded-full bg-red-500'></span>
            <span className='h-3 w-3 rounded-full bg-yellow-400'></span>
            <span className='h-3 w-3 rounded-full bg-blue-500'></span>
        </div>
        <div className='flex gap-[3rem] items-center justify-center'>
          <div> <SiAdblockplus  className="h-4 w-4"/></div>
         <button className="flex border-2 border-slate-50 text-black px-4 py-3
         bg-slate-50 rounded-[22px] items-center justify-center">
          <input type="text" placeholder="Search the Items" className="placehohder:text-black" 
            />
          <div className="flex items-center justify-center h-4 w-4 bg-slate-50">
             <FaSearch className="h-3 w-3" />
           </div>
        </button>
        <FaPlus className="h-4 w-4"/>
        </div> 
    </nav>
  )
}

export default Navbar