import React from 'react';
import MissionMod from './images/mission-mod.jpg';
import { AiOutlineArrowRight } from 'react-icons/ai';
function Mission() {
  return (
    <section className='border-b border-gray-300 mb-10'>
        <div className='flex flex-col lg:flex-row grid-cols-2 gap-10'>
          <img src={MissionMod} alt='Mission Mod' className='h-auto w-auto lg:h-full lg:w-[50%]' />
          <div className='flex flex-col'>
            <h1 className='text-left font-semibold text-button-color text-4xl p-2'>Our Content Is Different Because We Set the Bar Higher</h1>
            <p className='text-left text-gray-800 p-2'>As a leader in digital health publishing for more than 25 years, WebMD strives to maintain the most comprehensive and reliable source of health and medical information on the internet.</p>
            <p className='text-left text-gray-800 p-2'>We recognize the responsibility that comes along with being the most well-known and trusted health information platform — and we take that responsibility seriously by:</p>
            <div className='flex p-2 text-center items-center justify-center'>
              <h1 className='text-4xl text-button-color font-bold'>01</h1>
              <p className='text-left text-gray-800 p-2 ml-2'>Charging our content creators to practice <strong>journalistic principles</strong> of excellence and provide objective, accurate, and balanced reporting</p>
            </div>
            <div className='flex p-2 text-center items-center justify-center'>
              <h1 className='text-4xl text-button-color font-bold'>02</h1>
              <p className='text-left text-gray-800 p-2 ml-2'>Maintaining <strong> editorial independence </strong> and transparency into how we protect the integrity of our content</p>
            </div>
            <div className='flex p-2 text-center items-center justify-center'>
              <h1 className='text-4xl text-button-color font-bold'>03</h1>
              <p className='text-left text-gray-800 p-2 ml-2'>Regularly reviewing and updating our content by working with our network of <strong> more than 100 doctors and health experts </strong></p>
            </div>
            <div className='flex p-2'>
              <div className='text-blue-500 mt-5'><AiOutlineArrowRight/></div>
              <a href='https://www.webmd.com/about-webmd-policies/default.htm'><p className='text-button-color m-4'>Learn more about our Editorial Process</p></a>
            </div>
            
          </div>
        </div>
      </section>
  );
}

export default Mission;