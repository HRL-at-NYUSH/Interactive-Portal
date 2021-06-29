
import { Link } from 'react-router-dom'
import '../../css/components/LoginButton.css'
import React, {useState} from 'react'
import { GoogleLogin } from 'react-google-login';

const clientId = "838596502010-0p0p11r3amea5qojgot7j52n2pb4saf7.apps.googleusercontent.com";

function LoginButton() {
  const onSuccess = (res) => {
    console.log('[Login Success] currentUser:', res.profileObj);
  }

  const onFailure = (res) => {
    console.log('[Login Failed] res:', res);
  }

  return (
    <>
      <GoogleLogin
      clientId={clientId}
      buttonText="Login"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={'single_host_origin'}
      isSignedIn={true}
    />
    </>
  )
}

export default LoginButton
