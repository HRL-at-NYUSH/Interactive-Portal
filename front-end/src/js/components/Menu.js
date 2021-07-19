import '../../css/components/Menu.css'
import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import Toggle from './Toggle'
import Dropdown from './Dropdown'
// import "react-tabs/style/react-tabs.css";

function Search() {
  const labelDS = 'Select a dataset'
  const labelGraph = 'Select a graph'
  const labelX = 'X-axis'
  const labelY = 'Y-axis'
  const [selectedDS, setSelectedDS] = useState('')
  const [selectedGraph, setSelectedGraph] = useState('')
  const [selectedX, setSelectedX] = useState('')
  const [selectedY, setSelectedY] = useState('')

  const chartNames = ['graph1', 'graph2']
  const variables = ['age', 'year', 'birthplace']

  const datasetNames = ['US Census', 'Restaurant Data']
  return (
    <>
      <Toggle />
      <br />
      <Dropdown
        selected={selectedGraph}
        setSelected={setSelectedGraph}
        label={labelGraph}
        options={chartNames}
      />
      <br />
      Selected is {selectedGraph}
      <br />
      <br />
      <br />
      <br />
      <Dropdown
        selected={selectedDS}
        setSelected={setSelectedDS}
        label={labelDS}
        options={datasetNames}
      />
      <br />
      Selected is {selectedDS}
      <br />
      <p>Enter Search Terms</p>
      <input></input>
      <br />
      <Dropdown
        selected={selectedX}
        setSelected={setSelectedX}
        label={labelX}
        options={variables}
      />
      <Dropdown
        selected={selectedY}
        setSelected={setSelectedY}
        label={labelY}
        options={variables}
      />
    </>
  )
}
function Menu() {
  return (
    <>
      <div className="Menu">
        <Tabs>
          <TabList>
            <Tab>
              <p>Search</p>
            </Tab>
            <Tab>
              <p>View Insights</p>
            </Tab>
            <Tab>
              <p>Export</p>
            </Tab>
          </TabList>

          <TabPanel>
            <div className="panel-content">
              <h2>Select search type</h2>
              <Search />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="panel-content">
              <h2>Any content 2</h2>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="panel-content">
              <h2>Save</h2>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </>
  )
}
export default Menu
