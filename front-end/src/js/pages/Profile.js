import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../../css/pages/Profile.css'

function Profile() {
  return (
    <>
      <Header />
      <div className="home">
        <h2 className="header-text">Profile page </h2>
        <div className="block">
          <br />
          <p className="full-text">TBH</p>
        </div>
      </div>
    </>
  )
}

export default Profile
