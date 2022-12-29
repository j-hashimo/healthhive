import React from 'react';

function ToolsCard1({card}) {
  return (
    <div className='flex flex-col justify-center items-center cursor-pointer'>
      <a href={card.link}>
        <img src={card.imageURL} alt={card.imageAlt} className='hover:opacity-50'/> {/* Add opacity hover to other elements of the home page */}
        <h1 className='text-button-color text-2xl font-bold'>{card.title}</h1>
      </a>
    </div>
  );
}

export default ToolsCard1;