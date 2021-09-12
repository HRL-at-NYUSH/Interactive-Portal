<<<<<<< HEAD
import React, { useEffect, useState, useRef } from 'react'
import Link from './Link'
import headerNavLinks from '@data/headerNavLinks'
import MobileNav from './MobileNav'
import { useLocation } from 'react-router-dom'
import { GoogleLogin, GoogleLogout } from 'react-google-login'
import { Redirect } from 'react-router-dom'

const NavBar = () => {
  const clientId =
    '838596502010-0p0p11r3amea5qojgot7j52n2pb4saf7.apps.googleusercontent.com'
  const [showloginButton, setShowloginButton] = useState(true)
  const [showlogoutButton, setShowlogoutButton] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)
  const onLoginSuccess = (res) => {
    console.log('Login Success:', res.profileObj)
    setLoggedIn(true)
    setShowloginButton(false)
    setShowlogoutButton(true)
  }
  const onLoginFailure = (res) => {
    console.log('Login Failed:', res)
    setLoggedIn(false)
  }
  const onSignoutSuccess = () => {
    alert('You have been logged out successfully')
    console.clear()
    setLoggedIn(false)
    setShowloginButton(true)
    setShowlogoutButton(false)
  }

  const location = useLocation()
  if (loggedIn && showloginButton) {
    // return <Redirect to={`/profile/${loggedInUser.id}`} />
    return <Redirect to={`/profile`} />
  }
  if (!loggedIn && !showloginButton) {
    // return <Redirect to={`/profile/${loggedInUser.id}`} />
    return <Redirect to={`/`} />
  }
  return (
    <header className="flex items-center justify-between py-6 z-10">
      <div>
        <Link
          href="/"
          aria-label="Humanities Research Lab"
          className="mr-3 font-bold text-xl"
=======
import React from 'react';
import Link from './Link';
import headerNavLinks from '@data/headerNavLinks';
import MobileNav from './MobileNav';
import { useLocation, matchPath } from 'react-router-dom';

const NavBar = ({ isFixed }) => {
  const location = useLocation();

  const fixedHeader = ({ children }) => {
    return (
      <header
        className='fixed left-0 z-10
          py-4 shadow-md w-full
          px-2 sm:px-6 xl:px-8 
      '
      >
        <div className='flex items-center justify-between'>{children}</div>
      </header>
    );
  };

  const normalHeader = ({ children }) => {
    return (
      <header
        className='flex items-center justify-between z-10
       py-6 border-solid border-b-0 border-black shadow-lg
       px-2 sm:px-6 xl:px-8 
      '
      >
        {children}
      </header>
    );
  };

  const UsedHeader = isFixed ? fixedHeader : normalHeader;

  return (
    <UsedHeader>
      <div>
        <Link
          href='/'
          aria-label='Humanities Research Lab'
          className='mr-3 font-bold text-2xl'
>>>>>>> b888ac0d9be7823075adc881c42375c0ca930061
        >
          Humanities Research Lab
        </Link>
      </div>
<<<<<<< HEAD
      <div className="flex items-center text-base leading-5">
        <div className="hidden sm:block">
=======
      <div className='flex items-center flex-wrap text-lg leading-5'>
        <div className='hidden lg:block'>
>>>>>>> b888ac0d9be7823075adc881c42375c0ca930061
          {headerNavLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className={`transition p-1 sm:p-4 whitespace-nowrap
              ${
                !!matchPath(location.pathname, link.href)
                  ? 'text-gray-900 font-bold'
                  : 'text-gray-600 font-medium'
              } 
                hover:text-gray-500 `}
            >
              {link.title}
            </Link>
          ))}
<<<<<<< HEAD
          {loggedIn ? (
            <Link
              href="/profile"
              className={`p-1  ${
                location.pathname === '/profile'
                  ? 'text-gray-900 font-bold'
                  : 'text-gray-600 font-medium'
              }  sm:p-4 hover:text-gray-500 whitespace-nowrap`}
            >
              Profile
            </Link>
          ) : (
            ''
          )}
        </div>
        <div className="hidden items-center text-base leading-5 sm:flex">
          {showloginButton ? (
            <GoogleLogin
              className="ml-4 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-accent hover:bg-accent-darker"
              clientId={clientId}
              buttonText="Sign In"
              onSuccess={onLoginSuccess}
              onFailure={onLoginFailure}
              cookiePolicy={'single_host_origin'}
              isSignedIn={true}
            />
          ) : null}
          {showlogoutButton ? (
            <GoogleLogout
              className="ml-4 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-accent hover:bg-accent-darker"
              clientId={clientId}
              buttonText="Sign Out"
              onLogoutSuccess={onSignoutSuccess}
            ></GoogleLogout>
          ) : null}
=======

          <Link
            href='/login'
            className='
            transition
            whitespace-nowrap inline-flex items-center justify-center
            ml-4 px-4 py-3
            rounded-lg border border-transparent shadow-sm
            text-gray-900 hover:text-gray-500 bg-gray-200'
          >
            Login
          </Link>
          <Link
            href='/signup'
            className='
            transition
            whitespace-nowrap inline-flex items-center justify-center
            ml-4 px-4 py-3
            rounded-lg border border-transparent shadow-sm
           text-gray-900 hover:text-gray-200
           bg-accent hover:bg-accent-darker
           '
          >
            Sign up
          </Link>
>>>>>>> b888ac0d9be7823075adc881c42375c0ca930061
        </div>

        <MobileNav />
      </div>
<<<<<<< HEAD
    </header>
  )
}
=======
    </UsedHeader>
  );
};
>>>>>>> b888ac0d9be7823075adc881c42375c0ca930061

export default NavBar
