import React from 'react'
import { Link } from 'react-router-dom'
import './SignupButton.css'

function SignupButton() {
  return (
    <Link to="/signup">
      <button className="signupButton"> Sign Up</button>
    </Link>
  )
}

export default SignupButton
