import React, { useState } from 'react';
import DashPanel from './components/dashboard-tabs/DashPanel';
import './Dashboard.css';

function Dashboard() {
  // const { category } = useParams()
  return (
    <>
      <div className='dash-block'>
        {/*
           <HeaderText>Visualization Dashboard</HeaderText>
           */}
        <div className='rows'>
          <DashPanel />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
