<<<<<<< HEAD
import React, { useEffect, useState, useRef } from 'react';
import Link from './Link';
import headerNavLinks from '../../data/headerNavLinks';
import MobileNav from './MobileNav';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  return (
    <header className='flex items-center justify-between py-6'>
      <div>
        <Link
          href='/'
          aria-label='Humanities Research Lab'
          className='mr-3 font-bold text-xl'
        >
          Humanities Research Lab
        </Link>
      </div>
      <div className='flex items-center text-base leading-5'>
        <div className='hidden sm:block'>
          {headerNavLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className={`p-1  ${
                location.pathname === link.href
                  ? 'text-gray-900 font-bold'
                  : 'text-gray-600 font-medium'
              }  sm:p-4 hover:text-gray-500`}
            >
              {link.title}
            </Link>
          ))}
        </div>
        <div className='hidden items-center text-base leading-5 sm:flex'>
          <Link
            href='/login'
            className='ml-4 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-gray-900 hover:text-gray-500 bg-gray-200'
          >
            Login
          </Link>
          <Link
            href='/signup'
            className='ml-4 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700'
          >
            Sign up
          </Link>
=======
import React, { useEffect, useState, useRef } from 'react'
import 'react-sticky-header/styles.css'
import StickyHeader from 'react-sticky-header'
import '../../css/components/Header.css'
import Hamburger from './Hamburger'
import HeaderLogo from './HeaderLogo'
import SignupButton from './SignupButton'
import LoginButton from './LoginButton'
import { AuthContext } from '../../App'
import LogoutButton from './LogoutButton'
import Navbar from './NavBar'

const Header = () => {
  const [isSticky, setSticky] = useState(false)
  const wrapper = useRef(null)
  const [isMobile, setMobile] = useState(false)
  const handleScroll = () => {
    if (wrapper.current) {
      setSticky(wrapper.current.getBoundingClientRect().top <= 0)
    }
  }
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window
    return {
      width,
      height,
    }
  }
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions(),
  )
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  /*
  const { loggedInUser } = React.useContext(AuthContext)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', () => handleScroll)
    }
  }, [])
*/
  return (
    <>
      <div
        className={`header-root sticky-wrapper${isSticky ? ' sticky' : ''}`}
        ref={wrapper}
      >
        <div className="sticky-inner">
          {windowDimensions['width'] > 1000 ? (
            <Navbar
              pageWrapId={'page-wrap'}
              outerContainerId={'outer-container'}
              className="sticky-inner"
            />
          ) : (
            <Hamburger
              pageWrapId={'page-wrap'}
              outerContainerId={'outer-container'}
            />
          )}
>>>>>>> main
        </div>

        <MobileNav />
      </div>
<<<<<<< HEAD
    </header>
  );
};
=======
    </>
  )
}
>>>>>>> main

export default Header;
