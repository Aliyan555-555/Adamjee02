"use client";
import { getInstagramFeeds } from "@/src/api";
// import { fetchSocialMediaPosts } from '@/src/api'
import CampaignIntro from "@/src/components/client/CampaignIntro";
import ContactFormPopup from "@/src/components/client/ContectFormPopup";
import FAQsSection from "@/src/components/client/FAQsSection";
import Footer from "@/src/components/client/Footer";
import HeroSection from "@/src/components/client/HeroSection";
import HowToShareYourKahaniSection from "@/src/components/client/HowToShareYourKahaniSection";
import RiderORProduct from "@/src/components/client/RiderORProduct";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [popup, setPopup] = useState(false);

  const fetch = async () => {
    getInstagramFeeds("vacations")
      .then((feed) => {
        console.log(feed);
      })
      .catch((err) => console.log(err));
    // console.log(res)
  };

  useEffect(() => {
    fetch();
  }, []);

  const handleOpenPopup = () => {
    setPopup(true);
  };
  const handleClosePopup = () => {
    setPopup(false);
  };
  return (
    <div className="w-screen overflow-x-hidden">
      <HeroSection />
      <CampaignIntro />
      <RiderORProduct />
      <FAQsSection />
      <HowToShareYourKahaniSection handleOpenPopup={handleOpenPopup} />
      <Footer />
      {popup && <ContactFormPopup close={handleClosePopup} />}
    </div>
  );
};

export default Home;
