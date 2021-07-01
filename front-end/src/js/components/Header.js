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

const Header = () => {
  const [isSticky, setSticky] = useState(false)
  const wrapper = useRef(null)

  const handleScroll = () => {
    if (wrapper.current) {
      setSticky(wrapper.current.getBoundingClientRect().top <= 0)
    }
  }
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
    <div
      className={`header-root sticky-wrapper${isSticky ? ' sticky' : ''}`}
      ref={wrapper}
    >
      <div className="sticky-inner">
        <Hamburger
          pageWrapId={'page-wrap'}
          outerContainerId={'outer-container'}
        />

        <div className="login-signup-buttons">
          {
            <LoginButton />
            

            /*loggedInUser ? (
            <LogoutButton />
          ) : (
            <>
              <LoginButton />
              <SignupButton />
            </>
          )*/
          }
          <LogoutButton />
          {/* <SignupButton /> */}
        </div>
      </div>
    </div>
  )
}

export default Header
