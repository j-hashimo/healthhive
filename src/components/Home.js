import React from 'react';
import Footer from './Footer';

/*In order for the content to show, need to fill in info for img, heading, and anchor tags (no yellow bar should show)*/

function Home() {
  return (
    <div className=''>
      {/*To make sure it doesn't conflict with the navbar, have a large mt, then have an md: media query to move the content back up to a normal position */}
      <h1>WebMD Home</h1>

    </div>
  );
}

export default Home;