import React from 'react'
import SpecialSectionCard from './SpecialSectionCard';
import SpecialSectionData from './SpecialSectionData';
function SpecialSection() {
  return (
    <div>
      <div className='title-and-link flex flex-row justify-between border-b border-gray-300 pb-4 mb-20'>
        <h1 className='mt-8 text-left text-nav-bg-color pl-10 text-3xl font-bold'>Special Section</h1>
        <a className='mt-12 text-blue-500 pr-5' href='https://www.webmd.com/'>See all</a>
      </div>
      <div className='justify-center grid-cols-3 gap-4 flex flex-col md:flex-row'>
        {SpecialSectionData.map(card => (
          <SpecialSectionCard card={card} key={card.link}/>
        ))}
      </div>
    </div>
  )
}

export default SpecialSection