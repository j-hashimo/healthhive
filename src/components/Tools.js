import React from 'react';
import ToolsCard1 from './ToolsCard1';
import ToolsData1 from './ToolsData1';
import Tools2Data from './Tools2Data';
import ToolsCard2 from './ToolsCard2';
function Tools() {
  return (
    <div className='bg-list-color'>
      <div className='title-and-link flex flex-row justify-between border-b border-gray-300 pb-4 mb-20'>
        <h1 className='mt-8 text-left text-nav-bg-color pl-10 text-3xl font-bold'>Tools, Trackers & Calculators</h1>
      </div>
      <div className='grid grid-cols-3 md:grid-cols-5 gap-2 bg-list-color mb-10 border-b border-gray-300 pb-10'>
        {ToolsData1.map(card => (
          <ToolsCard1 card={card} key={card.link}/>
        ))}
      </div>
      <div className='flex flex-wrap items-start gap-y-8 gap-x-4 ml-8 mb-8 pb-14'>
        {Tools2Data.map(card => (
          <ToolsCard2 card={card} key={card.link}/>
        ))}
      </div>
    </div>
  );
}

export default Tools;