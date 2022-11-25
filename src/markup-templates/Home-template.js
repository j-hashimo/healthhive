import React from 'react';

function Hometemplate() {
  return (
    <div>
      <section className='top-stories'>
        <h3>Today's Top Stories</h3>
        {/*See medimouse website for border design */}
        <div className='headline flex flex-row'>
          <img alt='headline' />
          <div className='headline-text flex flex-col'>
            <h1>Placeholder Title</h1>
            <p></p>
          </div>
        </div>
      </section>

      <section className='articles flex flex-row'>
        <div className='article flex flex-row'>
          <img alt='headline' />
          <h2>Title</h2>
        </div>

        <div className='article flex flex-row'>
          <img alt='headline' />
          <h2>Title</h2>
        </div>

        <div className='article flex flex-row'>
          <img alt='headline' />
          <h2>Title</h2>
        </div>
      </section>

      <section className='living-healthy'>
        <div className='title-and-link flex flex-row'>
          <h1>Title</h1>
          <a href='https://www.webmd.com/'>See all</a>
        </div>
        <div className='images flex flex-row'>
          <img alt='headline'>
            <h1>Placeholder Title</h1>
          </img>
          <img alt='headline'>
            <h1>Placeholder Title</h1>
          </img>
          <img alt='headline'>
            <h1>Placeholder Title</h1>
          </img>
          <img alt='headline'>
            <h1>Placeholder Title</h1>
          </img>
          <img alt='headline'>
            <h1>Placeholder Title</h1>
          </img>
        </div>
      </section>

      <section className='health news'>
        <h3>Today's Top Stories</h3>
        {/*See medimouse website for border design */}
        <div className='headline flex flex-row'>
          <img alt='headline' />
          <div className='headline-text flex flex-col'>
            <h1>Placeholder Title</h1>
            <p></p>
          </div>
        </div>
      </section>

      <section className='health-news-articles flex flex-row'>
        <div className='article flex flex-row'>
          
          <h2>Placeholder Title</h2>
        </div>

        <div className='article flex flex-row'>
          
          <h2>Placeholder Title</h2>
        </div>

        <div className='article flex flex-row'>
          
          <h2>Placeholder Title</h2>
        </div>
      </section>

      <section className='expert-insights flex flex-col'>
        <div className='author flex'>
          <img alt='headline'/>
          <div className='author-info flex flex-col'>
            <h2>Placeholder Title</h2>
            <h1>Placeholder Title</h1>
            <h2>Placeholder Title</h2>
          </div>
        </div>
        <div className='flex'>
          <div className='flex flex-col'>
            <a href='https://www.webmd.com/'><img alt='placeholder'/>Link</a>
            <h1>Placeholder Title</h1>
            <p></p>
          </div>
          <div className='flex flex-col'>
            <div className='flex flex-row'>
              <img alt='headline'></img>
              <h1>Placeholder Title</h1>
            </div>
          </div>
          <div className='flex flex-col'>
            <div className='flex flex-row'>
              <img alt='headline'></img>
              <h1>Placeholder Title</h1>
            </div>
          </div>
          <div className='flex flex-col'>
            <div className='flex flex-row'>
              <img alt='headline'></img>
              <h1>Placeholder Title</h1>
            </div>
          </div>
          <div className='flex flex-col'>
            <div className='flex flex-row'>
              <img alt='headline'></img>
              <h1>Placeholder Title</h1>
            </div>
          </div>
        </div>
      </section>

      <section className='special-section'>
        <h1>Placeholder Title</h1>
        <a href='https://www.webmd.com/'>Link</a>
        <div className='flex flex-row'>
          <div className='author-info flex flex-col'>
            <button></button>
            <h1>Placeholder Title</h1>
            <p></p>
          </div>
          <div className='author-info flex flex-col'>
            <button></button>
            <h1>Placeholder Title</h1>
            <p></p>
          </div>
          <div className='author-info flex flex-col'>
            <button></button>
            <h1>Placeholder Title</h1>
            <p></p>
          </div>
        </div>
      </section>

      <section className='trending topics'>
        <h1>Placeholder Title</h1>
        <div className='topic-button-grid'>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
        </div>
      </section>

      <section className='featured-stories'>
        <h1>Placeholder Title</h1>
        <div className='cards flex flex-row'>
          <div className='card flex flex-col'>
            <img alt='headline'/>
            <h1>Placeholder Title</h1>
            <p></p>
          </div>
          <div className='card flex flex-col'>
            <img alt='headline'/>
            <h1>Placeholder Title</h1>
            <p></p>
          </div>
          <div className='card flex flex-col'>
            <img alt='headline'/>
            <h1>Placeholder Title</h1>
            <p></p>
          </div>
        </div>
      </section>

      <section className='newsletters'>
        <div className='flex flex-row'>
          <div className='flex flex-col'>
            <h1>Title</h1>
            <p></p>
            <div className='checkbox flex flex-row'>
              <input></input>
              <p></p>
              <input></input>
              <p></p>
              <input></input>
              <p></p>
            </div>
            <div className='email flex flex-row'>
              <input></input>
              <button></button>
            </div>
            <p></p>
            <a href='https://www.webmd.com/'>Link</a>
          </div>
          <img alt='headline'/>
        </div>
        {/*For padding, see the bottom section of the "header page" project*/}
      </section>

      <section className='blogs'>
        <h1>Placeholder Title</h1>
        <div className='cards flex flex-row'>
          <div className='card flex flex-col'>
            <img alt='headline'><button></button></img>
            <h1>Placeholder Title</h1>
            <p></p>
            <p></p>
          </div>
          <div className='card flex flex-col'>
            <img alt='headline'><button></button></img>
            <h1>Placeholder Title</h1>
            <p></p>
            <p></p>
          </div>
          <div className='card flex flex-col'>
            <img alt='headline'><button></button></img>
            <h1>Placeholder Title</h1>
            <p></p>
            <p></p>
          </div>
        </div>
      </section>

      <section className='tools'>
        <div>{/*see medimouse tools */}</div>
        <div className='flex flex-row'>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
        </div>
      </section>

      <section className='health-a-z'>
        <div className='flex flex-row'>
          <h1>Placeholder Title</h1>
          <a href='https://www.webmd.com/'>Link</a>
        </div>
        <div className='grid'>
          <div className='flex'>
            <img alt='headline'></img>
            <p></p>
          </div>
          <div className='flex'>
            <img alt='headline'></img>
            <p></p>
          </div>
          <div className='flex'>
            <img alt='headline'></img>
            <p></p>
          </div>
        </div>
      </section>

      <section className='content'>
        
        <div className='headline flex flex-row'>
          <img alt='headline' />
          <div className='headline-text flex flex-col'>
            <h1>Title</h1>
            <p></p>
          </div>
        </div>
      </section>

      <section className='social-media'>
        <div className='flex'>
          <div>
            <h1>Placeholder Title</h1>
            <div className='sm-icons flex flex-row'>
              <img alt='headline'/>
              <img alt='headline'/>
              <img alt='headline'/>
              <img alt='headline'/>
            </div>
          </div>
          <div>
          <h1>Placeholder Title</h1>
            <div className='sm-icons flex flex-row'>
              <img alt='headline'/>
              <img alt='headline'/>
              
            </div>
          </div>
        </div>
      </section>


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
      {/*<Footer/>*/}
    </div>
  );
}

export default Hometemplate;