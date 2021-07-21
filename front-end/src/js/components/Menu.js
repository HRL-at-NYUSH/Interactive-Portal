import '../../css/components/Menu.css'
import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import ToggleSwitch from './ToggleSwitch'
import DropdownMenu from './DropdownMenu'
import ViewInsights from './ViewInsights'
import CloseBtn from './CloseBtn'
import { InboxIcon } from '@heroicons/react/solid'
//next steps: get the user object

function Search() {
  let [isToggleOn, setToggle] = useState(false)
  const onChange = (checked) => {
    setToggle(checked)
  }
  const labelDS = 'Select a Dataset'
  const labelGraph = 'Select a Graph'
  const labelX = 'X-axis'
  const labelY = 'Y-axis'
  const [database, setDS] = useState('')
  const [graph, setGraph] = useState('')
  const [x, setX] = useState('')
  const [y, setY] = useState('')
  const [selectedVariables, setVariables] = useState('')
  const [variableArray, setVariableArray] = useState([])
  const chartNames = ['Graph1', 'Graph2'] //need to add titles to graphs
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
  function getVariables(str) {
    let array = str.split(',')
    setVariableArray(array)
    /*
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
    */
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const graphObject = { graph, database, x, y }
    console.log(graphObject)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <ToggleSwitch id="switch" checked={isToggleOn} onChange={onChange} />
        {display ? <p>Toggle: {isToggleOn ? 'select' : 'query'}</p> : ''}
        <br />

        <DropdownMenu
          selected={graph}
          setSelected={setGraph}
          label={labelGraph}
          options={chartNames}
        />
        <br />
        {display ? <p>Selected Graph is {graph}</p> : ''}
        <br />
        <DropdownMenu
          selected={database}
          setSelected={setDS}
          label={labelDS}
          options={datasetNames}
        />
        <br />
        {display ? <p>Selected Dataset is {database}</p> : ''}
        <br />
        <p>
          Enter Variable names <br />
          <i id="comment">For example: age, year, gender</i>
        </p>
        <input
          id="search-input"
          type="text"
          value={selectedVariables}
          onChange={(e) => setVariables(e.target.value)}
        ></input>
        {/*
        isToggleOn ? (
          <input
            id="search-input"
            type="text"
            value={selectedVariables}
            onChange={(e) => setVariables(e.target.value)}
          ></input>
        ) : (
          <DropdownMenu
            selected={database}
            setSelected={setDS}
            label={labelDS}
            options={datasetNames}
          />
        )
        */}
        <div>
          <p>Selected Variables are {selectedVariables}</p>
          {
            //selectedVariables !== '' ? getVariables(selectedVariables) : ''
          }
        </div>
        <br />
        <DropdownMenu
          selected={x}
          setSelected={setX}
          label={'Select Variable for the X-axis'}
          options={
            variables //to be replaced with variableArray
          }
        />
        <br />
        <DropdownMenu
          className="drop-axis"
          selected={y}
          setSelected={setY}
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
              <p className="menu-p">Search</p>
            </Tab>
            <Tab>
              <p className="menu-p">View Insights</p>
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
              <ViewInsights />
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </>
  )
}
export default Menu
