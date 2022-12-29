import React, {useState} from 'react';
import {FaFacebookF, FaTwitter, FaPinterest} from 'react-icons/fa';
import Seal from './images/seal.png';
import HONConduct from './images/HONConduct.png';
import TagRegistered from './images/tag-registered.png';
import SvgComponent from './images/WebMDLogo.jsx';

//Note: only completed the policy section, just repeat the same for the other sections
//And the section needs to be responsive
function Footer() {
  const [policy, setPolicy] = useState(false)

  const handlePolicy = () => {
    setPolicy(!policy)
  }

  let PolicyLinks = [
    {name: 'Private Policy', href: 'https://www.webmd.com/about-webmd-policies/about-privacy-policy'},
    {name: 'Cookie Policy', href: 'https://www.webmd.com/about-webmd-policies/cookie-policy'},
    {name: 'Editorial Policy', href: 'https://www.webmd.com/about-webmd-policies/about-editorial-policy'},
    {name: 'Advertising Policy', href: 'https://www.webmd.com/about-webmd-policies/about-advertising-policy'},
    {name: 'Correction Policy', href: 'https://www.webmd.com/about-webmd-policies/webmd-corrections-policies'},
    {name: 'Terms of Use', href: 'https://www.webmd.com/about-webmd-policies/about-terms-and-conditions-of-use'},
  ];

  const [about, setAbout] = useState(false)

  const handleAbout = () => {
    setAbout(!about)
  }

  let AboutLinks = [
    {name: 'About', href: 'https://www.webmd.com/about-webmd-policies/about-privacy-policy'},
    {name: 'Cookie Policy', href: 'https://www.webmd.com/about-webmd-policies/cookie-policy'},
    {name: 'Editorial Policy', href: 'https://www.webmd.com/about-webmd-policies/about-editorial-policy'},
    {name: 'Advertising Policy', href: 'https://www.webmd.com/about-webmd-policies/about-advertising-policy'},
    {name: 'Correction Policy', href: 'https://www.webmd.com/about-webmd-policies/webmd-corrections-policies'},
    {name: 'Terms of Use', href: 'https://www.webmd.com/about-webmd-policies/about-terms-and-conditions-of-use'},
  ];

  const [network, setNetwork] = useState(false)

  const handleNetwork = () => {
    setNetwork(!network)
  }

  let NetworkLinks = [
    {name: 'Network', href: 'https://www.webmd.com/about-webmd-policies/about-privacy-policy'},
    {name: 'Cookie Policy', href: 'https://www.webmd.com/about-webmd-policies/cookie-policy'},
    {name: 'Editorial Policy', href: 'https://www.webmd.com/about-webmd-policies/about-editorial-policy'},
    {name: 'Advertising Policy', href: 'https://www.webmd.com/about-webmd-policies/about-advertising-policy'},
    {name: 'Correction Policy', href: 'https://www.webmd.com/about-webmd-policies/webmd-corrections-policies'},
    {name: 'Terms of Use', href: 'https://www.webmd.com/about-webmd-policies/about-terms-and-conditions-of-use'},
  ];

  const [apps, setApps] = useState(false)

  const handleApps = () => {
    setApps(!apps)
  }

  let AppsLinks = [
    {name: 'Apps', href: 'https://www.webmd.com/about-webmd-policies/about-privacy-policy'},
    {name: 'Cookie Policy', href: 'https://www.webmd.com/about-webmd-policies/cookie-policy'},
    {name: 'Editorial Policy', href: 'https://www.webmd.com/about-webmd-policies/about-editorial-policy'},
    {name: 'Advertising Policy', href: 'https://www.webmd.com/about-webmd-policies/about-advertising-policy'},
    {name: 'Correction Policy', href: 'https://www.webmd.com/about-webmd-policies/webmd-corrections-policies'},
    {name: 'Terms of Use', href: 'https://www.webmd.com/about-webmd-policies/about-terms-and-conditions-of-use'},
  ];

  const [ads, setAds] = useState(false)

  const handleAds = () => {
    setAds(!ads)
  }

  let AdsLinks = [
    {name: 'Ads', href: 'https://www.webmd.com/about-webmd-policies/about-privacy-policy'},
    {name: 'Cookie Policy', href: 'https://www.webmd.com/about-webmd-policies/cookie-policy'},
    {name: 'Editorial Policy', href: 'https://www.webmd.com/about-webmd-policies/about-editorial-policy'},
    {name: 'AdverdagsdffsdPolicy', href: 'https://www.webmd.com/about-webmd-policies/about-advertising-policy'},
    {name: 'Correction Policy', href: 'https://www.webmd.com/about-webmd-policies/webmd-corrections-policies'},
    {name: 'Terms of Use', href: 'https://www.webmd.com/about-webmd-policies/about-terms-and-conditions-of-use'},
  ];


  return (
    <div>
      <section className='bg-nav-bg-color policies border-t-8 border-button-color relative'>
        <div className='flex grid-cols-6 gap-6 border-b border-webmd-bg-color pb-4'>
          <ul  className='flex ml-7 grid grid-cols-5 gap-6'>
            <li onClick={handlePolicy} className={policy ? 'p-2 text-webmd-bg-color font-medium border-b-4 border-webmd-bg-color' : 'p-2 text-webmd-bg-color font-medium'}>Policies</li>
            <li onClick={handleAbout} className={about ? 'p-2 text-webmd-bg-color font-medium border-b-4 border-webmd-bg-color' : 'p-2 text-webmd-bg-color font-medium'}>About</li>
            <li onClick={handleNetwork} className={network ? 'p-2 text-webmd-bg-color font-medium border-b-4 border-webmd-bg-color' : 'p-2 text-webmd-bg-color font-medium'}>WebMD Network</li>
            <li onClick={handleApps} className={apps ? 'p-2 text-webmd-bg-color font-medium border-b-4 border-webmd-bg-color' : 'p-2 text-webmd-bg-color font-medium'}>Our Apps</li>
            <li onClick={handleAds} className={ads ? 'p-2 text-webmd-bg-color font-medium border-b-4 border-webmd-bg-color' : 'p-2 text-webmd-bg-color font-medium'}>For Advertisers</li>
          </ul>
          
          <div className='flex grid grid-cols-6 gap-10 pr-10 ml-20 lg:ml-40 pt-2 mt-2'>
            <div className='text-webmd-bg-color mr-2'><FaFacebookF size={30}/> </div>
            <div className='text-webmd-bg-color mr-2'><FaTwitter size={30}/> </div>
            <div className='text-webmd-bg-color'><FaPinterest size={30}/> </div>
            
          </div>
        </div>
          {/* <div className='flex justify-center items-center'>*/}
          
          <div className='flex md:flex-row gap-6 bottom-32 right-0 absolute mx-20 pb-20 w-auto'>
            <img className='' src={Seal} alt='Seal' />
            <img src={HONConduct} alt='HONConduct' />
            <img src={TagRegistered} alt='TagRegistered' />
          </div>
        

        <div className='flex justify-between border-t border-webmd-bg-color grid grid-cols-2 gap-1 justify-center items-center mt-96'>
          <p className='text-webmd-bg-color text-sm p-2'>© 2005 - 2022 WebMD LLC. All rights reserved. WebMD does not provide medical advice, diagnosis or treatment. <span className='underline cursor-pointer' onClick={() => {window.open('https://www.webmd.com/about-webmd-policies/additional-info', "_blank");}}> See additional information.</span></p>
          
          <SvgComponent className='w-20 h-20 mx-96'/>
        </div>
        
      </section>

      
    </div>
  );
}

export default Footer;