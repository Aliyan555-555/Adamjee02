import { hashTags } from "@/src/constants";
import React from "react";

const HowToShareYourKahaniSection = () => {
  return (
    <div
    id="howTo"
      className="w-screen min-h-[200vh] bg-cover  flex items-center flex-col py-20 bg-no-repeat"
      style={{
        background: " linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.0761554621848739) 24%, rgba(255,255,255,0.08175770308123254) 70%, rgba(255,255,255,1) 100%) ,url(/images/Gradient.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }
    }
      
    >
      <button className="border-4 rounded-[50px] border-[#002175] font-semibold text-xs py-2 px-12  uppercase text-][#002175] ">
        How to share your kahani
      </button>
      <div className="flex w-full items-center mt-10 gap-4 flex-col text-4xl max-sm:text-center md:text-7xl text-[#002175]">
        <p>Share Your Story or Snap a Moment</p>
        <div className="flex gap-3 flex-col md:flex-row items-center">
          <p>Be Part of</p>
          <p className="bg-white px-8 py-3 font-bold rounded-[100px]">
            Kahani Suno!{" "}
          </p>
        </div>
      </div>
      <div className="md:w-[50%] text-lg text-white flex flex-col gap-4 text-center py-10">
        <p>
          At Adamjee Life, your journey inspires us! Join our Kahani Suno
          campaign and showcase how Adamjee Life has been your trusted partner
          in securing your dreams.
        </p>
        <h2 className="text-3xl font-semibold mt-10">How to Participate </h2>
        <h3 className="text-xl font-semibold mt-6">1. Share Your Story:</h3>
        <ul className="">
          <li>
            • post your personal experience with Adamjee Life on Our social
            media platforms.
          </li>
          <li> • Tell us how been there for you as your trusted partner. </li>
        </ul>
        <h3 className="text-xl font-semibold">2. Snap a Picture: </h3>
        <ul>
          <li> • Spot our Kahani Suno branding near you.</li>
          <li>
            • Capture a picture with the branding and share it on your social
            media. Don&apos;t Forget to Use These Hashtags
          </li>
        </ul>

        <h3 className="text-4xl font-bold mt-20">
          Don&apos;t Forget to Use These Hashtags
        </h3>
      </div>{" "}
      <div className="flex gap-4 items-center mt-4 w-full justify-center flex-wrap">
        {hashTags.map((tag) => (
          <div
            key={tag.id}
            className="w-[300px] bg-white rounded-[50px] font-semibold text-2xl text-center py-3 border-2 text-[#002175] border-[#002175]"
          >
            {tag.hashTag}
          </div>
        ))}
      </div>
      <div className="w-full flex flex-col text-xl items-center gap-8 text-white mt-10">
        <h2 className="text-3xl font-bold">Win Amazing Prizes!</h2>
        <p className="">
          The top 20 inspiring stories or creative pictures will win exciting
          prizes.
        </p>
        <h3 className="text-3xl font-bold text-[#002175] mt-10">
          Find Us Near You!
        </h3>
        <p className="text-[#002175]">
          Look out for <strong>Kahani Suno branding</strong> near you and become
          part of this incredible journey.
        </p>
        <h2 className="text-3xl max-sm:text-center md:text-5xl mt-10 text-[#002175]">
          Your story deserves to be heard!
        </h2>
        <button style={{boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'}} className="text-[#002175] font-semibold text-xl px-8 py-3 rounded-[50px] mt-10 bg-white">
          Contact us
        </button>
      </div>
    </div>
  );
};

export default HowToShareYourKahaniSection;
