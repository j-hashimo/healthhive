import React from 'react';
import {AiOutlineArrowRight} from 'react-icons/ai';
function BlogsCard({card}) {
  return (
    <div className='author-info flex flex-col bg-list-color px-8 mb-8 mx-12 relative' >
            <img src={card.imageURL} alt={card.imageAlt} className=' w-auto h-auto'/>
            <a href={card.link}><button className='bg-white rounded-md absolute left-10 top-2 font-semibold px-1'>{card.headline}</button></a>
            <h1 className='text-black text-center font-bold mt-6'>{card.name}
            </h1>
            <p className='text-center text-sm mb-10 mt-4 border-b border-white pb-2'>{card.diagnosis}</p>
            <div className='cursor-pointer'>
              <a href={card.link}>
                <p className='text-xl text-left text-blue-600 font-semibold -mt-4 mb-10 pb-10'>{card.title}</p>
                <div className='bg-white p-4 absolute right-4 bottom-2 w-auto h-auto mt-11 rounded-md'><AiOutlineArrowRight/></div>
              </a>
              
            </div>
          </div>
  );
}

export default BlogsCard;