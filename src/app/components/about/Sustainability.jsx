import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Sustainability = () => {
  return (
    <div className="w-full bg-white py-12 px-4 sm:px-6 lg:px-8 flex flex-col gap-5">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-end gap-8 justify-between">
        <div className="lg:w-1/2 flex flex-col gap-[10px]">
          <h2 className="text-3xl font-bold mb-2">Green & Sustainable Manufacturing</h2>
          <div className="  mb-6">
            <p className="text-gray-600 text-base leading-relaxed">
              The concept of sustainable development has been deeply rooted in the hearts of people around the world and has become a universal value consensus. As a new energy enterprise with sustainable development as its strategic orientation,  Yangtze Solar has the ability and responsibility to become the primary driving force driving the world towards a greener and low-carbon future. <br /><br />
              We implement low-carbon actions through the production of each PV module, practice green behavior through every employee, and guide our partners in the PV industry chain to build a sustainable ecology together. We believe, with combined efforts, we can contribute to a green, sustainable life in the near future and realize the harmonious co-existence between humans and nature.
            </p>
          </div>
        </div>
        <div className="lg:w-[40%] flex flex-wrap gap-5">
          <img src="/images/about/sus1.png" alt="" className='w-[120px] ' />
          <img src="/images/about/sus2.png" alt="" className='w-[120px] ' />
          <img src="/images/about/sus3.png" alt="" className='w-[120px] ' />
          <img src="/images/about/sus4.png" alt="" className='w-[120px] ' />
          <img src="/images/about/sus5.png" alt="" className='w-[120px] ' />
          <img src="/images/about/sus6.png" alt="" className='w-[120px] ' />
          <img src="/images/about/sus7.png" alt="" className='w-[120px] ' />
          <img src="/images/about/sus8.png" alt="" className='w-[120px] ' />
        </div>
      </div>
       <div className=" flex flex-wrap gap-5 max-w-[1440px] justify-between">
          <img src="/images/about/sus9.png" alt="" className='w-[120px] ' />
          <img src="/images/about/sus10.png" alt="" className='w-[120px] ' />
          <img src="/images/about/sus11.png" alt="" className='w-[120px] ' />
          <img src="/images/about/sus12.png" alt="" className='w-[120px] ' />
          <img src="/images/about/sus13.png" alt="" className='w-[120px] ' />
          <img src="/images/about/sus14.png" alt="" className='w-[120px] ' />
          <img src="/images/about/sus15.png" alt="" className='w-[120px] ' />
          <img src="/images/about/sus16.png" alt="" className='w-[120px] ' />
          <img src="/images/about/sus17.png" alt="" className='w-[120px] ' />
        </div>
    </div>
  )
}

export default Sustainability
