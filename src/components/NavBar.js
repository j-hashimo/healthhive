import React from 'react';

function NavBar() {
  return (
    <div className='NavBar Item'>
      <div className='Navbar-border'>
        <h1 className='site-name'><i className='site-logo' />WebMD</h1>
        <div className='mobile-button'>
          <i className='hamburger-icon-x' />
        </div>
        <div className='search-bar'>

        </div>
        <ul className='first-list'>
          <li>
            <p>
              <ul className='second-list-hover'>
                <li>
                  <p>

                  </p>
                </li>
              </ul>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;