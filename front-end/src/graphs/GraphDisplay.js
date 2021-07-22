import React from 'react'
//Important! Below the mock data is imported from the utils folder
import { dataGeo, dataNonGeo } from '../js/utils/MockData.js'
import Histogram from './Histogram'
import BarChart from './BarChart'
import BoxPlot from './BoxPlot'
import Correlation from './Correlation'
import AreaChart from './AreaChart'
import HeatMap from './HeatMap'
import LineGraph from './LineGraph'
import ScatterPlot from './ScatterPlot'
import StackedBarChart from './StackedBarChart'
import './GraphDisplay.css'

import { ChevronDownIcon } from '@heroicons/react/solid'
import { useState } from 'react'

//Main component that displays your created graph
//Components in React can be in the form of functions, classes etc.
//and consist of both javascript code and html code (html is the return value)
function GraphDisplay() {
  const dataKeys = Object.keys(dataNonGeo[0])
  const [histoXAttr, setHistoXAttr] = useState('ID')
  //Below is the html code (return value)
  return (
    <>
      <div>
        <HeaderText>A page that displays your graph component</HeaderText>

        <div className="flex flex-wrap justify-between">
          <div className="rounded overflow-hidden shadow-lg m-auto p-4">
            {
              //Put your graph component below the Histogram Component
            }
            <p>Histogram</p>
            <Histogram
              data={dataNonGeo}
              xAxisAttribute={histoXAttr}
              title={`People from Different ${histoXAttr}`}
            ></Histogram>

            <div className=" text-center border-t-2 px-6 py-2">
              <div className=" font-bold text-xl py-2">
                Histogram of Non-Geo Data
              </div>
              <div className="inline-block relative w-64">
                <select
                  className="block appearance-none w-full h-9 bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                  onChange={(e) => setHistoXAttr(e.target.value)}
                >
                  {dataKeys.map((key) => (
                    <option key={key} value={key}>
                      {key}
                    </option>
                  ))}
                </select>
                <div className="w-9 h-9 pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <ChevronDownIcon></ChevronDownIcon>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function HeaderText({ children }) {
  return (
    <h2 className="my-8 text-4xl text-center font-medium leading-10">
      {children}
    </h2>
  )
}

export default GraphDisplay
