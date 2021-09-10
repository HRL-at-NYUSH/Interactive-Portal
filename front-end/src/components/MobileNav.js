import { useState } from 'react'
import Link from './Link'
import { GoogleLogin, GoogleLogout } from 'react-google-login'

import headerNavLinks from '@data/headerNavLinks'
import { MenuIcon, XIcon } from '@heroicons/react/solid'
const MobileNav = () => {
  const [navShow, setNavShow] = useState(false)
  const clientId =
    '838596502010-0p0p11r3amea5qojgot7j52n2pb4saf7.apps.googleusercontent.com'
  const [showloginButton, setShowloginButton] = useState(true)
  const [showlogoutButton, setShowlogoutButton] = useState(false)
  const onLoginSuccess = (res) => {
    console.log('Login Success:', res.profileObj)
    setShowloginButton(false)
    setShowlogoutButton(true)
  }
  const onLoginFailure = (res) => {
    console.log('Login Failed:', res)
  }
  const onSignoutSuccess = () => {
    alert('You have been logged out successfully')
    console.clear()
    setShowloginButton(true)
    setShowlogoutButton(false)
  }

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        document.body.style.overflow = 'auto'
      } else {
        // Prevent scrolling
        document.body.style.overflow = 'hidden'
      }
      return !status
    })
  }

  return (
    <div className="sm:hidden">
      <button
        type="button"
        className="w-8 h-8 ml-1 mr-1 rounded"
        aria-label="Toggle Menu"
        onClick={onToggleNav}
      >
        {navShow ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
      </button>

      <div
        className={`fixed w-full h-full top-24 right-0 bg-gray-200 dark:bg-gray-800 opacity-95 z-10 transform ease-in-out duration-300 ${
          navShow ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          type="button"
          aria-label="toggle modal"
          className="fixed w-full h-full cursor-auto focus:outline-none"
          onClick={onToggleNav}
        ></button>
        <nav className="fixed h-full mt-8">
          {/* navigation links */}
          {headerNavLinks.map((link) => (
            <div key={link.title} className="px-12 py-2">
              <Link
                href={link.href}
                className="text-xl font-bold tracking-widest text-gray-900 dark:text-gray-100"
                onClick={onToggleNav}
              >
                {link.title}
              </Link>
            </div>
          ))}
          <div className="px-12 py-2">
            {showloginButton ? (
              <GoogleLogin
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
                clientId={clientId}
                buttonText="Sign Out"
                onLogoutSuccess={onSignoutSuccess}
              ></GoogleLogout>
            ) : null}
          </div>
        </nav>
      </div>
    </div>
  )
}

export default MobileNav
