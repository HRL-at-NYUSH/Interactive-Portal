import '../../css/components/Menu.css'
import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import Toggle from './Toggle'
import DropdownMenu from './DropdownMenu'
import CloseBtn from './CloseBtn'
import { InboxIcon } from '@heroicons/react/solid'

function Search() {
  const labelDS = 'Select a Dataset'
  const labelGraph = 'Select a Graph'
  const labelX = 'X-axis'
  const labelY = 'Y-axis'
  const [selectedDS, setSelectedDS] = useState('')
  const [selectedGraph, setSelectedGraph] = useState('')
  const [selectedX, setSelectedX] = useState('')
  const [selectedY, setSelectedY] = useState('')
  const [selectedVariables, setVariables] = useState('')
  const [variableArray, setVariableArray] = useState([])
  const chartNames = ['Graph1', 'Graph2']
  const variables = ['age', 'year', 'birthplace']
  const display = false
  const datasetNames = ['US Census', 'Restaurant Data']
  function showVariables(array) {
    for (let x in array) {
      ;<CloseBtn variable={x} />
    }
  }

  function validate(string) {
    let array = string.split(',')
    for (let x in array) {
      if (variables.includes(x)) {
        continue
      } else {
        return x
      }
    }
    return true
  }
  function getVariables(string) {
    let array = string.split(',')
    let correct = []
    let incorrect = []

    //do more nlp querying here
    for (let x in array) {
      if (variables.includes(x)) {
        correct.push(x)
      } else {
        incorrect.push(x)
      }
    }
    setVariableArray(correct)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Toggle />
        <br />

        <DropdownMenu
          selected={selectedGraph}
          setSelected={setSelectedGraph}
          label={labelGraph}
          options={chartNames}
        />
        <br />
        {display ? <p>Selected Graph is {selectedGraph}</p> : ''}
        <br />
        <DropdownMenu
          selected={selectedDS}
          setSelected={setSelectedDS}
          label={labelDS}
          options={datasetNames}
        />
        <br />
        {display ? <p>Selected Dataset is {selectedDS}</p> : ''}
        <br />
        <p>
          Enter Variable names <br />
          <i>For example: age, year, gender</i>
        </p>
        <input
          id="search-input"
          type="text"
          value={selectedVariables}
          onChange={(e) => setVariables(e.target.value)}
        ></input>
        <div>
          <p>Selected Variables are {selectedVariables}</p>
          {
            //selectedVariables !== '' ? getVariables(selectedVariables) : ''
            //{validate(selectedVariables)}
          }
        </div>
        <br />
        <DropdownMenu
          selected={selectedX}
          setSelected={setSelectedX}
          label={'Select Variable for the X-axis'}
          options={variables}
        />
        <br />
        <DropdownMenu
          className="drop-axis"
          selected={selectedY}
          setSelected={setSelectedY}
          label={'Select Variable for the Y-axis'}
          options={variables}
        />
        <br />
        <button className="btn">Visualize</button>
      </form>
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
              <br />
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
