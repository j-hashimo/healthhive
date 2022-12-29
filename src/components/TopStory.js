import React from 'react';
import TopStoryImage from './images/TopStoryImage.png';
function TopStory() {
  return (
    <div>
      <h3 className='mt-8 text-left text-nav-bg-color pl-2 text-3xl font-bold border-b border-gray-300 pb-3'>Today's Top Stories</h3>

      <div className='headline lg:flex mt-4 cursor-pointer border-b border-gray-300 pb-4' onClick={() => {window.open('https://www.webmd.com/balance/ss/slideshow-holiday-travel-less-stressful', "_blank");}}>
        <img className='h-auto w-auto' alt='headline' src={TopStoryImage}/>
        <div className='headline-text flex flex-col px-4 justify-center'>
          <h1 className='font-bold text-button-color text-2xl md:text-4xl text-left mt-2'>Traveling? How to Do It With Less Stress</h1>
          <p className='text-left mt-2 text-base md:text-xl font-medium text-gray-700'>Plan ahead (for security lines, traffic delays) and use technology to stay ahead of the holiday hustle. Learn more tips.</p>
        </div>
      </div>
    </div>
  );
}

export default TopStory;