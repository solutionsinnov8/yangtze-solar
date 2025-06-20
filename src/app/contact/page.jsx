import React from 'react'
import ContactUs from '../components/contact/ContactUs'
import HelpSection from '../components/home/HelpSection'

const page = () => {
  return (
    <div className='mt-[60px]'>
      <div
        className="w-full h-96 bg-cover bg-center relative "
        style={{ backgroundImage: "url('/images/about/img2.jpg')", opacity: "0.6" }}

      >
        <div className="absolute inset-0 flex items-center justify-center ">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-center px-4">
            Contact Us
          </h1>
        </div>
      </div>
      <ContactUs />
      <HelpSection />
    </div>
  )
}

export default page
