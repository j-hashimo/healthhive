import React from 'react';

//Note: had trouble with responsive text over the image. Fixed this by adding w-full h-full to maximize the dimensions of the image, and changing the absolute positioning 
function LivingHealthyCard({card}) {
  return (
    <div className='relative cursor-pointer '>
      <a href={card.link}>
        <img alt={card.imageAlt} src={card.imageURL} className='w-full ml-full ml-10'/>
        <h2 className='font-bold ml-4 text-2xl bottom-5 w-full left-6 text-white absolute text-center'>{card.title}</h2>
      </a>        
    </div>
  );
}

export default LivingHealthyCard;