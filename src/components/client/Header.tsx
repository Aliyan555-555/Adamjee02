import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="w-full absolute top-0 left-0 h-[90px] px-10 flex justify-between items-center">
      {/* Left section */}
      <div className="flex gap-2">
        <a className="px-2 py-2 text-lg text-black" href="#">Intro</a>
        <a className="px-2 py-2 text-lg text-black" href="#">Riders</a>
        <a className="px-2 py-2 text-lg text-black" href="#">FAQs</a>
        <a className="px-2 py-2 text-lg text-black" href="#">How To</a>
        <a className="px-2 py-2 text-lg text-black" href="#">Social media stories</a>
      </div>

      {/* Centered logo */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <Image src={'/images/Logo.png'} alt="LOGO" width={140} height={70} />
      </div>

      {/* Right section */}
      <div className="flex gap-4 items-center">
        <a href="#">Book Online Appointment</a>
        <button className="px-6 py-2 bg-black rounded-[50px] text-white font-semibold text-lg">Locate Us</button>
      </div>
    </div>
  );
};

export default Header;
