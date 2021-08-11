import React from "react";
//Important! Below the mock data is imported from the utils folder
import { dataGeo, dataNonGeo } from "../js/utils/MockData-Winny.js";
import Histogram from "./Histogram";
// import HeaderText from '@components/HeaderText.js';
// import SelectBox from '@components/SelectBox.js';
import BarChart from "./BarChart";
import BoxPlot from "./BoxPlot";
import Correlation from "./Correlation";
import AreaChart from "./AreaChart";
import HeatMap from "./HeatMap";
import LineGraph from "./LineGraph";
import ScatterPlot from "./ScatterPlot";
import StackedBarChart from "./StackedBarChart";
import "./GraphDisplay.css";

import { ChevronDownIcon } from "@heroicons/react/solid";
import { useState } from "react";

function selectOnce(checkbox) {
  var checkboxes = document.getElementsByName('game')
  checkboxes.forEach((item) => {
    if (item !== checkbox) item.checked =  false
  })
}

//Main component that displays your created graph
//Components in React can be in the form of functions, classes etc.
//and consist of both javascript code and html code (html is the return value)
function GraphDisplay() {
  const dataKeys = Object.keys(dataNonGeo[0]);
  const [histoXAttr, setHistoXAttr] = useState("ID");

  //scatter plot attributes
  const [ScatoXAttr, setScatoXAttr] = useState("");
  const [ScatoYAttr, setScatoYAttr] = useState("");
  const [ScatoColor, setScatoColor] = useState("RACE");
  const [ScatoLine, setScatoLine] = useState("");
  const [ScatoBg, setScatoBg] = useState("");

  //Below is the html code (return value)
  return (
    <>
      <div>
        {/* <HeaderText>A page that displays your graph component</HeaderText> */}

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
                      <input type="radio" name="game" class="mx-2" value={dataKeys[16]} onclick="selectOnce(this)" onChange={(e) => setScatoXAttr(e.target.value)}></input>{dataKeys[16]}<br></br>
                      <input type="radio" name="game" class="mx-2" value={dataKeys[22]} onclick="selectOnce(this)" onChange={(e) => setScatoXAttr(e.target.value)}></input>{dataKeys[22]}<br></br>
                      <input type="radio" name="game" class="mx-2" value={dataKeys[21]} onclick="selectOnce(this)" onChange={(e) => setScatoXAttr(e.target.value)}></input>{dataKeys[21]}<br></br>
                      <input type="radio" name="game" class="mx-2" value={dataKeys[27]} onclick="selectOnce(this)" onChange={(e) => setScatoXAttr(e.target.value)}></input>{dataKeys[27]}<br></br>
                    </form>
                  </div>
                </div>
                <div class="space-x-2 mx-5">
                <div className="font-bold text-xl py-2">Y Axis</div>
                <div className="relative">
                  <form>
                    <input type="radio" name="game" class="mx-2" value={dataKeys[16]} onclick="selectOnce(this)" onChange={(e) => setScatoYAttr(e.target.value)}></input>{dataKeys[16]}<br></br>
                    <input type="radio" name="game" class="mx-2" value={dataKeys[22]} onclick="selectOnce(this)" onChange={(e) => setScatoYAttr(e.target.value)}></input>{dataKeys[22]}<br></br>
                    <input type="radio" name="game" class="mx-2" value={dataKeys[21]} onclick="selectOnce(this)" onChange={(e) => setScatoYAttr(e.target.value)}></input>{dataKeys[21]}<br></br>
                    <input type="radio" name="game" class="mx-2" value={dataKeys[27]} onclick="selectOnce(this)" onChange={(e) => setScatoYAttr(e.target.value)}></input>{dataKeys[27]}<br></br>
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
                    <option key={dataKeys[4]} value={dataKeys[4]}>{dataKeys[4]}</option>
                    <option key={dataKeys[3]} value={dataKeys[3]}>{dataKeys[3]}</option>
                    <option key={dataKeys[8]} value={dataKeys[8]}>{dataKeys[8]}</option>
                    <option key={dataKeys[15]} value={dataKeys[15]}>{dataKeys[15]}</option>
                    <option key={dataKeys[18]} value={dataKeys[18]}>{dataKeys[18]}</option>
                    <option key={dataKeys[17]} value={dataKeys[17]}>{dataKeys[17]}</option>
                    <option key={dataKeys[24]} value={dataKeys[24]}>{dataKeys[24]}</option>
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
      </div>
    </>
  );
}

export default GraphDisplay;
