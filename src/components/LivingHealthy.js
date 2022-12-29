import React from 'react';
import LivingHealthyCard from './LivingHealthyCard';
import LivingHealthyData from './LivingHealthyData';
function LivingHealthy() {
  return (
    <div>
      <div className='title-and-link flex flex-row justify-between border-b border-gray-300 pb-4'>
        <h1 className='mt-8 text-left text-nav-bg-color pl-10 text-3xl font-bold'>Living Healthy</h1>
        <a className='mt-12 text-blue-500 pr-5' href='https://www.webmd.com/'>See all</a>
      </div>
      <div className='images flex-row grid grid-cols-3 md:grid-cols-3 lg:grid-cols-5 mt-10 mb-10 ml-10 mr-20 gap-5 '>
        {LivingHealthyData.map(card => (
          <LivingHealthyCard card={card} key={card.link}/>
        ))}
      </div>
    </div>
  );
}

export default LivingHealthy;