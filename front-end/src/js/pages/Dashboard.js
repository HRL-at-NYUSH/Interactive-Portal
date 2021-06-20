import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../../css/pages/Dashboard.css'

function Dashboard() {
  return (
    <>
      <Header />
      <div>
        <h2 className="header-text">Dashboard page </h2>
        <div className="block">
          <br />
          <p className="full-text">TBH</p>
        </div>
      </div>
    </>
  )
}

export default Dashboard
