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
function GraphDisplay() {
  const dataKeys = Object.keys(dataNonGeo[0]);
  const selectBoxData = dataKeys.map((d) => ({ fieldName: d, value: d }));

  const [histoXAttr, setHistoXAttr] = useState('ID');
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
      </div>
    </>
  );
}

export default GraphDisplay;
