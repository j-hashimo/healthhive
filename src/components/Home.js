import React from 'react';
import Footer from './Footer';

/*In order for the content to show, need to fill in info for img, heading, and anchor tags (no yellow bar should show)*/

function Home() {
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

    </div>
  );
}

export default Home;