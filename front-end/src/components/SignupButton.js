import React from 'react'
import { Link } from 'react-router-dom'
import '../../css/components/SignupButton.css'

function SignupButton() {
  return (
    <a href="http://localhost:4000/google/">
      <button className="signupButton"> Sign Up</button>
    </a>
  )
}

export default SignupButton
