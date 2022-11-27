import React from 'react';
import Footer from './Footer';
import NavBar from './NavBar';

function FindADoctor() {
  return (
    <div>
      <NavBar/>
      <div className='background'>
        <section className='search-card flex flex-col'>
          <i/>
          <h1></h1>
          <input/>
          <input/>
          <button></button>
        </section>
        <section className='browse-cards flex flex-row'>
          <div className='browse-card flex flex-col'>
            <img/>
            <h3></h3>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
            <div className='flex'>
              <a/>
              <i/>
            </div>
          </div>
          <div className='browse-card flex flex-col'>
            <img/>
            <h3></h3>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
            <div className='flex'>
              <a/>
              <i/>
            </div>
          </div>
          <div className='browse-card flex flex-col'>
            <img/>
            <h3></h3>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
            <div className='flex'>
              <a/>
              <i/>
            </div>
          </div>
        </section>
        <section className='about flex flex-col'>
          <h1></h1>
          <p></p>
        </section>

        <section className='by-location flex flex-col'>
          <img/>
          <h1></h1>
          <div className='grid'>
            <button></button>
            <button></button>
            <button></button>
          </div>
          <div className='flex'>
            <a></a>
            <i/>
          </div>
        </section>
        <div className='dropdown'></div>
      </div>
      <Footer/>
    </div>
  );
}

export default FindADoctor;