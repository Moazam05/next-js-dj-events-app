import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';

const Header = () => {
  const router = useRouter();
  return (
    <>
      <div className='header-wrap'>
        <nav className='navbar fixed-top navbar-expand-lg navbar-light bg-light'>
          <div className='container-fluid'>
            <div className='title-h'>
              <Link className='navbar-brand' href='/'>
                Dj Events
              </Link>
            </div>
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon'></span>
            </button>
            <div
              className='collapse navbar-collapse'
              id='navbarSupportedContent'
            >
              <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                <li className='nav-item f'>
                  <Link
                    className='nav-link active'
                    aria-current='page'
                    href='/'
                  >
                    Home
                  </Link>
                </li>
                <li className='nav-item s'>
                  <Link className='nav-link' href='/about'>
                    About
                  </Link>
                </li>

                <li className='nav-item'>
                  <Link
                    className='nav-link '
                    href='/'
                    tabindex='-1'
                    aria-disabled='true'
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>

              <button
                className='btn btn-outline-danger'
                type='submit'
                onClick={() => router.push('/events')}
              >
                Events
              </button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
