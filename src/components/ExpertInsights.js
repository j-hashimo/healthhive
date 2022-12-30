import React from 'react';
import doctor from './images/surgeon.png';
import ExpertInsight1 from './images/ExpertInsight3.png';
import ExpertInsightsData from './ExpertInsightsData';
import ExpertInsightsListCard from './ExpertInsightsListCard';

function ExpertInsights() {
  return (
    <div className='bg-nav-bg-color mb-28'>
      <div className='flex'>
        <div className='flex ml-5'>
          <img src={doctor} alt='doctor' className='mt-10 mx-3 h-20 w-20'/>
          <div className='author-info flex flex-col mt-10'>
            <h2 className='text-webmd-bg-color text-left font-extralight'>Expert Insights From</h2>
            <h1 className='text-webmd-bg-color font-bold text-2xl text-left'>Ethan Jones, MD</h1>
            <h2 className='text-webmd-bg-color text-left font-extralight'>HealthHive Chief Medical Officer</h2>
          </div>
        <div className='lg:border-b border-gray-300 w-96 block mb-20 ml-24'></div>
        </div>
      </div>

      <div className='flex flex-col lg:flex-row px-20'>
        <div className='flex flex-col cursor-pointer mt-10 mr-10 border-b border-gray-300 lg:border-b-0 w-96 '>
          <a href='https://www.webmd.com/schizophrenia/video/schizophrenia-less-lonely'>
            <img className='h-auto w-auto' alt='Trinh Dang' src={ExpertInsight1}/>
            <h1 className='text-webmd-bg-color text-left text-3xl font-bold mt-5'>HealthHive Champions of Change: Caregivers of Schizophrenia</h1>
            <p className='text-webmd-bg-color text-left mt-5 mb-20 '>See how Olivia Smith aims to improve the social and personal lives of people with schizophrenia.</p>
          </a>
        </div>
      
        <div className='border-r border-gray-300 mt-10 mb-8'></div>
        
        <div className='flex flex-col ml-10 pb-10'>
          {ExpertInsightsData.map(card => (
            <ExpertInsightsListCard card={card} key={card.link}/>
          ))}
          </div>
      </div>
    </div>
  );
}

export default ExpertInsights;