import React, { useState } from 'react'
import Highcharts from 'highcharts'
import DashPanel from '../components/dashboard-tabs/DashPanel'
// import AddandRemove from '../components/dashboard-tabs/AddandRemove'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../../css/pages/Dashboard.css'

function Dashboard() {

  // const { category } = useParams()
  return (
    <>
      {/* <Header /> */}
      <div>
        <h2 className="header-text">Dashboard page </h2>
        <DashPanel />
      </div>
    </>
  )
}

export default Dashboard
