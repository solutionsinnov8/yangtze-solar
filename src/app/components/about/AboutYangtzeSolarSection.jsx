"use client";
import Link from 'next/link';
import Image from 'next/image';

const AboutYangtzeSolarSection = () => {
  return (
    <div className="w-full bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center gap-8">
        <div className="lg:w-1/2 flex flex-col gap-[10px]">
          <h2 className="text-3xl font-bold mb-2">About Yangtze Solar</h2>
          <h3 className="text-xl font-medium text-green-600 mb-4">Overview of Company Business and Development</h3>
          <div className="border-r-4 pr-2 border-green-600 mb-6">
            <p className="text-gray-600 text-base leading-relaxed">
              Under the CHINT Group, Yangtze Solar is a leading intelligent manufacturing enterprise focusing on photovoltaic cells and modules. Founded in 2006, it is one of the earliest private enterprises in China to set foot in the photovoltaic field. It has the capacity to design and manufacture advanced solar technology products for global markets. <br />
              Committed to being a top photovoltaic module supplier, Yangtze Solar aims to create a sustainable, net-zero carbon world with solar power. Focusing on R&D, production, and sales of high-efficiency crystalline silicon PV cells and modules, we offer innovative solutions for utility-scale, commercial, industrial, and residential PV systems.
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
            src="/images/about/img3.jpg" 
            alt="Yangtze Solar Facility"
            width={700}
            height={400}
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutYangtzeSolarSection;