"use client";
import { FaDatabase, FaBrain, FaEye, FaHeartbeat, FaIndustry, FaTruck, FaStar, FaCogs } from 'react-icons/fa';
import Link from 'next/link';

const SmartManufacturingFeatures = () => {
  const features = [
    { icon: FaDatabase, label: 'Big Data Support' },
    { icon: FaBrain, label: 'Artificial Intelligence Quality Inspection' },
    { icon: FaEye, label: 'First Company Enabling AI Detection of EL Defects' },
    { icon: FaHeartbeat, label: 'Automatic Monitoring of All Processes' },
    { icon: FaIndustry, label: 'Automatic Manufacturing' },
    { icon: FaTruck, label: 'Automatic Feeding by Unmanned Vehicles' },
    { icon: FaStar, label: 'Localization of Manufacturing' },
    { icon: FaCogs, label: 'Flexible Production Line Equipment' },
  ];

  return (
    <div className="w-full bg-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-wrap justify-center gap-6">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center p-4 w-[150px] text-center justify-start gap-2 bg-gray-50 rounded-lg shadow-sm hover:bg-green-50 transition-colors">
              <feature.icon className="text-green-600 text-2xl" />
              <span className="text-gray-800 text-xs font-medium">{feature.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SmartManufacturingFeatures;