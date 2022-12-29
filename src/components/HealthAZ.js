import React from 'react'
import HealthAZLinks from './HealthAZLinks';
import { AiOutlineArrowRight } from 'react-icons/ai';
function HealthAZ() {
  return (
    <section className='items-center justify-center'>
      <div className='title-and-link flex flex-row justify-between border-b border-gray-300 pb-4 mb-20'>
        <h1 className='mt-8 text-left text-nav-bg-color pl-10 text-3xl font-bold'>Health A-Z</h1>
        <a className='mt-12 text-blue-500 pr-5' href='https://www.webmd.com/'>See all</a>
      </div>

      <div className='px-5 mx-5 rounded-sm bg-white grid grid-cols-4 mb-10'>
        {
          HealthAZLinks.map((link) => (
            <div className='flex'>
                <div className='text-blue-500 mt-5'><AiOutlineArrowRight/></div>
                <a href={link.href}><p className='text-nav-bg-color border-b border-gray-300 m-4'>{link.name}</p></a>
              </div>
            ))
          }
        </div>
      </section>
  )
}

export default HealthAZ