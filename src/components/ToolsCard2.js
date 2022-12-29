import React from 'react';

function ToolsCard2({card}) {
  return (
    <li className='bg-white list-none rounded-full py-2 px-4'>
      <a className='text-black' href={card.link}>{card.title}</a>
    </li>
  );
}

export default ToolsCard2;