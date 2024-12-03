"use client";
import { IconButton } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  const [bg] = useState("white");
  const [isMobileSlider, setMobileSlider] = useState(false);
  return (
    <div
      className={`w-full fixed top-0 z-[50] left-0 h-[90px] px-6 md:px-10 flex justify-between items-center bg-${bg}`}
    >
      <IconButton
        onClick={() => setMobileSlider(true)}
        className="!block md:!hidden "
      >
        <svg
          width="24"
          height="20"
          viewBox="0 0 24 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 2H22"
            stroke="black"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M2 10H22"
            stroke="black"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M2 18H22"
            stroke="black"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      </IconButton>
      <div className=" gap-2 hidden md:flex">
        <Link
          scroll={true}
          className="px-2 py-2 text-lg text-black"
          href="#intro"
        >
          Intro
        </Link>
        <Link
          scroll={true}
          className="px-2 py-2 text-lg text-black"
          href="#rider"
        >
          Riders
        </Link>
        <Link
          scroll={true}
          className="px-2 py-2 text-lg text-black"
          href="#faqs"
        >
          FAQs
        </Link>
        <Link
          scroll={true}
          className="px-2 py-2 text-lg text-black"
          href="#howTo"
        >
          How To
        </Link>
        <Link
          scroll={true}
          className="px-2 py-2 text-lg text-black"
          href="#social"
        >
          Social media stories
        </Link>
      </div>

      {/* Centered logo */}
      <Link href={"/"} className="absolute left-1/2 transform -translate-x-1/2">
        <Image src={"/images/Logo.png"} alt="LOGO" width={140} height={70} />
      </Link>
      <div className=" gap-4 items-center hidden md:flex">
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://adamjeelife.com/#modal-book-appointment"
        >
          Book Online Appointment
        </Link>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.adamjeelife.com/en/contact-us"
          className="px-6 py-2 bg-black rounded-[50px] text-white font-semibold text-lg"
        >
          Locate Us
        </Link>
      </div>

      {isMobileSlider && (
        <div className="w-screen overflow-hidden box-border h-screen bg-white absolute top-0 left-0">
          <div className=" gap-4 flex items-center py-4 w-full px-4 justify-between ">
            <IconButton onClick={() => setMobileSlider(false)} className=" ">
              <RxCross2 fontSize={35} />
            </IconButton>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.adamjeelife.com/en/contact-us"
              className="px-6 py-2 bg-black rounded-[50px] text-white font-semibold text-lg"
            >
              Locate Us
            </Link>
          </div>
          <div
            onClick={() => setMobileSlider(false)}
            className="flex flex-col "
          >
            <Link
              scroll={true}
              className="px-2 py-6 border-y border-gray-400 text-xl w-full text-center text-black"
              href="#intro"
            >
              Intro
            </Link>
            <Link
              scroll={true}
              className="px-2 py-6 border-b border-gray-400 text-xl w-full text-center text-black"
              href="#rider"
            >
              Riders
            </Link>
            <Link
              scroll={true}
              className="px-2 py-6 border-b border-gray-400 text-xl w-full text-center text-black"
              href="#faqs"
            >
              FAQs
            </Link>
            <Link
              scroll={true}
              className="px-2 py-6 border-b border-gray-400 text-xl w-full text-center text-black"
              href="#howTo"
            >
              How To
            </Link>
            <Link
              scroll={true}
              className="px-2 py-6 border-b border-gray-400 text-xl w-full text-center text-black"
              href="#social"
            >
              Social media stories
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
