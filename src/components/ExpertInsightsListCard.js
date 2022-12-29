import React from 'react';

function ExpertInsightsListCard({card}) {
  return (
    <div className='article flex flex-row mt-5'>
      <a href={card.link}>
        <div className='article flex flex-row mt-5'>
          <img className='h-auto w-auto' alt={card.imageAlt} src={card.imageURL}/>
          <h2 className='text-left font-bold ml-4 text-2xl mt-10 text-webmd-bg-color'>{card.title}</h2>
        </div>
      </a>
    </div>
  );
}

export default ExpertInsightsListCard;