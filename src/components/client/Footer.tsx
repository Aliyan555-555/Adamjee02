import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div
      className="w-screen min-h-[80vh] bg-cover flex flex-col md:flex-row items-end bg-center bg-no-repeat"
      style={{
        background:
          'linear-gradient(360deg, rgba(255,255,255,0.05934873949579833) 78%, rgba(255,255,255,1) 100%) ,url("/images/footer.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Left Side */}
      <div className="w-full md:w-1/2 max-sm:mt-auto flex flex-col px-8 py-10 md:px-32 md:py-16">
        <Image
          src={"/images/WhiteLogo.png"}
          alt="logo"
          width={200}
          height={100}
        />
        <p className="text-lg mt-10 font-semibold text-white">
          Copyright © 2024, Adamjee Insurance. All Rights Reserved.
        </p>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 flex max-sm: max-sm:items-end max-sm:justify-between py-10 px-8 md:px-16 text-white">
        {/* Links Column 1 */}
        <div className="flex flex-col text-lg gap-2 md:w-1/2">
          <h2 className="text-2xl font-semibold">Internal Links</h2>
          <a href="#" className="hover:underline">Placeholder Link</a>
          <a href="#" className="hover:underline">Visual Link</a>
          <a href="#" className="hover:underline">Content Link</a>
          <a href="#" className="hover:underline">Finalized Link</a>
        </div>

        {/* Links Column 2 */}
        {/* <div className="flex flex-col text-lg gap-2 md:w-1/2 mt-8 md:mt-0">
          <h2 className="text-2xl font-semibold">External Links</h2>
          <a href="#" className="hover:underline">Placeholder Link</a>
          <a href="#" className="hover:underline">Visual Link</a>
          <a href="#" className="hover:underline">Content Link</a>
          <a href="#" className="hover:underline">Finalized Link</a>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
