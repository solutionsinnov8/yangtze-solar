import AboutYangtzeSolarSection from '@/app/components/about/AboutYangtzeSolarSection'
import OurImpactSection from '@/app/components/about/OurImpactSection'
import WhyYangtzeSolarSection from '@/app/components/about/WhyYangtzeSolarSection'
import HelpSection from '@/app/components/home/HelpSection'
import React from 'react'

const page = () => {
  return (
    <div className='mt-[60px]'>
      <div
        className="w-full h-96 bg-cover bg-center relative "
        style={{ backgroundImage: "url('/images/about/img2.jpg')", opacity: "0.6" }}

      >
        <div className="absolute inset-0 flex items-center justify-center ">
          <h1 className="text-4xl sm:texFeatured Projectst-5xl lg:text-6xl font-bold text-white text-center px-4">
            About Guangxi Solar
          </h1>
        </div>
      </div>
      <AboutYangtzeSolarSection />
      <WhyYangtzeSolarSection />
      <OurImpactSection />
      <HelpSection />
    </div>
  )
}

export default page
