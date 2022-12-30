import React from 'react';
import Envelope from './images/envelop.png';
function Newsletter() {
  return (
    <div class="flex flex-row  text-center justify-center">
          <div class="flex bg-nav-bg-color mt-11 mb-11 px-11 py-2 justify-between rounded-md w-full mx-5">
            <div class="flex flex-col justify-center mr-36">
              <h3 class="text-hero-secondary font-semibold mt-2 text-2xl text-webmd-bg-color text-left">Free HealthHive Newsletters</h3>
              <p class="text-left text-webmd-bg-color">Doctor-approved health and wellness information delivered to your inbox.</p>
              <div className='checkbox flex mt-6 justify-between'>
                <div className='checkbox flex'>
                  <input type="checkbox" id="checkbox1" className="h-6 w-6 rounded-md">
                  </input>
                  <label for="checkbox1" className="text-webmd-bg-color text-left ml-2">Daily Updates</label>
                </div>
                <div className='checkbox flex'>
                  <input type="checkbox" id="checkbox2" className="h-6 w-6 rounded-md">
                  </input>
                  <label for="checkbox2" className="text-webmd-bg-color text-left ml-2">Women's Health</label>
                </div>
                <div className='checkbox flex'>
                  <input type="checkbox" id="checkbox3" className="h-6 w-6 rounded-md">
                  </input>
                  <label for="checkbox3" className="text-webmd-bg-color text-left ml-2">Good Health</label>
                </div>
              </div>
              <div className='flex flex-row mt-6'>
                <input className='gap-1 px-3 h-12 mb-1 w-full' placeholder='Enter your email'></input>
                <div className=' h-12'>
                  <button className='cursor-pointer bg-grAy  px-2 h-full uppercase font-semibold text-gray-500'>Subscribe</button>
                </div>
              </div>
              <div>
                <p class="text-left text-webmd-bg-color text-xs py-4">By clicking Subscribe, I agree to the HealthHive <span className='cursor-pointer underline' onClick={() => {window.open('https://www.webmd.com/about-webmd-policies/about-terms-and-conditions-of-use', "_blank");}}>Terms & Conditions</span> and <span className='cursor-pointer underline' onClick={() => {window.open('https://www.webmd.com/about-webmd-policies/about-privacy-policy', "_blank");}}>Privacy Policy</span> and understand that I may opt out of HealthHive subscriptions at any time.</p>
              </div>
              <div>
                <p class="text-left text-webmd-bg-color underline font-bold py-4">See All HealthHive Newsletters</p>
              </div>
              
            </div>
            <img className='hidden lg:w-auto lg:h-auto lg:block' src={Envelope} alt='Envelope'/>
          </div>
        </div>
  );
}

export default Newsletter;