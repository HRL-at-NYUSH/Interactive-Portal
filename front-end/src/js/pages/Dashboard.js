import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Menu from '../components/Menu'
import '../../css/pages/Dashboard.css'
import Toggle from '../components/Toggle'
import './styles.css'

function Dashboard() {
  return (
    <>
      <h2 className="header-text">Dashboard page </h2>

      <Menu />
      <br />
      <p className="full-text">TBH</p>
    </>
  )
}

export default Dashboard
