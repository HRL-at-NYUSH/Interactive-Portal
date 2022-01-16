import React, { useState } from 'react';
//Important! Below the mock data is imported from the utils folder
//import { dataGeo, dataNonGeo } from '../utils/MockData-Winny.js';
import { USCensusMetadata, dataGeo, dataNonGeo } from '../utils/MockData.js';
import Histogram from './Histogram';
import HeaderText from '@components/HeaderText.js';
import SelectBox from '@components/SelectBox.js';
import DropdownMenu from '@components/DropdownMenu.js';

import DataSelectBox from '@graphs/components/DataSelectBox.js';
import DataCheckBoxGroup from './components/DataCheckBoxGroup.js';

import BarChart from './BarChart';
import BoxPlot from './BoxPlot';
import Correlation from './Correlation';
import AreaChart from './AreaChart';
import HeatMap from './HeatMap';
import LineGraph from './LineGraph';
import ScatterPlot from './ScatterPlot';
import StackedBarChart from './StackedBarChart';

import { ChevronDownIcon } from '@heroicons/react/solid';
import DataTextField from './components/DataTextField.js';

import Select from 'react-select';
import makeAnimated from 'react-select/animated';

//Main component that displays your created graph
//Components in React can be in the form of functions, classes etc.
//and consist of both javascript code and html code (html is the return value)

function selectOnce(checkbox) {//for checkbox
  var checkboxes = document.getElementsByName('button')
  checkboxes.forEach((item) => {
    if (item !== checkbox) item.checked =  false
  })
}


function GraphDisplay() {

  // const dataKeys = Object.keys(dataNonGeo[0]);
  // const selectBoxData = dataKeys.map((d) => ({ fieldName: d, value: d }));

  // const [histoXAttr, setHistoXAttr] = useState('YEAR');

  const dataKeys = Object.keys(dataNonGeo[0]);
 
  const test = ['Year', 'Age', 'Family Size', 'Immigration Year', 'EDSCORE50', 'OCCSCORE', 'PRESGL']
  const testKeys = test.map((d) => ({ label: d, value: d }));
  const [selectedOption, setSelectedOption] = useState('0');
  const animatedComponents = makeAnimated();

  //scatter plot attributes
  const [ScatoXAttr, setScatoXAttr] = useState("");
  const [ScatoYAttr, setScatoYAttr] = useState("");
  const [ScatoColor, setScatoColor] = useState("None");
  const [ScatoSymbol, setScatoSymbol] = useState("None");


  //Below is the html code (return value)
  return (
    <>
      <div>
        <HeaderText>A page that displays your graph component</HeaderText>

        <div className='flex flex-col justify-between'>
          <div className='w-1/2 text-3xl text-center font-bold border-b-2 p-2 m-auto'>
              Correlation Graph
          </div>
            <Correlation data={dataNonGeo}
               bothAxisAttribute={selectedOption}></Correlation>
            <Select
              // defaultValue={[testKeys[0]]}
              closeMenuOnSelect={false}
              components={animatedComponents}
              isMulti
              options={testKeys}
              onChange={setSelectedOption}
            />
        </div> 
      
        <div className="flex rounded-lg overflow-hidden shadow-lg m-auto p-4">
            <div className="flex-auto">
              <p>Scatter Plot</p>
              <ScatterPlot
              
                data={dataNonGeo}
                xAxisAttribute={ScatoXAttr}
                yAxisAttribute={ScatoYAttr}
                colorAttribute={ScatoColor}
                symbolAttribute={ScatoSymbol}
              ></ScatterPlot>
            </div>
            <div className="flex-auto text-left">
              <div className="flex flex-row m-16">
                <div class="space-x-2 mx-5">
                  <div className="font-bold text-xl py-5">X Axis</div>
                    <div className="relative">
                      <form>
                        <input type="radio" name="button" class="mx-2" value={dataKeys[0]} onclick="selectOnce(this)" onChange={(e) => setScatoXAttr(e.target.value)}></input>Year of report<br></br>
                        <input type="radio" name="button" class="mx-2" value={dataKeys[12]} onclick="selectOnce(this)" onChange={(e) => setScatoXAttr(e.target.value)}></input>Immigration Year<br></br>
                        <input type="radio" name="button" class="mx-2" value={dataKeys[16]} onclick="selectOnce(this)" onChange={(e) => setScatoXAttr(e.target.value)}></input>Income scores<br></br>
                        <input type="radio" name="button" class="mx-2" value={dataKeys[17]} onclick="selectOnce(this)" onChange={(e) => setScatoXAttr(e.target.value)}></input>Siegel score<br></br>
                        {/* <input type="radio" name="game" class="mx-2" value={dataKeys[1]} onclick="selectOnce(this)" onChange={(e) => setScatoXAttr(e.target.value)}></input>{dataKeys[1]}<br></br> */}
                        {/* <input type="radio" name="game" class="mx-2" value={dataKeys[10]} onclick="selectOnce(this)" onChange={(e) => setScatoXAttr(e.target.value)}></input>{dataKeys[10]}<br></br> */}
                        {/* <input type="radio" name="game" class="mx-2" value={dataKeys[11]} onclick="selectOnce(this)" onChange={(e) => setScatoXAttr(e.target.value)}></input>{dataKeys[11]}<br></br> */}
                      </form>
                    </div>
                  </div>
                <div class="space-x-2 mx-5">
              <div className="font-bold text-xl py-5">Y Axis</div>
                <div className="relative">
                  <form>
                      <input type="radio" name="button" class="mx-2" value={dataKeys[0]} onclick="selectOnce(this)" onChange={(e) => setScatoYAttr(e.target.value)}></input>Year of report<br></br>
                      <input type="radio" name="button" class="mx-2" value={dataKeys[12]} onclick="selectOnce(this)" onChange={(e) => setScatoYAttr(e.target.value)}></input>Immigration Year<br></br>
                      <input type="radio" name="button" class="mx-2" value={dataKeys[16]} onclick="selectOnce(this)" onChange={(e) => setScatoYAttr(e.target.value)}></input>Income scores<br></br>
                      <input type="radio" name="button" class="mx-2" value={dataKeys[17]} onclick="selectOnce(this)" onChange={(e) => setScatoYAttr(e.target.value)}></input>Siegel score<br></br>
                  </form>
                 </div>
              </div>
              </div>
                  
            <div class="relative m-10 z-20 flex-col hidden md:flex md:justify-end  md:flex-col">
              <div class="flex flex-row mx-10">
                <div class="px-4 py-2 font-bold bg-green-500 text-white cursor-defaultfocus:outline-none">
                  Explore Insight by Color
                </div>
                <div class="px-4 py-2 appearance-none font-bold bg-transperant border-2 border-green-500 text-black cursor-pointer focus:outline-none">
                  <select class="focus:outline-none"
                    onChange={(e) => setScatoColor(e.target.value)}>
                    <option className="block w-full py-3 cursor-pointer" key={"no color"} value={1}></option>
                    <option className="block w-full py-3 cursor-pointer" key={dataKeys[2]} value={dataKeys[2]}>Race</option>
                    <option className="block w-full py-3 cursor-pointer" key={dataKeys[13]} value={dataKeys[13]}>Literacy</option>
                  </select>
                </div>
              </div>

              <div class="flex flex-row mt-5 mx-10">
                <div class="px-4 py-2 font-bold bg-yellow-400 text-white cursor-defaultfocus:outline-none">
                  Explore Insight by Symbol
                </div>
                <div class="px-4 py-2 appearance-none font-bold bg-transperant border-2 border-yellow-400 text-black cursor-pointer focus:outline-none">
                  <select class="focus:outline-none"
                    onChange={(e) => setScatoSymbol(e.target.value)}>
                    <option className="block w-full py-3 cursor-pointer" key={"no color"} value={1}></option>
                    <option className="block w-full py-3 cursor-pointer" key={dataKeys[1]} value={dataKeys[1]}>Sex</option>
                    <option className="block w-full py-3 cursor-pointer" key={dataKeys[19]} value={dataKeys[19]}>Employment</option>
                  </select>
                </div>
              </div>

            </div>
            </div>
            
          </div>
      </div>
    </>
  );
}

export default GraphDisplay;
