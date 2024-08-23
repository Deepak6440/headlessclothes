import React from 'react'
import Hero from '../components/HeroSection/Hero'
import Category from '../components/Category/Category'
import Discount from '../components/Discount/Discount'
import Featured from '../components/Featured/Featured'
import Collections from '../components/Collections/Collections'
import { CallToAction } from '../components/CallToAction/CallToAction'
import Sponser from '../components/Sponser/Sponser'
import DealOfTheDay from '../components/DealOfTheDay/DealOfTheDay'
import Blog from '../components/Blog/Blog'



const Home = () => {
  const swiper = new Swiper();
  return (
    <>
      <Hero/>
        <Category />
        <Discount />
        <Featured />
        <Collections />
        <CallToAction />
        <Sponser />
        <DealOfTheDay />
        <Blog />
       
    </>
  
  )
}

export default Home