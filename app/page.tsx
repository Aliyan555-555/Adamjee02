"use client"
// import { fetchSocialMediaPosts } from '@/src/api'
import CampaignIntro from '@/src/components/client/CampaignIntro'
import FAQsSection from '@/src/components/client/FAQsSection'
import Footer from '@/src/components/client/Footer'
import HeroSection from '@/src/components/client/HeroSection'
import HowToShareYourKahaniSection from '@/src/components/client/HowToShareYourKahaniSection'
import RiderORProduct from '@/src/components/client/RiderORProduct'
import React, { useEffect } from 'react'

const Home = () => {

  const fetch  = async() =>{
    // const res= await fetchSocialMediaPosts("hello");
    // console.log(res);
  }

  useEffect(()=>{
    fetch();
  },[])
  return (
    <div className='w-screen overflow-x-hidden'>
      <HeroSection/>
      <CampaignIntro/>
      <RiderORProduct/>
      <FAQsSection/>
      <HowToShareYourKahaniSection/>
      <Footer/>
      
    </div>
  )
}

export default Home
