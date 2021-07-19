import React, { useState } from 'react'
import DashPanel from '../components/dashboard-tabs/DashPanel'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../../css/pages/Dashboard.css'
import Menu from '../components/Menu'
import Toggle from '../components/Toggle'
import './styles.css'

function Dashboard() {
  // const { category } = useParams()
  return (
    <>
      <div>
        <h2 className="header-text">Dashboard page </h2>
        <DashPanel />
        <Menu />
      </div>
    </>
  )
}

export default Dashboard
