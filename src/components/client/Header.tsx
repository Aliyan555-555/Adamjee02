"use client"
import { IconButton } from "@mui/material";
import Image from "next/image";
import React, {useState } from "react";

const Header = () => {
  const [bg] = useState('white');
  // useEffect(()=>{
  //   window.addEventListener('scroll',()=>{
  //     setBg("white")
  //   })

  // })
  return (
    <div className={`w-full fixed top-0 z-[50] left-0 h-[90px] px-6 md:px-10 flex justify-between items-center bg-${bg}`}>
      {/* Left section */}
     <IconButton className="!block md:!hidden ">
     <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 2H22" stroke="black" strokeWidth="4" strokeLinecap="round"/>
<path d="M2 10H22" stroke="black" strokeWidth="4" strokeLinecap="round"/>
<path d="M2 18H22" stroke="black" strokeWidth="4" strokeLinecap="round"/>
</svg>

     </IconButton>
      <div className=" gap-2 hidden md:flex">
        <a className="px-2 py-2 text-lg text-black" href="#intro">Intro</a>
        <a className="px-2 py-2 text-lg text-black" href="#rider">Riders</a>
        <a className="px-2 py-2 text-lg text-black" href="#faqs">FAQs</a>
        <a className="px-2 py-2 text-lg text-black" href="#howTo">How To</a>
        <a className="px-2 py-2 text-lg text-black" href="#social">Social media stories</a>
      </div>

      {/* Centered logo */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <Image src={'/images/Logo.png'} alt="LOGO" width={140} height={70} />
      </div>

      {/* Right section */}
      <div className=" gap-4 items-center hidden md:flex">
        <a href="#">Book Online Appointment</a>
        <button className="px-6 py-2 bg-black rounded-[50px] text-white font-semibold text-lg">Locate Us</button>
      </div>
    </div>
  );
};

export default Header;
