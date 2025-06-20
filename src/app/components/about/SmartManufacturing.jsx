import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const SmartManufacturing = () => {
    return (
        <div className="w-full bg-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-1/2 flex flex-col gap-[10px]">
                    <h2 className="text-3xl font-bold mb-2">Smart Manufacturing at Guangxi Solar</h2>
                    <h3 className="text-xl font-medium text-green-600 mb-4">Innovation in Production Technology</h3>
                    <div className="border-r-4 pr-2 border-green-600 mb-6">
                        <p className="text-gray-600 text-base leading-relaxed">
                            Under the CHINT Group, Guangxi Solar leverages cutting-edge smart manufacturing to revolutionize photovoltaic cell and module production. Since 2006, we have integrated advanced automation, AI-driven quality control, and sustainable practices into our intelligent manufacturing facilities. <br />
                            Our commitment to innovation ensures high-efficiency solar solutions for global markets, focusing on scalable production, real-time monitoring, and eco-friendly processes. We lead the industry with smart factories that support utility-scale, commercial, industrial, and residential PV systems.
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <Link href="/learn-more" className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
                            Learn More
                        </Link>
                        <Link href="/contact" className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
                            Contact Us
                        </Link>
                    </div>
                </div>
                <div className="lg:w-1/2">
                    <Image
                        src="/images/about/img4.jpg"
                        alt="Guangxi Solar Smart Manufacturing Facility"
                        width={700}
                        height={400}
                        className="object-cover rounded-lg"
                    />
                </div>
            </div>
        </div>
    )
}

export default SmartManufacturing