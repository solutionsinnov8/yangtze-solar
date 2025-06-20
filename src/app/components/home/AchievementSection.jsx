"use client";
import Link from 'next/link';

const achievements = [
  {
    icon: '/images/home/img8.png', // Placeholder for Tier 1 icon
    title: 'Tier 1',
    description: 'PV Module Maker - Listed by Bloomberg NEF as Tier 1 PV Module Maker',
  },
  {
    icon: '/images/home/img9.png', // Placeholder for Top Performer icon
    title: 'Top Performer',
    description: 'Honored by Kiwa PVEL as "TOP Performer" For 9 Times',
  },
  {
    icon: '/images/home/img10.png', // Placeholder for Top 6 icon
    title: 'TOP 6',
    description: '2024 PV Module Shipment Rankings - Latest data from InfoLink',
  },
  {
    icon: '/images/home/img11.png', // Placeholder for 130 GW+ icon
    title: '130 GW+',
    description: 'Total Global Shipments Until December 2024',
  },
];

const AchievementSection = () => {
  return (
    <div className="w-full bg-gray-50 py-12 font-noto-sans">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-12">Guangxi Solar Achievements</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col items-center">
              <div className="w-16 h-16 mb-4  flex items-center justify-center">
                <img src={achievement.icon} alt={achievement.title} className="w-full h-full object-cover " /> 
              </div>
              <h3 className="text-xl font-bold text-[#18AD5E] mb-2">{achievement.title}</h3>
              <p className="text-gray-600 text-sm">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AchievementSection;