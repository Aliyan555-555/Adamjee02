import CampaignIntro from '@/src/components/client/CampaignIntro'
import FAQsSection from '@/src/components/client/FAQsSection'
import Footer from '@/src/components/client/Footer'
import HeroSection from '@/src/components/client/HeroSection'
import HowToShareYourKahaniSection from '@/src/components/client/HowToShareYourKahaniSection'
import RiderORProduct from '@/src/components/client/RiderORProduct'
import React from 'react'

const Home = () => {
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
