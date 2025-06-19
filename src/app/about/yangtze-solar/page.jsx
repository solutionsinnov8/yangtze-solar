import AboutYangtzeSolarSection from '@/app/components/about/AboutYangtzeSolarSection'
import WhyYangtzeSolarSection from '@/app/components/about/WhyYangtzeSolarSection'
import React from 'react'

const page = () => {
  return (
    <div>
      <div
        className="w-full h-96 bg-cover bg-center relative "
        style={{ backgroundImage: "url('/images/about/img2.jpg')", opacity: "0.6" }}

      >
        <div className="absolute inset-0 flex items-center justify-center ">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-center px-4">
            About Yangtze Solar
          </h1>
        </div>
      </div>
      <AboutYangtzeSolarSection />
      <WhyYangtzeSolarSection />
    </div>
  )
}

export default page
