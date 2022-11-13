import React from 'react';
import Footer from './Footer';


function Home() {
  return (
    <div>
      <section className='top-stories'>
        <h3>Today's Top Stories</h3>
        {/*See medimouse website for border design */}
        <div className='headline flex flex-row'>
          <img alt='headline' />
          <div className='headline-text flex flex-col'>
            <h1>Title</h1>
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
          <a>See all</a>
        </div>
        <div className='images flex flex-row'>
          <img>
            <h1></h1>
          </img>
          <img>
            <h1></h1>
          </img>
          <img>
            <h1></h1>
          </img>
          <img>
            <h1></h1>
          </img>
          <img>
            <h1></h1>
          </img>
        </div>
      </section>

      <section className='health news'>
        <h3>Today's Top Stories</h3>
        {/*See medimouse website for border design */}
        <div className='headline flex flex-row'>
          <img alt='headline' />
          <div className='headline-text flex flex-col'>
            <h1>Title</h1>
            <p></p>
          </div>
        </div>
      </section>

      <section className='health-news-articles flex flex-row'>
        <div className='article flex flex-row'>
          
          <h2>Title</h2>
        </div>

        <div className='article flex flex-row'>
          
          <h2>Title</h2>
        </div>

        <div className='article flex flex-row'>
          
          <h2>Title</h2>
        </div>
      </section>

      <section className='expert-insights flex flex-col'>
        <div className='author flex'>
          <img/>
          <div className='author-info flex flex-col'>
            <h2></h2>
            <h1></h1>
            <h2></h2>
          </div>
        </div>
        <div className='flex'>
          <div className='flex flex-col'>
            <a><img/></a>
            <h1></h1>
            <p></p>
          </div>
          <div className='flex flex-col'>
            <div className='flex flex-row'>
              <img></img>
              <h1></h1>
            </div>
          </div>
          <div className='flex flex-col'>
            <div className='flex flex-row'>
              <img></img>
              <h1></h1>
            </div>
          </div>
          <div className='flex flex-col'>
            <div className='flex flex-row'>
              <img></img>
              <h1></h1>
            </div>
          </div>
          <div className='flex flex-col'>
            <div className='flex flex-row'>
              <img></img>
              <h1></h1>
            </div>
          </div>
        </div>
      </section>

      <section className='special-section'>
        <h1></h1>
        <a></a>
        <div className='flex flex-row'>
          <div className='author-info flex flex-col'>
            <button></button>
            <h1></h1>
            <p></p>
          </div>
          <div className='author-info flex flex-col'>
            <button></button>
            <h1></h1>
            <p></p>
          </div>
          <div className='author-info flex flex-col'>
            <button></button>
            <h1></h1>
            <p></p>
          </div>
        </div>
      </section>

      <section className='trending topics'>
        <h1></h1>
        <div className='topic-button-grid'>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
        </div>
      </section>

      <section className='featured-stories'>
        <h1></h1>
        <div className='cards flex flex-row'>
          <div className='card flex flex-col'>
            <img/>
            <h1></h1>
            <p></p>
          </div>
          <div className='card flex flex-col'>
            <img/>
            <h1></h1>
            <p></p>
          </div>
          <div className='card flex flex-col'>
            <img/>
            <h1></h1>
            <p></p>
          </div>
        </div>
      </section>

      <section className='newsletters'>
        <div className='flex flex-row'>
          <div className='flex flex-col'>
            <h1></h1>
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
            <a></a>
          </div>
          <img/>
        </div>
        {/*For padding, see the bottom section of the "header page" project*/}
      </section>

      <section className='blogs'>
        <h1></h1>
        <div className='cards flex flex-row'>
          <div className='card flex flex-col'>
            <img><button></button></img>
            <h1></h1>
            <p></p>
            <p></p>
          </div>
          <div className='card flex flex-col'>
            <img><button></button></img>
            <h1></h1>
            <p></p>
            <p></p>
          </div>
          <div className='card flex flex-col'>
            <img><button></button></img>
            <h1></h1>
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
          <h1></h1>
          <a></a>
        </div>
        <div className='flex grid'>
          <div className='flex'>
            <img></img>
            <p></p>
          </div>
          <div className='flex'>
            <img></img>
            <p></p>
          </div>
          <div className='flex'>
            <img></img>
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
            <h1></h1>
            <div className='sm-icons flex flex-row'>
              <img/>
              <img/>
              <img/>
              <img/>
            </div>
          </div>
          <div>
          <h1></h1>
            <div className='sm-icons flex flex-row'>
              <img/>
              <img/>
              
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
      <Footer/>
    </div>
  );
}

export default Home;