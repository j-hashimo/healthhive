import React from 'react';

function MoreCard({card}) {
  return (
    <li className='bg-list-color list-none rounded-full py-2 px-4  hover:bg-button-color'>
      <a className='text-nav-bg-color hover:text-white' href={card.link}>{card.title}</a>
    </li>
  );
}

export default MoreCard;