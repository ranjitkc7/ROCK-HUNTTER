"use client"//MainNav.tsx
import React from 'react'
import Link from "next/link"
import { FaFacebookF } from "react-icons/fa";
import { PiShoppingCartBold } from "react-icons/pi";
import { IoCallOutline } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";

const MainNav = () => {
  return (
    <div className='flex items-center justify-between px-[2rem] bg-[#F3F5FA]'>
      <div className='text-[1.5rem] font-bold leading-[3px] text-black flex'>
        <p>ACCOUNTANT</p>
        <p>ONLINE</p>
      </div> 
      <div>
        <Link href={"#"}>HOME</Link>
        <Link href={"#"}>SERVICE</Link>
        <Link href={"#"}>BLOG</Link>
        <Link href={"#"}>GUIDE</Link>
        <Link href={"#"}>ABOUT US</Link>
      </div> 
      <div className='flex gap-[2rem] '>
      <FaFacebookF />
      <PiShoppingCartBold />
      <IoCallOutline />
      <IoSearchSharp />
      </div> 
      <button className='border-2 border-[#F76A8A] bg-[#F76A8A] text- white
       rounded-[19px] px-4 py-3'>
        Get Started
      </button> 
    </div>
  )
}

export default MainNav