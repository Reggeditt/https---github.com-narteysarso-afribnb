import React from 'react'

const HeroSection = () => {
  return (
    <section className="main-bg bg-gradient-to-b from-[#32230D] to-[#2E4E67] pt-10 pr-15 pl-15 pb-20 shadow-xl">
      <header className="header-section flex justify-between items-center ml-[20px] mr-[20px] mb-5 pr-10 pl-10">
        <h1 className="text-xl font-bold text-[#FFC107]">AfriCoin</h1>
        <nav className="flex gap-5">
          <a href="#" className="text-[#FFC107]">features</a>
          <a href="#" className="text-[#FFC107]">About</a>
          <a href="#" className="text-[#FFC107]">Team</a>
          <a href="#" className="text-[#FFC107]">FaQs</a>
          <a href="#" className="text-[#FFC107]">Contact</a>
        </nav>
      </header>
      <div id="hero" className="hero-section relative rounded-xl ml-[20px] mr-[20px] min-h-screen text-[#FFC107] flex justify-between items-center pr-10 pl-10 shadow-xl">
      <div className="h-[300px] flex flex-col gap-10">
        <p className="text-6xl font-bold  backdrop-blur-sm p-5 rounded-xl">Welcome to <span className="text-[#F1F1F1]">AfriCoin</span></p> 
        <h2 className="text-2xl font-bold text-[#F5F5F5] max-w-[400px]">Empowering <span className="text-black/70 backdrop-blur-xl p-2">Africa</span> through Decentralized Finance</h2>
      </div>
      <div className="socials flex flex-col gap-5 text-white">
        <a href="#" className="text-[#FFC107]">Twitter</a>
        <a href="#" className="text-[#FFC107]">Telegram</a>
        <a href="#" className="text-[#FFC107]">Discord</a>
      </div>

      <div className="hero-bridge absolute bottom-[-100px] left-[calc(20%/2)] flex gap-3 items-center backdrop-blur-xl p-5 rounded-2xl w-[80%] shadow-2xl">
        <div className="hero-bridge-item flex flex-col gap-2 justify-center items-start">
          <h3 className="text-xl font-bold text-[#F5F5F5]">What is AfriCoin?</h3>
          <p className="text-[#F5F5F5]">AfriCoin is more than a token</p>
          <p className="text-[#F5F5F5]">its a vision for Africas financial independence.</p>
        </div>
        <div className="divider w-1 h-[100px] bg-gray-400 rounded-full"/>
        <div className="hero-bridge-item flex flex-col gap-2">
         <p>Built on the foundation of AfriBNB, our proven staking platform</p>
         <p>AfrCoin expands the possibilities with cutting-edge DeFi solutions.</p>
        </div>
        <div className="divider w-1 h-[100px] bg-gray-400 rounded-full"/>
        <div className="hero-bridge-item flex flex-col gap-2">
          <p className="text-[#F5F5F5]">access to a secure ecosystem offering staking rewards</p>
          <p> a decentralized exchange (DEX)</p> 
          <p>and a utility token designed to empower users across Africa and the world.</p>
         </div>
      </div>
      </div>
    </section>
  )
}

export default HeroSection