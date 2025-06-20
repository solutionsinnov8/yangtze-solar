"use client";
import { useState, useEffect, useRef } from 'react';
import { Carousel } from 'antd';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Link from 'next/link';

const products = [
  { image: '/images/home/img1.png', title: 'Guangxi Y8-700W Bifacial', description: 'High-efficiency panel for homes.', link: '/products/y8-700w' },
  { image: '/images/home/img2.png', title: 'Guangxi Y6-600W Monofacial', description: 'Durable for commercial use.', link: '/products/y6-600w' },
  { image: '/images/home/img3.png', title: 'Guangxi Y5-550W Polycrystalline', description: 'Affordable utility solution.', link: '/products/y5-500w' },
  { image: '/images/home/img4.png', title: 'Guangxi Y9-800W Advanced', description: 'Cutting-edge industrial tech.', link: '/products/y9-800w' },
  { image: '/images/home/img5.png', title: 'Guangxi Y7-650W Hybrid', description: 'Versatile residential option.', link: '/products/y7-650w' },
  { image: '/images/home/img6.png', title: 'Guangxi Y4-450W Basic', description: 'Cost-effective solar panel.', link: '/products/y4-450w' },
  { image: '/images/home/img7.png', title: 'Guangxi Y10-900W Elite', description: 'Premium solar technology.', link: '/products/y10-900w' },
];

const ProductCarousel = () => {
  const carouselRef = useRef(null);

  const goToPrev = () => {
    if (carouselRef.current) {
      carouselRef.current.prev();
    }
  };

  const goToNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 640, // mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // tablet
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative w-full bg-gray-100 py-8 font-noto-sans">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800">Guangxi Solar Panels</h2>
        <p className="text-gray-600 mb-6">
          Explore our high-quality solar panels designed for residential, commercial, and industrial solutions.
        </p>
        <div className="overflow-hidden">
          <Carousel ref={carouselRef} {...settings}>
            {products.map((product, index) => (
              <div key={index} className="px-2">
                <div className="bg-white p-4 rounded-lg shadow-md text-center min-h-[400px] flex flex-col justify-between items-center">
                  <div>
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-52 object-contain mb-4 rounded hover:scale-105 transition-transform duration-300"
                    />
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 flex-grow">{product.description}</p>
                  </div>
                  <Link
                    href="/contact"
                    className="text-green-600 hover:text-green-700 font-medium text-sm inline-flex items-center"
                  >
                   Contact Us
                    <span className="ml-1 transition-transform duration-300 hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
        <div className="flex justify-center mt-4 space-x-4">
          <button
            onClick={goToPrev}
            className="p-2 bg-white bg-opacity-30 hover:bg-opacity-50 text-gray-800 rounded-full focus:outline-none"
            aria-label="Previous product"
          >
            <FaChevronLeft className="text-xl" />
          </button>
          <button
            onClick={goToNext}
            className="p-2 bg-white bg-opacity-30 hover:bg-opacity-50 text-gray-800 rounded-full focus:outline-none"
            aria-label="Next product"
          >
            <FaChevronRight className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;