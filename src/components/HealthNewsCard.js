import React from 'react';

function HealthNewsCard({card}) {
  return (
    <div className='flex flex-row ml-8 mr-20 cursor-pointer pb-10 border-b lg:border-b-0 lg:border-r border-gray-300'>
      <a href={card.link}>
        <h2 className='text-left font-bold mr-20 text-2xl mt-10 text-gray-700'>{card.title}</h2>
      </a>
    </div>
  );
}

export default HealthNewsCard;