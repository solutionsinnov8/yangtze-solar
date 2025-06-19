"use client";
import Link from 'next/link';
import Image from 'next/image';

const WhyYangtzeSolarSection = () => {
  const items = [
    {
      image: '/images/about/icon1.png', // Replace with your image path
      title: 'International Vision',
      text: 'With business operations in over 140 countries and regions, Yangtze Solar has established 11 intelligent manufacturing bases worldwide. It also has branch companies and sales centers in countries such as Germany, the United States, and Brazil, achieving outstanding global sales performance.',
    },
    {
      image: '/images/about/icon2.png', // Replace with your image path
      title: 'Green Development',
      text: 'Yangtze Solar adheres to green and sustainable manufacturing, guiding our partners in the PV industry chain to work together to build a sustainable eco-system. We implement energy-saving and low-carbon actions into the entire life cycle from product development to recycling, realizing win-win economic and ecological benefits.',
    },
    {
      image: '/images/about/icon3.png', // Replace with your image path
      title: 'Sound Operation',
      text: 'Yangtze Solar, under Chint New Energy Technology Co., Ltd., adheres to strong financial management and sustainable operations. Leveraging 18 years of experience in manufacturing tier-1 photovoltaic modules, we provide global clients with high-quality solar products and services.',
    },
  ];

  return (
    <div className="w-full bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1440px] mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Why Yangtze Solar</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md">
              <Image
                src={item.image}
                alt={item.title}
                width={100}
                height={100}
                className="mx-auto mb-4 object-contain"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{item.title}</h3>
              <p className="text-gray-600 text-base leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyYangtzeSolarSection;