import React from 'react';
//Important! Below the mock data is imported from the utils folder
import { dataGeo, dataNonGeo } from '../utils/MockData.js';
import Histogram from './Histogram';
import HeaderText from '@components/HeaderText.js';
import SelectBox from '@components/SelectBox.js';

import BarChart from './BarChart';
import BoxPlot from './BoxPlot';
import Correlation from './Correlation';
import AreaChart from './AreaChart';
import HeatMap from './HeatMap';
import LineGraph from './LineGraph';
import ScatterPlot from './ScatterPlot';
import StackedBarChart from './StackedBarChart';
import './GraphDisplay.css';

import { ChevronDownIcon } from '@heroicons/react/solid';
import { useState } from 'react';

//Main component that displays your created graph
//Components in React can be in the form of functions, classes etc.
//and consist of both javascript code and html code (html is the return value)

function selectOnce(checkbox) {//for checkbox
  var checkboxes = document.getElementsByName('game')
  checkboxes.forEach((item) => {
    if (item !== checkbox) item.checked =  false
  })
}




function GraphDisplay() {
  const dataKeys = Object.keys(dataNonGeo[0]);
  const selectBoxData = dataKeys.map((d) => ({ fieldName: d, value: d }));

  const [histoXAttr, setHistoXAttr] = useState('ID');

  //scatter plot attributes
  const [ScatoXAttr, setScatoXAttr] = useState("Time");
  const [ScatoYAttr, setScatoYAttr] = useState("Time");
  const [ScatoColor, setScatoColor] = useState("Company");
  const [ScatoLine, setScatoLine] = useState("");
  const [ScatoBg, setScatoBg] = useState("");

  //Below is the html code (return value)
  return (
    <>
      <div>
        <HeaderText>A page that displays your graph component</HeaderText>

        <div className='flex flex-wrap justify-between'>
          <div className='rounded-lg overflow-hidden shadow-lg m-auto p-4 bg-white'>
            {
              //Put your graph component below the Histogram Component
            }
            <div className='w-1/2 text-3xl text-center font-bold border-b-2 p-2 m-auto'>
              Histogram
            </div>
            <Histogram
              data={dataNonGeo}
              xAxisAttribute={histoXAttr}
              title={`People from Different ${histoXAttr}`}
            ></Histogram>
            <div className='text-center border-t-2 py-2'>
              <div className='font-bold text-xl py-2'>
                Histogram of Non-Geo Data
              </div>
              <div className='m-auto w-64'>
                <SelectBox
                  data={selectBoxData}
                  onValueChange={setHistoXAttr}
                ></SelectBox>
              </div>
            </div>
          </div>
        </div>
      
        <div className="flex rounded-lg overflow-hidden shadow-lg m-auto p-4">
            <div className="flex-auto">
              <p>Scatter Plot</p>
              <ScatterPlot
                data={dataNonGeo}
                xAxisAttribute={ScatoXAttr}
                yAxisAttribute={ScatoYAttr}
                colorAttribute={ScatoColor}
                lineAttribute={ScatoLine}
                backgroundAttribute={ScatoBg}
              ></ScatterPlot>
            </div>
            <div className="flex-auto text-left">
              <div className="flex flex-row mx-16 my-10">
                <div class="space-x-2 mx-5">
                  <div className="font-bold text-xl py-2">X Axis</div>
                  <div className="relative">
                    <form>
                      <input type="radio" name="game" class="mx-2" value={dataKeys[1]} onclick="selectOnce(this)" onChange={(e) => setScatoXAttr(e.target.value)}></input>{dataKeys[1]}<br></br>
                      <input type="radio" name="game" class="mx-2" value={dataKeys[10]} onclick="selectOnce(this)" onChange={(e) => setScatoXAttr(e.target.value)}></input>{dataKeys[10]}<br></br>
                      <input type="radio" name="game" class="mx-2" value={dataKeys[11]} onclick="selectOnce(this)" onChange={(e) => setScatoXAttr(e.target.value)}></input>{dataKeys[11]}<br></br>
                    </form>
                  </div>
                </div>
                <div class="space-x-2 mx-5">
                <div className="font-bold text-xl py-2">Y Axis</div>
                <div className="relative">
                  <form>
                    <input type="radio" name="game" class="mx-2" value={dataKeys[1]} onclick="selectOnce(this)" onChange={(e) => setScatoYAttr(e.target.value)}></input>{dataKeys[1]}<br></br>
                    <input type="radio" name="game" class="mx-2" value={dataKeys[10]} onclick="selectOnce(this)" onChange={(e) => setScatoYAttr(e.target.value)}></input>{dataKeys[10]}<br></br>
                    <input type="radio" name="game" class="mx-2" value={dataKeys[11]} onclick="selectOnce(this)" onChange={(e) => setScatoYAttr(e.target.value)}></input>{dataKeys[11]}<br></br>
                  </form>
                 </div>
              </div>
              </div>
              {/* <div className="text-center my-5"><input type="range" min="1" max="500" value="50"></input></div> */}
              <div className="text-center my-5"><input type="range" min="1" max="500" value="50"></input></div>
              <div className="px-20 py-8">
                <select
                  className="block appearance-none h-9 bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                  onChange={(e) => setScatoColor(e.target.value)}
                >
                    <option key={dataKeys[3]} value={dataKeys[3]}>{dataKeys[3]}</option>
                    <option key={dataKeys[7]} value={dataKeys[7]}>{dataKeys[7]}</option>
                    <option key={dataKeys[9]} value={dataKeys[9]}>{dataKeys[9]}</option>
                  {/* {dataKeys.map((key) => (
                    <option key={key} value={key}>
                      {key}
                    </option>
                  ))} */}
                </select>
              </div>
              <div className="text-center my-3"><input type="checkbox" onClick={(e) => setScatoLine(e.target.checked)}></input>    Average Line</div>
              <div className="text-center my-3"><input type="checkbox" onClick={(e) => setScatoBg(e.target.checked)}></input>    Background Color</div>
              <div className="rounded text-center mx-20 my-10 h-20 bg-gray-200"></div>
            </div>
            
          </div>
      </div>
    </>
  );
}

export default GraphDisplay;
