import React from 'react';

function FeaturedStoriesCard({card}) {
  return (
    <div className='author-info flex flex-col bg-list-color px-8 mb-8 cursor-pointer'>
      <a href={card.link}>
        <img src={card.imageURL} alt={card.imageAlt} className=' w-auto h-auto'/>
        <h1 className='text-nav-bg-color text-3xl text-left font-semibold mt-6'>{card.title}
        </h1>
        <p className='text-left text-nav-bg-color text-xl mb-10 mt-4'>{card.description}</p>
      </a>
    </div>
  );
}

export default FeaturedStoriesCard;