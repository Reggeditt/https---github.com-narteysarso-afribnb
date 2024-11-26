// AfriUniverse Roadmap
// AfriCoin is part of the broader AfriUniverse ecosystem, including:
// •	AfriBNB Smart Contract Investments
// •	AfriDEX – Our decentralized exchange
// •	AfriWeb.3 Wallet – A blockchain-powered wallet for secure transactions
// •	Afri E-shopping – An online marketplace for seamless shopping
// •	AfriCrypto Academy – Learn blockchain and crypto skills
// •	Afri-NFT Marketplace – Dive into Africa’s digital art revolution
'use client'

import React, { useState } from 'react';

function RoadmapItem({ title, description }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`absolute group top-[-10px] left-[-10px]`}>
      <div
        className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center"
      >
        <p className="text-white text-sm font-bold">1</p>
      </div>

      <div className={`
        absolute top-10 left-1/2 -translate-x-1/2 bg-white p-4 rounded-lg shadow-md transition-all duration-300 ${isExpanded ? 'block' : 'hidden'}
        `}>
        <h3 className="text-lg font-bold">{title}</h3>
        <p>{description}</p>
      </div>

      <button className="absolute top-1/2 -translate-y-1/2 right-2" onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? 'Collapse' : 'Expand'}
      </button>
    </div>
  );
}

function RoadmapSection() {
  return (
    <div className="relative w-screen min-h-screen bg-red-200 flex flex-col items-center">
      {/* <div className="absolute top-1/2 -translate-y-1/2"> */}
        <div className="flex flex-col w-full h-full gap-4 items-center">
          <div className='relative w-[50px] h-[150px] border-t-2 border-r-2 border-red-600 rounded-xl'>
            <RoadmapItem
              className="border-l-2 border-blue-500 border-b-2" 
              title="Onboarding" description="Welcome to the platform"
            />
          </div>
          <RoadmapItem title="Learning" description="Dive into our courses" />
          <RoadmapItem title="Certification" description="Earn your badge" />
        </div>
      {/* </div> */}
    </div>
  );
}

export default RoadmapSection