import React from 'react';

function TopStoryListCard({card}) {
  return (
    <div className='article flex flex-row cursor-pointer mx-auto items-center text-center justify-center w-full h-full overflow-hidden'>
      <a href={card.link}>
        <div className='article flex flex-row cursor-pointer mx-auto items-center text-center justify-center w-full h-full overflow-hidden'>
          <img className='w-[30%] h-full ' alt={card.imageAlt} src={card.image}/>
          <p className='text-left font-bold ml-4 text-base mt-10 text-gray-700 pb-10 w-[60%]'>{card.title}</p>
        </div>
      </a>
    </div>
  );
}

export default TopStoryListCard;