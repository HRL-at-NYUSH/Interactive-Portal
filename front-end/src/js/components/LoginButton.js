import { Link } from 'react-router-dom'
import '../../css/components/LoginButton.css'
import React, {useState} from 'react'
import { GoogleLogin } from 'react-google-login';
import axios from 'axios';

// import API from 'api';


const clientId = "838596502010-0p0p11r3amea5qojgot7j52n2pb4saf7.apps.googleusercontent.com";
let user;

function LoginButton() {
  const handleLogin = async googleData => {
    console.log(googleData.tokenId);
    console.log(googleData.profileObj)
    try {
      const res = await fetch("http://localhost:4000/api/v1/auth/google", {
          method: "POST",
          body: JSON.stringify({
          token: googleData.tokenId
        }),
        headers: {
          "Content-Type": "application/json"
        }
      })
      console.log(res);
      const data = await res
      console.log(data);
    } catch(err){
      console.log("The error is: ", err)
      // alert(err)
    }
    // store returned user somehow
  }

  // const onSuccess = (res) => {
  //   console.log('[Login Success] currentUser:', res.profileObj);
  //   user = res.profileObj;
  // }

  // const onFailure = (res) => {
  //   console.log('[Login Failed]', res);
  // }

  return (
    <>
      <GoogleLogin
      clientId={clientId}
      buttonText="Login"
      onSuccess={handleLogin}
      onFailure={handleLogin}
      cookiePolicy={'single_host_origin'}
      isSignedIn={true}
    />
    </>
  )
}

export default LoginButton
