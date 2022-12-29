import React from 'react';

function TrendingTopicsCard({card}) {
  return (
    <li className='bg-list-color list-none rounded-full py-2 px-4'>
      <a className='text-nav-bg-color' href={card.link}>{card.title}</a>
    </li>
  );
}

export default TrendingTopicsCard;