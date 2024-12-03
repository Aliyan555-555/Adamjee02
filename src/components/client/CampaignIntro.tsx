import React from "react";
import Slider from "../UI/Slider";


const CampaignIntro = () => {
  return (
    <div
    id="intro"
      className="w-screen  min-h-screen bg-cover bg-center bg-no-repeat flex-col py-10 flex items-center "
      style={{
        background:
          "linear-gradient(180deg, rgba(255,255,255,0) 61%, rgba(255,255,255,1) 100%), url(/images/CampaignIntroSectionBg.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <button className="border-4 rounded-[50px] border-white text-xs py-2 px-4 font-semibold uppercase text-white ">
        Campaign Intro
      </button>

      <div className="text-4xl sm:text-5xl md:text-6xl  font-semibold md:w-[70%] text-white mt-10 flex flex-col items-center  ">
        <div className="flex flex-col md:flex-row max-sm:items-center  gap-4">
          <p className="text-[#002175] w-fit font-bold bg-white px-4 py-2 rounded-[50px]">
            Kahani suno{" "}
          </p>
          <p>Logoon ki</p>
        </div>
        <p className="max-sm:font-normal max-sm:mt-2 max-sm:text-4xl"> kahani, unki Zubani</p>
      </div>

      <div className=" w-[90%] md:w-[80%] text-center text-sm md:text-lg mt-10 text-white p-6 md:p-8 rounded-2xl  backdrop-blur-lg bg-[#3285d73a]">
        At Adamjee Life, our customers are at the heart of everything we do.
        Through our campaign, KahaniSuno, we bring to life the real experiences
        and heartfelt stories of individuals and families who have placed their
        trust in us as their financial partner.
        <br />
        <br />
        From securing their future to achieving life’s milestones, these stories
        highlight the unwavering bond we share with our customers and how
        Adamjee Life continues to stand by them, offering reliability and peace
        of mind every step of the way.
        <br />
        <br />
        <p className="">Because at Adamjee Life, your story is our story.</p>
      </div>

      <div className="w-full">
        <Slider/>
      </div>
    </div>
  );
};

export default CampaignIntro;
