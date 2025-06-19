import React from 'react'
import HeroCarousel from './components/home/HeroCarousel'
import ProductCarousel from './components/home/ProductCarousel'
import AchievementSection from './components/home/AchievementSection'
import HelpSection from './components/home/HelpSection'
import FeaturedProjectsSection from './components/home/FeaturedProjectsSection'

const page = () => {
  return (
    <div className='mt-[60px]'>
      <HeroCarousel />
      <ProductCarousel />
      <AchievementSection />
      <FeaturedProjectsSection />
      <HelpSection />
    </div>
  )
}

export default page
