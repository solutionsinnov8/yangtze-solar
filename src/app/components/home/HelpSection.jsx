"use client";
import Link from 'next/link';

const HelpSection = () => {
  return (
   
      <div className="w-full  py-12 sm:py-10 lg:py-16" style={{
        backgroundImage: "url('/images/home/contact.jpg')",
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover"
      }}>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8  text-white">
          <h2 className="text-3xl sm:text-3xl lg:text-5xl font-semibold mb-4">How can we help you?</h2>
          <p className="text-lg sm:text-lg lg:text-xl mb-6">Get advice from Guangxi Solar experts today!</p>
          <Link
            href="/contact"
            className="inline-block bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium py-2 px-6 rounded-md transition-colors duration-300"
          >
            Contact Us <span className="ml-1">→</span>
          </Link>
        </div>
      </div>
  );
};

export default HelpSection;