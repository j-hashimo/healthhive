import React from 'react'
import BrainFog from './images/brain_fog.jpg';
function HealthNews() {
  return (
    <div>
      <div className='title-and-link flex flex-row justify-between border-b border-gray-300 pb-4'>
        <h1 className='mt-8 text-left text-nav-bg-color pl-10 text-3xl font-bold'>Health News</h1>
        <a className='mt-12 text-blue-500 pr-5' href='https://www.webmd.com/'>See all</a>
      </div>

      <div className='headline lg:flex mt-4 cursor-pointer border-b border-gray-300 pb-4' onClick={() => {window.open('https://www.webmd.com/lung/news/20221128/is-it-long-covid-or-dementia-or-both', "_blank");}}>
        <img className='h-auto w-auto' alt='headline' src={BrainFog}/>
        <div className='headline-text flex flex-col px-4 justify-center'>
          <h1 className='font-bold text-button-color text-2xl md:text-4xl text-left mt-2'>Is It Long COVID, or Dementia, or Both?</h1>
          <p className='text-left mt-2 text-base md:text-xl font-normal text-gray-700'> Some scientists are starting to confirm what doctors, patients, and their families can already see: Older patients who have had COVID-19 have a higher risk of getting dementia. </p>
        </div>
      </div>
    </div>
  );
}

export default HealthNews;