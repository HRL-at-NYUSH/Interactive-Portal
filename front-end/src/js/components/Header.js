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
import Navbar from '../components/NavBar/NavBar'
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
    <>
    <Navbar />
    <div
      className={`header-root sticky-wrapper${isSticky ? ' sticky' : ''}`}
      ref={wrapper}
    >
      <div className="sticky-inner">
        <Hamburger
          pageWrapId={'page-wrap'}
          outerContainerId={'outer-container'}
        />
      </div>
    </div>
    </>
  )
}

export default Header
