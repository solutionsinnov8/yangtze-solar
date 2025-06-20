import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Compliance = () => {
  return (
    <div className="w-full bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center gap-8">
        <div className="lg:w-1/2 flex flex-col gap-[10px]">
          <h2 className="text-3xl font-bold mb-2">Compliance Policy</h2>
          <h3 className="text-xl font-medium text-green-600 mb-4">Commitment to Ethical Standards</h3>
          <div className="border-r-4 pr-2 border-green-600 mb-6">
            <p className="text-gray-600 text-base leading-relaxed">
              As part of the CHINT Group, Guangxi Solar upholds the highest standards of compliance in its smart manufacturing and renewable energy operations. Since 2006, we have integrated robust governance, ethical practices, and adherence to international regulations into our business framework. <br />
              Our commitment ensures transparency, quality, and sustainability across global markets, with a focus on regulatory compliance, environmental responsibility, and fair trade practices. We support a diverse range of PV systems—utility-scale, commercial, industrial, and residential—while maintaining strict adherence to industry standards.
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
            src="/images/about/img8.jpg"
            alt="Guangxi Solar Compliance Facility"
            width={700}
            height={400}
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Compliance;