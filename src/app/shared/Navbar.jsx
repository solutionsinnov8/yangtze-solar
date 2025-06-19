"use client"
import { useState } from 'react';
import { Dropdown, Menu } from 'antd';
import { FaSearch, FaAngleDown, FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { TiArrowSortedDown } from "react-icons/ti";
import { MdOutlineManageSearch } from "react-icons/md";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // About Dropdown Menu
  const aboutMenu = (
    <Menu className="bg-white shadow-lg rounded-lg border border-gray-100 font-inter">
      <Menu.Item key="1">
        <Link href="/about/yangtze-solar" className="text-gray-700 hover:text-red-600 font-inter">
          About Yangtze Solar
        </Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link href="/about/smart-manufacturing" className="text-gray-700 hover:text-red-600 font-inter">
          Smart Manufacturing
        </Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link href="/about/chint-group" className="text-gray-700 hover:text-red-600 font-inter">
          CHINT Group
        </Link>
      </Menu.Item>
      <Menu.Item key="4">
        <Link href="/about/sustainability" className="text-gray-700 hover:text-red-600 font-inter">
          Sustainability
        </Link>
      </Menu.Item>
      <Menu.Item key="5">
        <Link href="/about/compliance" className="text-gray-700 hover:text-red-600 font-inter">
          Compliance
        </Link>
      </Menu.Item>
    </Menu>
  );

  // Services Dropdown Menu
  const servicesMenu = (
    <Menu className="bg-white shadow-lg rounded-lg border border-gray-100 font-inter">
      <Menu.Item key="1">
        <Link href="/services/module-authenticity" className="text-gray-700 hover:text-red-600 font-inter">
          Module Authenticity
        </Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <nav className="bg-white shadow-md fixed top-0 z-50 font-inter h-[60px] w-full flex items-center justify-between">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center ">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              {/* <Image
                src="/logo.png" // Replace with your logo path
                alt="Yangtze Solar"
                width={150}
                height={40}
                className="object-contain"
              /> */}
              <h2 className='text-2xl font-semibold'>Yangtze Solar</h2>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 justify-between w-[50%] xl:w-[30%]">
            <Dropdown overlay={aboutMenu} trigger={['hover']}>
              <button className="text-gray-700 hover:text-red-600 flex items-center font-medium focus:outline-none">
                About <TiArrowSortedDown  className="ml-[2px] text-lg" />
              </button>
            </Dropdown>
            <Dropdown overlay={servicesMenu} trigger={['hover']}>
              <button className="text-gray-700 hover:text-red-600 flex items-center font-medium focus:outline-none">
                Services <TiArrowSortedDown  className="ml-[2px] text-lg" />
              </button>
            </Dropdown>
            <Link href="/contact" className="text-gray-700 hover:text-red-600 font-medium">
              Contact Us
            </Link>
            <Link href="/search" className="text-gray-700 hover:text-red-600">
              <MdOutlineManageSearch className="text-2xl" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-red-600 focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Dropdown overlay={aboutMenu} trigger={['click']}>
              <button className="block px-3 py-2 text-gray-700 hover:text-red-600 font-medium focus:outline-none">
                About <TiArrowSortedDown className="ml-[2px] text-sm inline" />
              </button>
            </Dropdown>
            <Dropdown overlay={servicesMenu} trigger={['click']}>
              <button className="block px-3 py-2 text-gray-700 hover:text-red-600 font-medium focus:outline-none">
                Services <TiArrowSortedDown className="ml-[2px] text-sm inline" />
              </button>
            </Dropdown>
            <Link
              href="/contact"
              className="block px-3 py-2 text-gray-700 hover:text-red-600 font-medium"
            >
              Contact Us
            </Link>
            <Link
              href="/search"
              className="block px-3 py-2 text-gray-700 hover:text-red-600 font-medium"
            >
              <MdOutlineManageSearch className="inline-block mr-2 text-2xl" /> Search
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;