//Improvements:
//1. The sm navbar needs to be sticky


import React, { useState } from 'react';
import SvgComponent from './images/WebMDLogoWhite';
import {AiOutlineClose, AiOutlineMenu, AiOutlineMail, AiOutlineSearch} from 'react-icons/ai';
import {IoIosArrowDown, IoIosArrowUp, IoIosArrowBack, IoIosArrowForward} from 'react-icons/io';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
const NavBar = () => {
  /*Can't do an array because  the types of buttons are in different positions along the navbar*/

  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }
  //Note: we initially set nav to false. but when HandleNav is activated, it sets nav to the opposite of it's initial value, so nav becomes true

  //I could use a unique useState function for all hover menus, but there could possibly be a more efficient way to write less code. Maybe use map function

  //Search Section:

  const [search, setSearch] = useState(false)

  const handleSearch = () => {
    setSearch(!search)
  }

  // "Conditions" section:
  let [hoverConditions, setHoverConditions] = useState(false)

  let handleHoverConditions = () => {
    setHoverConditions(!hoverConditions)
  }

  let conditionsLinks = [
    {name: 'ADD/ADHD', href: 'https://www.webmd.com/add-adhd/default.htm', link: ''},
    {name: 'Depression', href: 'https://www.webmd.com/depression/default.htm', link: ''},
    {name: 'Lung Disease', href: 'https://www.webmd.com/lung/default.htm', link: ''},
    {name: 'Psoriatic Arthritis', href: 'https://www.webmd.com/arthritis/psoriatic-arthritis/default.htm', link: ''},
    {name: 'Allergies', href: 'https://www.webmd.com/allergies/default.htm', link: ''},
    {name: 'Diabetes', href: 'https://www.webmd.com/diabetes/default.htm', link: ''},
    {name: 'Lupus', href: 'https://www.webmd.com/lupus/default.htm', link: ''},
    {name: 'Rheumatoid Arthritis', href: 'https://www.webmd.com/rheumatoid-arthritis/default.htm', link: ''},
    {name: 'Arthritis', href: 'https://www.webmd.com/add-adhd/default.htm', link: ''},
    {name: 'DVT', href: 'https://www.webmd.com/dvt/default.htm', link: ''},
    {name: 'Mental Health', href: 'https://www.webmd.com/mental-health/default.htm', link: ''},
    {name: 'Sexual Conditions', href: 'https://www.webmd.com/sexual-conditions/default.htm', link: ''},
    {name: 'Atrial Fibrillation', href: 'https://www.webmd.com/heart-disease/atrial-fibrillation/default.htm', link: ''},
    {name: 'Eczema', href: 'https://www.webmd.com/skin-problems-and-treatments/eczema/default.htm', link: ''},
    {name: 'Multiple Sclerosis', href: 'https://www.webmd.com/multiple-sclerosis/default.htm', link: ''},
    {name: 'Skin Problems', href: 'https://www.webmd.com/skin-problems-and-treatments/default.htm', link: ''},
    {name: 'Breast Cancer', href: 'https://www.webmd.com/breast-cancer/default.htm', link: ''},
    {name: 'Eye Health', href: 'https://www.webmd.com/eye-health/default.htm', link: ''},
    {name: 'Migraine', href: 'https://www.webmd.com/migraines-headaches/default.htm', link: ''},
    {name: 'Sleep Disorders', href: 'https://www.webmd.com/sleep-disorders/default.htm', link: ''},
    {name: 'Cancer', href: 'https://www.webmd.com/cancer/default.htm', link: ''},
    {name: 'Heart Disease', href: 'https://www.webmd.com/heart-disease/default.htm', link: ''},
    {name: 'Pain Management', href: 'https://www.webmd.com/pain-management/default.htm', link: ''},
    {name: 'Ulcerative Colitis', href: 'https://www.webmd.com/ibd-crohns-disease/ulcerative-colitis/default.htm', link: ''},
    {name: "Crohn's Disease", href: 'https://www.webmd.com/ibd-crohns-disease/crohns-disease/default.htm', link: ''},
    {name: 'HIV & AIDS', href: 'https://www.webmd.com/hiv-aids/default.htm', link: ''},
    {name: 'Psoriasis', href: 'https://www.webmd.com/skin-problems-and-treatments/psoriasis/default.htm', link: ''},
  ];

  const [hoverConditionsMobile, setHoverConditionsMobile] = useState(false)

  const handleHoverConditionsMobile = () => {
    setHoverConditionsMobile(!hoverConditionsMobile)
  }

  //Drugs & Supplements Section

  let [hoverDrugs, setHoverDrugs] = useState(false)

  let handleHoverDrugs = () => {
    setHoverDrugs(!hoverDrugs)
  }

  const [hoverDrugsMobile, setHoverDrugsMobile] = useState(false)

  const handleHoverDrugsMobile = () => {
    setHoverDrugsMobile(!hoverDrugsMobile)
  }

  let drugLinks = [
    {name: 'Drugs', href: 'https://www.webmd.com/drugs/2/index', link: ''},
    {name: 'Supplements', href: 'https://www.webmd.com/vitamins/index', link: ''},
    {name: 'Pill Identifier', href: '', link: '/pill-identification'},
    {name: 'Interaction Checker', href: 'https://www.webmd.com/interaction-checker/default.htm', link: ''},
    {name: 'Find Lowest Drug Prices', href: 'https://www.webmd.com/rx', link: ''},
  ];

  //Well-being section:

  let [hoverWb, setHoverWb] = useState(false)

  let handleHoverWb = () => {
    setHoverWb(!hoverWb)
  }

  const [hoverWbMobile, setHoverWbMobile] = useState(false)

  const handleHoverWbMobile = () => {
    setHoverWbMobile(!hoverWbMobile)
  }

  let WbLinks = [
    {name: 'Aging Well', href: 'https://www.webmd.com/healthy-aging/default.htm', link: ''},
    {name: "Men's Health", href: 'https://www.webmd.com/men/default.htm', link: ''},
    {name: 'Baby', href: 'https://www.webmd.com/parenting/baby/default.htm', link: ''},
    {name: 'Parenting', href: 'https://www.webmd.com/parenting/default.htm', link: ''},
    {name: 'Birth Control', href: 'https://www.webmd.com/sex/birth-control/default.htm', link: ''},
    {name: "Children's Health", href: 'https://www.webmd.com/children/default.htm', link: ''},
    {name: 'Pregnancy', href: 'https://www.webmd.com/baby/default.htm', link: ''},
    {name: 'Diet & Weight Management', href: 'https://www.webmd.com/diet/default.htm', link: ''},
    {name: 'Sex & Relationships', href: 'https://www.webmd.com/sex-relationships/default.htm', link: ''},
    {name: 'Fitness & Exercise', href: 'https://www.webmd.com/fitness-exercise/default.htm', link: ''},
    {name: 'Teen Health', href: 'https://teens.webmd.com/default.htm', link: ''},
    {name: 'Food & Recipes', href: 'https://www.webmd.com/food-recipes/default.htm', link: ''},
    {name: "Women's Health", href: 'https://www.webmd.com/women/default.htm', link: ''},
    {name: 'Healthy Beauty', href: 'https://www.webmd.com/beauty/default.htm', link: ''},
  ];

  //More Section

  let [hoverMore, setHoverMore] = useState(false)

  let handleHoverMore = () => {
    setHoverMore(!hoverMore)
  }


  const [hoverMoreMobile, setHoverMoreMobile] = useState(false)



  const handleMoreMobile = () => {
    setHoverMoreMobile(!hoverMoreMobile)
  }

  let MoreLinks = [
    {name: 'News', href: 'https://www.webmd.com/news/default.htm', link: ''},
    {name: "Blogs", href: 'https://blogs.webmd.com/default.htm', link: ''},
    {name: 'Podcasts', href: 'https://www.webmd.com/podcasts/default.htm', link: ''},
    {name: 'Webinars', href: 'https://www.webmd.com/webinar/default.htm', link: ''},
    {name: 'Newsletters', href: 'https://member.webmd.com/subscribe', link: ''},
    {name: "Best Hospitals", href: 'https://doctor.webmd.com/choice-awards', link: ''},
    {name: 'Support Groups', href: 'https://www.webmd.com/facebook-groups', link: ''},
    {name: 'Connect to Care', href: 'https://www.webmd.com/connect-to-care/default.htm', link: ''},
    {name: 'Surgeries & Procedures', href: 'https://www.webmd.com/a-to-z-guides/surgeries-procedures', link: ''},
    {name: 'Orthopedics', href: 'https://www.webmd.com/orthopedics/default.htm', link: ''},
  ];

  
  return (
    <div className="flex justify-between items-center h-24 w-full mx-auto px-4 bg-nav-bg-color sticky">
      <div className='flex items-center justify-center'>
        <div className='block lg:hidden' onClick={handleNav}>
          {nav ? <div className='text-webmd-bg-color mr-80'><AiOutlineClose size={30}/></div> : <div className='text-webmd-bg-color mr-80'><AiOutlineMenu size={30} /></div>}
          {/* if nav is true (which it is when handleNav is activated - i.e. when the user clicks on the section, the stuff happens) */}
        </div>

        <div className='w-20 h-20 lg:w-28 lg:h-28 mt-16 lg:mt-20'>
          <SvgComponent className='w-20 h-20 lg:w-28 lg:h-28 px-1'/>
        </div>
        {/*Need to learn how to center the SVG, but only when the width of the interface is less than lg*/}
      </div>
      
      {/*Desktop Navbar options */}
      <ul className='lg:flex lg:flex-row hidden mr-auto ml-auto '>
        <li className='p-2 text-webmd-bg-color font-semibold hover:bg-white hover:text-nav-bg-color duration-500 rounded-md flex cursor-pointer' onClick={handleHoverConditions}><p className='mr-1 font-bold py-3'>Conditions</p> 
          {hoverConditions ? <div className='mt-1 py-3'><IoIosArrowUp /></div> : <div className='mt-1 py-3'><IoIosArrowDown/></div>}
          {/*Conditions content on desktop */}
          <div className={hoverConditions ? 'fixed left-20 top-24 w-[60%] h-3/4 rounded-md bg-white ease-in-out duration-500 grid grid-cols-4' : 'fixed left-[-100%]'}>
            {
              conditionsLinks.map((link) => (
                <div>
                  <a href={link.href}><p className='text-nav-bg-color border-b border-gray-300 m-4'>{link.name}</p></a>
                </div>
              ))
            }
          </div>
        </li>
        <li className='p-2 text-webmd-bg-color font-semibold hover:bg-white hover:text-nav-bg-color duration-500 rounded-md flex cursor-pointer relative' onClick={handleHoverDrugs}><p className='mr-1 font-bold py-3'>Drugs & Supplements</p> 
          {hoverDrugs ? <div className='mt-1 py-3'><IoIosArrowUp /></div> : <div className='mt-1 py-3'><IoIosArrowDown/></div>}
          {/*Drugs content on desktop */}
          <div className={hoverDrugs ? 'fixed left-26 top-24 w-[30%] h-[35%] rounded-md bg-white transition ease-in-out duration-500' : 'fixed left-[-100%]'}>
            {
              drugLinks.map((link) => (
                  <a href={link.href}><p className='text-nav-bg-color bg-white border-b border-gray-300 m-4 '><Link to={link.link}>{link.name}</Link></p></a>
              ))
            }
            {/*Note when I add in the link, it works, but the href on the other links do not work. So only 1 or the other links work. Need to fix this later*/}
          </div>
        </li>
        <li className='p-2 text-webmd-bg-color font-semibold hover:bg-white hover:text-nav-bg-color duration-500 rounded-md flex cursor-pointer' onClick={handleHoverWb}><p className='mr-1 font-bold pt-3 pb-3'>Well-Being</p> 
          {hoverWb ? <div className='mt-1 pt-3 pb-3'><IoIosArrowUp /></div> : <div className='mt-1 pt-3 pb-3'><IoIosArrowDown/></div>}
          <div className={hoverWb ? 'fixed left-28 top-24 w-[60%] h-3/4 rounded-md bg-white ease-in-out duration-500 grid grid-cols-2' : 'fixed left-[-100%]'}>
            {
              WbLinks.map((link) => (
                <div>
                  <a href={link.href}><p className='text-nav-bg-color border-b border-gray-300 m-4'>{link.name}</p></a>
                </div>
              ))
            }
          </div>
        </li>
        <li className='p-2 text-webmd-bg-color font-semibold hover:bg-white hover:text-nav-bg-color duration-500 rounded-md flex cursor-pointer' onClick={() => {window.open('https://symptoms.webmd.com/', "_blank");}}><p className='mr-1 font-bold pt-3 pb-3'>Symptom Checker</p> 
        </li>
        <li className={search ? 'hidden' : 'p-2 text-webmd-bg-color font-semibold hover:bg-white hover:text-nav-bg-color duration-500 rounded-md flex cursor-pointer'}><p className='mr-1 font-bold py-3'><Link to="/doctor">Find A Doctor</Link></p> 
        </li>
        <li className={search ? 'hidden' : 'p-2 text-webmd-bg-color font-semibold hover:bg-white hover:text-nav-bg-color duration-500 rounded-md flex cursor-pointer'} onClick={handleHoverMore}><p className='mr-1 py-3 font-bold'>More</p> 
          {hoverMore ? <div className='mt-1 py-3'><IoIosArrowUp /></div> : <div className='mt-1 py-3'><IoIosArrowDown/></div>}
          <div className={hoverMore ? 'fixed right-20 top-24 w-[30%] h-3/4 rounded-md bg-white ease-in-out duration-500' : 'fixed left-[-100%]'}>
            {
              MoreLinks.map((link) => (
                <div>
                  <a href={link.href}><p className='text-nav-bg-color border-b border-gray-300 m-4'>{link.name}</p></a>
                </div>
              ))
            }
          </div>
        </li>
        <div className={search ? 'hidden' : 'border-r-2 border-webmd-bg-color px-2 mr-4'}>{/* This div with no content is used to make the vertical and horizontal border designs */}</div>
        <li className={search ? 'hidden' : 'px-2 py-5  flex text-webmd-bg-color border-2 border-webmd-bg-color rounded-md cursor-pointer'} onClick={() => {window.open('https://member.webmd.com/signin?appid=1&returl=https%3A%2F%2Fwww.webmd.com%2Fdefault.htm', "_blank");}}><div className='mt-1 pr-1'><AiOutlineMail/></div> Subscribe</li>
        <li className={search ? 'hidden': 'p-5 ml-2 text-webmd-bg-color font-bold cursor-pointer'} onClick={() => {window.open('https://member.webmd.com/signin?appid=1&returl=https%3A%2F%2Fwww.webmd.com', "_blank");}}>Log In</li>
        <form className={search ? 'p-2 w-80' : 'hidden'}>
          <div className='flex flex-row'>
            <input className='gap-1 px-3 h-12 mb-1 w-full' placeholder='Search WebMD'></input>
            <div className='bg-white border-4 border-white h-12 '>
              <button className='cursor-pointer bg-button-color text-webmd-bg-color rounded-md px-2 h-10'>Search</button>
            </div>
          </div>
        </form>
        
      </ul>
      <div className={nav ? 'hidden' : 'text-webmd-bg-color text-3xl mt-1 cursor-pointer pl-2'} onClick={handleSearch}>{search ? <div className='mt-1'><AiOutlineClose size={20}/></div> : <AiOutlineSearch />}</div>


      {/*Major sections on Mobile */}
      <div className={nav ? 'fixed left-0 top-24 w-96 h-full border-r  bg-gray-100 ease-in-out duration-500 lg:hidden' : 'fixed left-[-100%]'}>
        <form className='py-2 pl-4 w-90 mt-3'>
          <div className='flex flex-row'>
            <input className='gap-1 px-3 h-12 mb-1 w-full' placeholder='Search WebMD'></input>
            <div className='bg-white border-4 border-white h-12 '>
                <button className='cursor-pointer bg-button-color text-webmd-bg-color rounded-md px-2 h-10'>Search</button>
            </div>
          </div>
        </form>
        <ul className='p-4'>
          <li className='bg-webmd-bg-color p-2 border-b border-gray-300 rounded-md font-extrabold cursor-pointer text-left' onClick={handleNav}><Link to='/'>Home</Link></li>
          <li className='bg-webmd-bg-color p-2 border-b border-gray-300 rounded-md font-extrabold cursor-pointer text-left flex' onClick={handleHoverConditionsMobile}>Conditions <div className="ml-52 text-2xl"><IoIosArrowForward/></div>
          </li>
            {/*Condition content on mobile 
              Need to code a vertical scrollbar */}
            <div className={hoverConditionsMobile ? 'fixed left-0 top-24 w-300 h-full rounded-md bg-white ease-in-out duration-500 lg:hidden' : 'fixed left-[-100%]'}>
              <Scrollbars style={{width: 400, height: 550}}>
                <div className='flex flex-row p-2'><div className='text-blue-500 mt-1'><IoIosArrowBack/></div> <p className='text-left cursor-pointer text-blue-500' onClick={handleHoverConditionsMobile}>Back </p></div>
                <h1 className='border-b border-gray-300 text-2xl font-bold text-left px-4 py-2 cursor-pointer'>Conditions</h1>
                {
                  conditionsLinks.map((link) => (
                    <div className='text-left mt-3 px-4 hover:text-blue-500'><a href={link.href}>{link.name}</a></div>
                  ))
                }
              </Scrollbars>
            </div>
          <li className='bg-webmd-bg-color p-2 border-b border-gray-300 rounded-md font-extrabold cursor-pointer text-left flex' onClick={handleHoverDrugsMobile}>Drugs & Supplements <div className="text-2xl ml-32"><IoIosArrowForward/></div></li>
            
            <div className={hoverDrugsMobile ? 'fixed left-0 top-24 w-300 h-full rounded-md bg-white ease-in-out duration-500 lg:hidden' : 'fixed left-[-100%]'}>
              <Scrollbars style={{width: 400, height: 550}}>
              <div className='flex flex-row p-2'><div className='text-blue-500 mt-1'><IoIosArrowBack/></div> <p className='text-left  text-blue-500' onClick={handleHoverDrugsMobile}>Back </p></div>
                <h1 className='border-b border-gray-300 text-2xl font-bold text-left px-4 py-2'>Drugs & Supplements</h1>
                {
                  drugLinks.map((link) => (
                    <div className='text-left mt-3 px-4 hover:text-blue-500'><a href={link.href}><Link to={link.link}>{link.name}</Link></a></div>
                  ))
                }
              </Scrollbars>
            </div>
          <li className='bg-webmd-bg-color p-2 border-b border-gray-300 rounded-md font-extrabold cursor-pointer text-left flex' onClick={handleHoverWbMobile}>Well-Being<div className="ml-52 text-2xl"><IoIosArrowForward/></div></li>
            <div className={hoverWbMobile ? 'fixed left-0 top-24 w-300 h-full rounded-md bg-white ease-in-out duration-500 lg:hidden' : 'fixed left-[-100%]'}>
                <Scrollbars style={{width: 400, height: 550}}>
                  <div className='flex flex-row p-2'><div className='text-blue-500 mt-1'><IoIosArrowBack/></div> <p className='text-left cursor-pointer text-blue-500' onClick={handleHoverWbMobile}>Back </p></div>
                  <h1 className='border-b border-gray-300 text-2xl font-bold text-left px-4 py-2'>Well-Being</h1>
                  {
                    WbLinks.map((link) => (
                      <div className='text-left mt-3 px-4 hover:text-blue-500'><a href={link.href}>{link.name}</a></div>
                    ))
                  }
                </Scrollbars>
              </div>
          <li className='bg-webmd-bg-color p-2 border-b border-gray-300 rounded-md font-extrabold cursor-pointer text-left'>Symptom Checker</li>
          <li className='bg-webmd-bg-color p-2 border-b border-gray-300 rounded-md font-extrabold cursor-pointer text-left'>Find a Doctor</li>
          <li className='bg-webmd-bg-color p-2 border-b border-gray-300 rounded-md font-extrabold cursor-pointer text-left flex' onClick={handleMoreMobile}>More <div className="ml-64 text-2xl"><IoIosArrowForward/></div></li>
                  {/*Need to align the arrows consistently in the future */}
            <div className={hoverMoreMobile ? 'fixed left-0 top-24 w-300 h-full rounded-md bg-white ease-in-out duration-500 lg:hidden' : 'fixed left-[-100%]'}>
              <Scrollbars style={{width: 400, height: 550}}>
              <div className='flex flex-row p-2'><div className='text-blue-500 mt-1'><IoIosArrowBack/></div> <p className='text-left  text-blue-500' onClick={handleMoreMobile}>Back </p></div>
                <h1 className='border-b border-gray-300 text-2xl font-bold text-left px-4 py-2'>More</h1>
                {
                  MoreLinks.map((link) => (
                    <div className='text-left mt-3 px-4 hover:text-blue-500'><a href={link.href}><Link to={link.link}>{link.name}</Link></a></div>
                  ))
                }
              </Scrollbars>
            </div>
          
          <li className='bg-webmd-bg-color p-2 rounded-md font-extrabold cursor-pointer text-left'>Privacy & More</li>
        </ul>
        
        <div className='flex ml-3'>
          <div className='px-2 pt-1 pb-2 flex text-blue-500 border-2 border-blue-500 rounded-md cursor-pointer' onClick={() => {window.open('https://member.webmd.com/signin?appid=1&returl=https%3A%2F%2Fwww.webmd.com%2Fdefault.htm', "_blank");}}><div className='mt-1 pr-1'><AiOutlineMail/></div> Subscribe</div>
          <div className='p-2 ml-2 text-blue-500 font-semibold cursor-pointer' onClick={() => {window.open('https://member.webmd.com/signin?appid=1&returl=https%3A%2F%2Fwww.webmd.com', "_blank");}}>Log In</div>
        </div>
      </div>
    </div>
    
  );
}

export default NavBar;