import React from 'react';

const GlobalLayout = () => {
    return (
        <div>
            <div className="max-w-[1440px] mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Global Layout at Yangtze Solar</h2>
                <p className="text-gray-600 text-base leading-relaxed mb-6">
                    Upholding the value proposition of "creating sustainable and efficient green energy," Yangtze Solar integrates smart manufacturing, supply chain management, and global marketing. Our intelligent systems streamline production, distribution, and sales, delivering high-quality photovoltaic modules and services to customers worldwide.
                </p>
                <p className="text-gray-600 text-base leading-relaxed">
                    With a presence in over 140 countries and regions, Yangtze Solar has established state-of-the-art intelligent manufacturing bases in Haining (Zhejiang), Yancheng (Jiangsu), Jiuquan (Gansu), Songyuan (Jilin), Fengyang (Anhui), Yiwu (Zhejiang), Yanchi (Ningxia), Yueqing (Zhejiang), Fuyang (Zhejiang), Thailand, and Turkey. Additionally, we operate branch companies and sales centers in Germany, Spain, the Netherlands, Poland, the United States, Canada, Brazil, Australia, Singapore, Japan, and Thailand, achieving exceptional sales performance in key markets across Europe, North America, Latin America, and Asia Pacific.
                </p>
            </div>
            <img src="/images/about/img5.jpg" alt="" className='mx-auto mb-[40px]' />
        </div>
    );
};

export default GlobalLayout;