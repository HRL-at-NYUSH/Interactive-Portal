import React from 'react'
import { useEffect, useState } from 'react'
import { HeaderText } from '@components'
import { Link, Redirect } from 'react-router-dom'
import { GoogleLogin, GoogleLogout } from 'react-google-login'

import { AuthContext } from '../App'

function Signup() {
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

  return (
    <div>
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
  )
}

export default Signup
