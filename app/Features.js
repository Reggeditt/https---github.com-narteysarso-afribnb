import Image from 'next/image'
import React from 'react'

const FeaturesSection = () => {
  return (
    <section className=" p-20 bg-red-200 bg-gradient-to-b from-[#2E4E67] to-white flex flex-col gap-5 justif y-center items-center min-h-screen">
        <h1 className="text-4xl font-bold">Core Features</h1>
        <div className="flex justify-center items-around">
          <ul>
            <li>AfriBNB Integration: Leverages the success of our existing staking platform.</li>
            <li>AfriDEX: A decentralized exchange to trade AfriCoin and other tokens effortlessly.</li>
            <li>Staking Rewards: Beyond BNB, stake AfriCoin for additional rewards and incentives.</li>
            <li>Low Fees & Sustainability: Enjoy only a 1% withdrawal gas fee with a 72-hour withdrawal gap for ecosystem sustainability.</li>
            <li>Community-Driven Vision: Centered on empowering individuals and communities with financial tools.</li>
          </ul>
          <Image width={500} height={500} src="/images/hero2.jpg" alt="AfriCoin" />
        </div>
      </section>
  )
}

export default FeaturesSection
