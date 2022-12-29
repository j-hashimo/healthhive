import React from 'react';
import TrendingTopicsData from './TrendingTopicsData';
import TrendingTopicsCard from './TrendingTopicsCard';
function TrendingTopics() {
  return (
    <div>
      <div className='title-and-link flex flex-row justify-between border-b border-gray-300 pb-4 mb-20'>
        <h1 className='mt-8 text-left text-nav-bg-color pl-10 text-3xl font-bold'>Trending Topics</h1>
      </div>
      <div className='flex flex-wrap items-start gap-y-8 gap-x-4 mx-8 mb-8'>
        {TrendingTopicsData.map(card => (
          <TrendingTopicsCard card={card} key={card.link}/>
        ))}
      </div>
    </div>
  );
}

export default TrendingTopics;