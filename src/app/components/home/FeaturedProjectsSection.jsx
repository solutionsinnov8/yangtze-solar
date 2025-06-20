"use client";
import { Collapse } from 'antd';
import { FaChevronDown } from 'react-icons/fa';
import Link from 'next/link';

const { Panel } = Collapse;

const FeaturedProjectsSection = () => {
  const projects = [
    {
      key: '1',
      title: 'Solar Farm Expansion',
      description: 'A 50MW solar farm project completed in 2024.',
      image: '/images/about/img9.jpg',
    },
    {
      key: '2',
      title: 'Urban Solar Rooftops',
      description: 'Installed 200+ rooftop systems in metropolitan areas.',
      image: '/images/about/img10.jpg',
    },
    {
      key: '3',
      title: 'Rural Energy Initiative',
      description: 'Bringing solar power to 100+ rural communities.',
      image: '/images/about/img11.jpg',
    },
  ];

  const customExpandIcon = ({ isActive }) => (
    <FaChevronDown className={`text-gray-600 transition-transform ${isActive ? 'rotate-180' : ''}`} />
  );

  return (
    <div className="w-full bg-gray-100 py-12 font-noto-sans">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-12">Featured Projects</h2>
        <Collapse
          expandIcon={customExpandIcon}
          expandIconPosition="right"
          bordered={false}
          className="bg-transparent"
        >
          {projects.map((project) => (
            <Panel
              header={<span className="text-gray-800 font-semibold">{project.title}</span>}
              key={project.key}
              className="mb-4 bg-white rounded-lg shadow-md"
            >
              <div className="p-4">
                <img src={project.image} alt={project.title} className="w-full h-64 object-cover rounded-md mb-4 object-center" />
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                <Link href={`/contact`} className="inline-block text-green-600 hover:text-green-700 font-medium">
                  Contact Us <span className="ml-1">→</span>
                </Link>
              </div>
            </Panel>
          ))}
        </Collapse>
      </div>
    </div>
  );
};

export default FeaturedProjectsSection;