"use client";
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 font-noto-sans">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* First Column: Logo and Description */}
          <div>
            <Link href="/">
              <Image
                src="/images/white.png" // Replace with your logo path
                alt="Yangtze Solar"
                width={250}
                height={40}
                className="object-contain w-[200px] md:w-[250px]"
              />
              {/* <h2 className="text-xl font-semibold mb-4">Yangtze Solar</h2> */}
            </Link>
            <p className="text-base text-gray-300">Innovating sustainable solar energy solutions for a brighter future, we empower communities with clean, renewable power.</p>
          </div>

          {/* Second Column: About Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">About</h3>
            <ul className="space-y-2">
              <li><Link href="/about/yangtze-solar" className="text-white hover:text-red-600">About Yangtze Solar</Link></li>
              <li><Link href="/about/smart-manufacturing" className="text-white hover:text-red-600">Smart Manufacturing</Link></li>
              <li><Link href="/about/chint-group" className="text-white hover:text-red-600">CHINT Group</Link></li>
              <li><Link href="/about/sustainability" className="text-white hover:text-red-600">Sustainability</Link></li>
              <li><Link href="/about/compliance" className="text-white hover:text-red-600">Compliance</Link></li>
            </ul>
          </div>

          {/* Third Column: Services Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services/module-authenticity" className="text-white hover:text-red-600">Module Authenticity</Link></li>
            </ul>
          </div>

          {/* Fourth Column: Contact Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li><Link href="/contact" className="text-white hover:text-red-600">Contact Us</Link></li>
            </ul>
            <div className="mt-4">
              <p className="text-sm">Follow us on</p>
              <Link href="https://www.linkedin.com" className="text-white hover:text-red-600 text-sm">LinkedIn @YangtzeSolar</Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-4 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div>
              <Link href="/quick-links" className="text-white hover:text-red-600 text-sm">Quick Links</Link> |
              <Link href="/careers" className="text-white hover:text-red-600 text-sm ml-2">Careers</Link>
            </div>
            <p className="text-sm">
              COPYRIGHT © 2025 Yangtze Solar Co., Ltd. ALL RIGHTS RESERVED |
              <Link href="/privacy" className="text-white hover:text-red-600 ml-1">Privacy Policy</Link> |
              <Link href="/terms" className="text-white hover:text-red-600 ml-1">Terms of Use</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;