"use client";
import { NavLinks } from "@/constant/constant";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BiDownload } from "react-icons/bi";
import { HiBars3BottomRight } from "react-icons/hi2";


type Props ={
  openNav: ()=>void;
}

const Navbar = ({openNav}:Props) => {

  const [NavBg, setNavBg]= useState(false);

  useEffect(() => {
    const handler=()=>{
      if(window.scrollY >= 90) setNavBg(true);
      if(window.scrollY < 90) setNavBg(false);
    };

    window.addEventListener("scroll",handler);

    return () => window.removeEventListener("scroll",handler);

  }, []);

  return (
    <div className={`transition-all ${NavBg ? 'bg-[#0f142ed9] shadow-md': "fixed"} duration-200 h-[12vh] z-10000 fixed w-full`}>
      <div className='flex items-center h-full justify-between w-[90%] mx-auto'>        
        {/* LOGO */}
        <div className='flex items-center space-x-2'>
          <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center overflow-hidden">
            <Image
            src="/Images/logo1.png"
            alt="Sebas Valverde logo"
            width={80}
            height={80}
            className="object-cover"
            priority
            />
          </div>          
          <h1 className="text-xl hidden sm:block md:text-2xl text-white font-bold leading-tight">
            Sebas
            <br />
            Valverde
          </h1>          
        </div>

        {/* NavLinks */}
        <div className="hidden lg:flex items-center space-x-10">
          {NavLinks.map((link)=>{
            return ( 
            <Link key={link.id} href={link.url} className="text-base hover:text-cyan-300 text-white font-medium transition-all duration-200">
            <p>{link.Label}</p>
            </Link>
            );

          })}
        </div>

        {/*Buttons */}
        <div className="flex items-center space-x-4">
          <a
            href="/cv/CvSebastian-Valverde-Arias.pdf"
            download
            className="px-8 py-3.5 text-sm cursor-pointer rounded-lg bg-blue-800 hover:bg-blue-900 transition-all duration-300 text-white flex items-center space-x-2"
          >
            <BiDownload className="w-5 h-5" />
            <span>Download CV</span>
          </a>
        </div>
        {/*Burger Menu */}
        <HiBars3BottomRight onClick={openNav} className="w-8 h-8 cursor-pointer text-white lg:hidden"/>
        

      </div>
    </div>  
    
  )
}

export default Navbar