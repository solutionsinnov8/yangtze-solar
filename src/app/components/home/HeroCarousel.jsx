"use client";
import { useState, useEffect, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Link from 'next/link';

const videos = [
  {
    src: '/videos/first.mp4',
    heading: 'Powering the Future with Guangxi Solar',
    buttonText: 'Discover More',
    buttonLink: '/about/guangxi-solar',
    fallbackImage: '/images/fallback1.jpg',
  },
  {
    src: '/videos/second.mp4',
    heading: 'Sustainable Energy by Guangxi Solar',
    buttonText: 'Explore Our Services',
    buttonLink: '/services/module-authenticity',
    fallbackImage: '/images/fallback2.jpg',
  },
  {
    src: '/videos/third.mp4',
    heading: 'Innovate with Guangxi Solar Technology',
    buttonText: 'Contact Us',
    buttonLink: '/contact',
    fallbackImage: '/images/fallback3.jpg',
  },
];

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRefs = useRef(videos.map(() => null));

  // Handle video end to move to next slide
  const handleVideoEnd = () => {
    goToNext();
  };

  // Go to previous slide
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? videos.length - 1 : prevIndex - 1));
  };

  // Go to next slide
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === videos.length - 1 ? 0 : prevIndex + 1));
  };

  // Play current video and pause others
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === currentIndex) {
          console.log(`Playing video: ${videos[index].src}`);
          video.play().catch((error) => console.error(`Video ${videos[index].src} play error:`, error));
        } else {
          video.pause();
          video.currentTime = 0;
        }
      } else {
        console.error(`Video ref for ${videos[index].src} is null`);
      }
    });
  }, [currentIndex]);

  return (
    <div className="relative w-full h-[calc(100vh-60px)] overflow-hidden font-noto-sans">
      {/* Carousel Videos */}
      {videos.map((video, index) => (
        <div
          key={index}
          className={`absolute inset-0 ${index === currentIndex ? 'block z-10' : 'hidden z-0'}`}
        >
          <video
            ref={(el) => (videoRefs.current[index] = el)}
            className="w-full h-full object-cover"
            muted
            loop={false}
            onEnded={handleVideoEnd}
            playsInline
            preload="auto"
            onError={(e) => console.error(`Error loading video ${video.src}:`, e)}
            poster={video.fallbackImage}
          >
            <source src={video.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Overlay commented out to debug video visibility */}
          {/* <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div> */}
        </div>
      ))}

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-start px-4 sm:px-6 lg:px-8 z-20">
        <div className="max-w-[1440px] mx-auto w-full">
          <div className="text-white max-w-lg ml-10 sm:ml-12 lg:ml-14">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              {videos[currentIndex].heading}
            </h1>
            <Link
              href={videos[currentIndex].buttonLink}
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-6 rounded-md transition-colors duration-300"
            >
              {videos[currentIndex].buttonText}
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 text-gray-800 p-3 rounded-full focus:outline-none z-20"
        aria-label="Previous slide"
      >
        <FaChevronLeft className="text-xl" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 text-gray-800 p-3 rounded-full focus:outline-none z-20"
        aria-label="Next slide"
      >
        <FaChevronRight className="text-xl" />
      </button>
    </div>
  );
};

export default HeroCarousel;