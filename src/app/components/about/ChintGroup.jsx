import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ChintGroup = () => {
  return (
    <div className="w-full bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center gap-8">
        <div className="lg:w-1/2 flex flex-col gap-[10px]">
          <h2 className="text-3xl font-bold mb-2">About CHINT Group</h2>
          <h3 className="text-xl font-medium text-green-600 mb-4">Leadership in Intelligent Manufacturing and Energy Solutions</h3>
          <div className="border-r-4 pr-2 border-green-600 mb-6">
            <p className="text-gray-600 text-base leading-relaxed">
              CHINT Group is a global leader in intelligent electrical equipment, renewable energy, and industrial automation, with a legacy spanning over three decades. Established in China, the group has evolved into a diversified conglomerate, encompassing smart manufacturing, energy solutions, and innovative technologies. <br />
              Through subsidiaries like Yangtze Solar, CHINT Group drives the global transition to sustainable energy, focusing on R&D, production, and distribution of high-efficiency solutions for utility-scale, commercial, industrial, and residential applications. Our commitment is to deliver cutting-edge products and services worldwide.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="/learn-more" className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
              Learn More
            </Link>
            <Link href="/contact" className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2">
          <Image
            src="/images/about/img6.jpg" 
            alt="CHINT Group Facility"
            width={700}
            height={400}
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ChintGroup;