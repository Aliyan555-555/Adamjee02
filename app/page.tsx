"use client";
import Script from "next/script";
import CampaignIntro from "@/src/components/client/CampaignIntro";
import ContactFormPopup from "@/src/components/client/ContectFormPopup";
import FAQsSection from "@/src/components/client/FAQsSection";
import Footer from "@/src/components/client/Footer";
import HeroSection from "@/src/components/client/HeroSection";
import HowToShareYourKahaniSection from "@/src/components/client/HowToShareYourKahaniSection";
import RiderORProduct from "@/src/components/client/RiderORProduct";
import React, { useState } from "react";
// import { getFeeds } from "@/src/api";
import Page from "@/src/components/client/socialMedia";
// import { getFeeds } from "@/src/api";

const Home = () => {
  const [popup, setPopup] = useState(false);

  const handleOpenPopup = () => {
    setPopup(true);
  };
  const handleClosePopup = () => {
    setPopup(false);
  };

  // const fetch  = async () => {
  //   const res = await getFeeds('bro');
  //   console.log(res);
  // }
  // useEffect(() => {
  //   fetch();
  // }, []);

  return (
    <div className="!w-[100vw] !scroll-smooth !overflow-x-hidden">
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-3PD6V68E4G`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
           window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-3PD6V68E4G');

        `}
      </Script>
      <HeroSection />
      <CampaignIntro />
      <RiderORProduct />
      <FAQsSection />
      <HowToShareYourKahaniSection handleOpenPopup={handleOpenPopup} /> <Page />
      <Footer />
      {popup && <ContactFormPopup close={handleClosePopup} />}
    </div>
  );
};

export default Home;
