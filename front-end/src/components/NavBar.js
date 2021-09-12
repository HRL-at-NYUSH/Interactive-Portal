import React, { useState } from 'react'
import Link from './Link'
import headerNavLinks from '@data/headerNavLinks'
import MobileNav from './MobileNav'
import { GoogleLogin, GoogleLogout } from 'react-google-login'
import { useLocation, matchPath } from 'react-router-dom'
import { Redirect } from 'react-router-dom'

const NavBar = ({ isFixed }) => {
  const location = useLocation()
  const clientId =
    '870556349856-iglk9aoidksnrqvj60vnv2mt1fei9lj0.apps.googleusercontent.com'
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
  if (loggedIn && showloginButton) {
    // return <Redirect to={`/profile/${loggedInU
    return <Redirect to={`/profile`} />
  }
  if (!loggedIn && !showloginButton) {
    // return <Redirect to={`/profile/${loggedInU
    return <Redirect to={`/`} />
  }
  const fixedHeader = ({ children }) => {
    return (
      <header
        className="fixed left-0 z-10
          py-4 shadow-md w-full
          px-2 sm:px-6 xl:px-8 
      "
      >
        <div className="flex items-center justify-between">{children}</div>
      </header>
    )
  }

  const normalHeader = ({ children }) => {
    return (
      <header
        className="flex items-center justify-between z-10
       py-6 border-solid border-b-0 border-black shadow-lg
       px-2 sm:px-6 xl:px-8 
      "
      >
        {children}
      </header>
    )
  }

  const UsedHeader = isFixed ? fixedHeader : normalHeader

  return (
    <UsedHeader>
      <div>
        <Link
          href="/"
          aria-label="Humanities Research Lab"
          className="mr-3 font-bold text-2xl"
        >
          Humanities Research Lab
        </Link>
      </div>
      <div className="flex items-center flex-wrap text-lg leading-5">
        <div className="hidden lg:block">
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

          {
            //loggedIn ? (
            <Link
              href="/profile"
              className="transition whitespace-nowrap inline-flex items-center justify-center
ml-4 px-4 py-3
rounded-lg border border-transparent shadow-sm
text-gray-900 hover:text-gray-500 bg-gray-200"
            >
              Profile
            </Link>
            //) : (
            // ''
            // )
          }
        </div>
        <div className="hidden items-center text-base leading-5 sm:flex">
          {showloginButton ? (
            <GoogleLogin
              className="transition
              whitespace-nowrap inline-flex items-center justify-center
              ml-4 px-4 py-3
              rounded-lg border border-transparent shadow-sm
              text-gray-900 hover:text-gray-500 bg-gray-200"
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
              className="transition
              whitespace-nowrap inline-flex items-center justify-center
              ml-4 px-4 py-3
              rounded-lg border border-transparent shadow-sm
              text-gray-900 hover:text-gray-500 bg-gray-200"
              clientId={clientId}
              buttonText="Sign Out"
              onLogoutSuccess={onSignoutSuccess}
            ></GoogleLogout>
          ) : null}
        </div>

        <MobileNav />
      </div>
    </UsedHeader>
  )
}

export default NavBar
