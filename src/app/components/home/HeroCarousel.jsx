"use client";
import { useState, useEffect, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Link from 'next/link';

const videos = [
  {
    src: '/videos/first.mp4',
    heading: 'Powering the Future with Yangtze Solar',
    buttonText: 'Discover More',
    buttonLink: '/about/yangtze-solar',
  },
  {
    src: '/videos/second.mp4',
    heading: 'Sustainable Energy by Yangtze Solar',
    buttonText: 'Explore Our Services',
    buttonLink: '/services/module-authenticity',
  },
  {
    src: '/videos/third.mp4',
    heading: 'Innovate with Yangtze Solar Technology',
    buttonText: 'Contact Us',
    buttonLink: '/contact',
  },
  {
    src: '/videos/fourth.mp4',
    heading: 'Leading the Solar Revolution with Yangtze Solar',
    buttonText: 'Learn About Us',
    buttonLink: '/about/sustainability',
  },
];

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRefs = useRef(videos.map(() => null));

  const handleVideoEnd = () => {
    setCurrentIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === currentIndex) {
          if (video.readyState >= 2) {
            video.play().catch((e) => console.error(`Video ${videos[index].src} play error:`, e));
          } else {
            video.addEventListener('canplay', () => {
              if (index === currentIndex) {
                video.play().catch((e) => console.error(`Video ${videos[index].src} play error:`, e));
              }
            }, { once: true });
          }
        } else {
          video.pause();
          video.currentTime = 0;
        }
      }
    });
  }, [currentIndex]);

  return (
    <div className="relative w-full h-[calc(100vh-60px)] overflow-hidden font-noto-sans">
      {videos.map((video, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <video
            ref={(el) => (videoRefs.current[index] = el)}
            className="w-full h-full object-cover"
            muted
            loop={false}
            onEnded={handleVideoEnd}
            playsInline
            preload={index === currentIndex || index === (currentIndex + 1) % videos.length ? 'auto' : 'none'}
            onError={(e) => console.error(`Video ${video.src} error:`, e.target.error)}
          >
            <source src={video.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ))}

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