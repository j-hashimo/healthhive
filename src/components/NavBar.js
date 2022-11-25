import React, { useState } from 'react';
import SvgComponent from './images/WebMDLogo';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
const NavBar = () => {
  /*Can't do an array because  the types of buttons are in different positions along the navbar*/
  let [open, setOpen] = useState(false);
  return (
    <div className="NavbarItem shadow-md w-full top-0 left-0">
      <div className="md:flex bg-nav-bg-color py-4 md:px-10 px-7 items-center justify-between h-18">
        <div onClick={()=>setOpen(!open)} className="text-3xl absolute right-8 top-3 cursor-pointer md:hidden text-white">
          <i class={open ? 'fa-solid fa-xmark': 'fa-solid fa-bars justify-center items-center mt-6'}></i>
        </div>
        <SvgComponent className='w-24 h-20 md:h-32 md:w-32'/>
        
        {/*from useState, open is initially set to false, and setopen reverses whatever open initially is. So if you click the hamburger icon initially, it will set open is true. When open is true - x mark appears with when navbar is clicked and open, and becomes hamburger when not*/}
        {/*As for the navbar list, if open - i.e. if the button is clicked, it is visible, if enlarged, it goes invisible due to z-index, and if not open (i.e. no button clicked) it moves off of the screen view due to negative pixel value. We can insert this operator with {} into the classname because we used string interpolation with ` `*/}
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static left-0 w-full md:w-auto md:z-auto z-[-1] md:bg-transparent md:pl-0 pl-9 sm:bg-blue-500 transition-all ease-in-out ${open ? ' opacity-100 mt-4': 'top-[-490px]'} md:opacity-100`}>
            
          <li className='md:ml-8 text-xl md:my-0 my-7'>
            <p className="text-gray-200 hover:text-white duration-500">Conditions</p>
          </li>

          <li className='md:ml-8 text-xl md:my-0 my-7 hover:bg-white duration-500 rounded-md py-2 px-2'>
            <p className="text-gray-200 hover:text-nav-bg-color duration-500">Drugs & Supplements</p>
          </li>
              
          <li className='md:ml-8 text-xl md:my-0 my-7'>
            <p className="text-gray-200 hover:text-white duration-500">Well-Being</p>
          </li>

          <li className='md:ml-8 text-xl md:my-0 my-7'>
            <p className="text-gray-200 hover:text-white duration-500">Symptom Checker</p>
          </li>

          <li className='md:ml-8 text-xl md:my-0 my-7'>
            <p className="text-gray-200 hover:text-white duration-500">Find a Doctor</p>
          </li>

          <li className='md:ml-8 text-xl md:my-0 my-7'>
            <p className="text-gray-200 hover:text-white duration-500">More</p>
          </li>

          <li className='md:ml-8 text-xl md:my-0 my-7'>
            <p className="text-gray-200 hover:text-white duration-500">Subscribe</p>
          </li>

          <li className='md:ml-8 text-xl md:my-0 my-7'>
            <p className="text-gray-200 hover:text-white duration-500">Log In</p>
          </li>

          {/* */}
        </ul>
        
      </div>
      
    </div>
    
  );
}

export default NavBar;