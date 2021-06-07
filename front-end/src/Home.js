import React from 'react'
import Header from './Header'
import Footer from './Footer'
import './Home.css'

function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <h2 className="header-text">Humanities Research Lab </h2>
        <div className="block">
          <br />
          <p className="full-text">Home page for Visualization portal!</p>
        </div>
      </div>
    </>
  )
}

export default Home
