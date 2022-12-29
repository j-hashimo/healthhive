import React from 'react';

function SpecialSectionCard({card}) {
  return (
    <div className='author-info flex flex-col bg-white px-8 mb-8 cursor-pointer'>
      <a href='https://www.webmd.com/schizophrenia/toc-caregivers'>
        <img src={card.imageURL} alt={card.imageAlt} className='h-auto w-auto'/>
        <p className='text-white bg-red-600 text-sm py-2 mt-6 cursor-pointer'>{card.categoryText}</p>
              
        <h1 className='text-blue-600 text-3xl text-left font-semibold mt-6'>{card.title}</h1>
        <p className='text-left text-gray-700 text-xl mb-7 mt-4'>{card.description}</p>
      </a>
    </div>
  );
}

export default SpecialSectionCard;