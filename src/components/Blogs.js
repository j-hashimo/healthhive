import React from 'react';
import BlogsData from './BlogsData';
import BlogsCard from './BlogsCard';
function Blogs() {
  return (
    <div>
      <div className='title-and-link flex flex-row justify-between border-b border-gray-300 pb-4 mb-20'>
          <h1 className='mt-8 text-left text-nav-bg-color pl-10 text-3xl font-bold'>Blogs: Patient and Expert Contributors</h1>
          <a className='mt-12 text-blue-500 pr-5' href='https://www.webmd.com/'>See all</a>
      </div>
      <div className='justify-between flex flex-col md:flex-row md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {BlogsData.map(card => (
          <BlogsCard card={card} key={card.link}/>
        ))}
      </div>
    </div>
  );
}

export default Blogs;