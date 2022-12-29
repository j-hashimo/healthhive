import React from 'react';
import {FaFacebookF, FaTwitter, FaInstagram, FaTiktok} from 'react-icons/fa';
import AppStore from './images/AppStore.png';
import GooglePlay from './images/GooglePlayIcon.png';
function SocialMedia() {
  return (
    <section>
        <div className='grid flex-col lg:flex-row grid-cols-2 gap-6 mb-10'>
          <div className='flex flex-col items-center text-center justify-center px-12 py-6 bg-white rounded-md'>
            <h1 className='text-2xl text-gray-800'>Follow WebMD on Social Media</h1>
            <div className='flex grid grid-cols-4 gap-10 text-button-color mt-6'>
              <a href='https://www.facebook.com/WebMD/'><FaFacebookF size={30}/></a>
              <FaTwitter size={30}/>
              <FaInstagram size={30}/>
              <FaTiktok size={30}/>
            </div>
          </div>
          <div className='flex flex-col items-center text-center justify-center px-12 py-6 bg-white rounded-md'>
            <h1 className='text-2xl text-gray-800'>Download WebMD App</h1>
            <div className='flex grid grid-cols-2 gap-10 mt-6'>
              <img className='' src={AppStore} alt='Download on the Apple App Store' />
              <img src={GooglePlay} alt='Get it on Google Play' />
            </div>
          </div>
        </div>
      </section>
  );
}

export default SocialMedia;