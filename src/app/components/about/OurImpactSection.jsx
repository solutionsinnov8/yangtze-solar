"use client";
import { useEffect, useRef } from 'react';
import Link from 'next/link';

const OurImpactSection = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = 600;
    canvas.height = 400;

    // Simple interactive map (draw circles for global presence)
    ctx.fillStyle = '#4CAF50';
    ctx.beginPath();
    [100, 200, 300, 400, 500].forEach((x, i) => {
      const y = 100 + Math.sin(i) * 50;
      ctx.moveTo(x, y);
      ctx.arc(x, y, 10, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#FFFFFF';
      ctx.fillText(`Location ${i + 1}`, x - 15, y - 15);
    });

    // Add hover effect
    canvas.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      [100, 200, 300, 400, 500].forEach((xPos, i) => {
        const yPos = 100 + Math.sin(i) * 50;
        ctx.beginPath();
        ctx.arc(xPos, yPos, 10, 0, Math.PI * 2);
        ctx.fillStyle = x > xPos - 15 && x < xPos + 15 && y > yPos - 15 && y < yPos + 15 ? '#FF9800' : '#4CAF50';
        ctx.fill();
        ctx.fillStyle = '#FFFFFF';
        ctx.fillText(`Location ${i + 1}`, xPos - 15, yPos - 15);
      });
    });
  }, []);

  const milestones = [
    { year: 2006, text: 'Founded Yangtze Solar under CHINT Group' },
    { year: 2010, text: 'Established first international manufacturing base' },
    { year: 2015, text: 'Launched high-efficiency solar modules' },
    { year: 2020, text: 'Expanded to 140+ countries' },
    { year: 2025, text: 'Achieved net-zero carbon goal' },
  ];

  return (
    <div className="w-full bg-gradient-to-r from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1440px] mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Impact</h2>
        <p className="text-gray-600 text-lg mb-12">Discover how Yangtze Solar is shaping a sustainable future worldwide.</p>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="w-full lg:w-1/2">
            <canvas ref={canvasRef} className="w-full h-auto border border-gray-300 rounded-lg shadow-md" />
            <p className="text-gray-600 mt-4 text-center">Hover over the map to explore our global presence.</p>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col items-start">
            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-16 h-16 bg-green-600 text-white flex items-center justify-center rounded-full mr-4">
                    {milestone.year}
                  </div>
                  <p className="text-gray-700 text-base">{milestone.text}</p>
                </div>
              ))}
            </div>
            <Link href="/our-impact" className="mt-8 inline-block bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700">
              Explore More Impact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurImpactSection;