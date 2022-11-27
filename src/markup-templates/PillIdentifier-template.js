import React from 'react';
import Footer from './Footer';
import MenuBar from './MenuBar';

function PillIdentifier() {
  return (
    <div>
      <MenuBar/>
      <div className='banner flex flex-row'>
        <h1></h1>
        <p></p>
      </div>

      <div className='input-card flex flex-col'>
        <div className='input-card flex flex-row'>
          <input></input>
          <input></input>
          <input></input>
          <button></button>
        </div>
        <div className='input-card flex flex-row'>
          <a></a>
          <a></a>
        </div>
      </div>

      <div className='body flex flex-row'>
        <div className='left-body flex flex-col'>
          <section className='drugs-resources flex flex-col'>
            <h1></h1>
            <div className='icons flex flex-row'>
              <div className='flex flex-col'>
                <img></img>
                <p></p>
              </div>
              <div className='flex flex-col'>
                <img></img>
                <p></p>
              </div>
              <div className='flex flex-col'>
                <img></img>
                <p></p>
              </div>
              <div className='flex flex-col'>
                <img></img>
                <p></p>
              </div>
              <div className='flex flex-col'>
                <img></img>
                <p></p>
              </div>
              <div className='flex flex-col'>
                <img></img>
                <p></p>
              </div>
            </div>
          </section>
          <section className='commonly-searched-pills flex flex-col'>
            <h1></h1>
            <div className='grid'>
              <div className='card flex flex-col'>
                <img></img>
                <h2></h2>
                <p></p>
                <p></p>
                <button></button>
              </div>
              <div className='card flex flex-col'>
                <img></img>
                <h2></h2>
                <p></p>
                <p></p>
                <button></button>
              </div>
              <div className='card flex flex-col'>
                <img></img>
                <h2></h2>
                <p></p>
                <p></p>
                <button></button>
              </div>
            </div>
            <button></button>
          </section>


          <section className='identify-pill flex flex-col'>
            <h1></h1>
            <p></p>
            <p></p>
            <div className='dropdown-option'>
              {/*restructure once I get to it */}
              <i/>
              <h3></h3>
            </div>
            <a></a>
          </section>
          <section className='prescription flex flex-col'>
            <h1></h1>
            <p></p>
            <a></a>
          </section>
          <section className='latest-news'>
            <div className='grid'>
              <div className='flex flex-col'>
                <h1></h1>
                <p></p>
              </div>
              <div className='flex flex-col'>
                <h1></h1>
                <p></p>
              </div>
            </div>
            <button></button>
          </section>
        </div>
        <div className='news flex flex-col'>
          <h1></h1>
          <div className='article flex flex-row'>
            <img></img>
            <div className='flex flex-col'>
              <h1></h1>
              <p></p>
            </div>
          </div>
          <div className='article flex flex-row'>
            <img></img>
            <div className='flex flex-col'>
              <h1></h1>
              <p></p>
            </div>
          </div>
          <div className='article flex flex-row'>
            <img></img>
            <div className='flex flex-col'>
              <h1></h1>
              <p></p>
            </div>
          </div>
        </div>
      </div>

      <section className='more-from-webmd'>
        <div className='flex flex-row'>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default PillIdentifier;