import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../../css/pages/Home.css'

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
