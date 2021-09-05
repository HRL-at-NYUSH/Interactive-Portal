import React, { useState } from 'react';
//Important! Below the mock data is imported from the utils folder
import { USCensusMetadata, dataGeo, dataNonGeo } from '../utils/MockData.js';
import Histogram from './Histogram';
import HeaderText from '@components/HeaderText.js';
import SelectBox from '@components/SelectBox.js';

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

//Main component that displays your created graph
//Components in React can be in the form of functions, classes etc.
//and consist of both javascript code and html code (html is the return value)
function GraphDisplay() {
  const dataKeys = Object.keys(dataNonGeo[0]);
  const selectBoxData = dataKeys.map((d) => ({ fieldName: d, value: d }));
  const [BarXAttr, setBarXAttr] = useState('ID');

  //Below is the html code (return value)
  return (
    <>
      <div>
        <HeaderText>A page that displays your graph component</HeaderText>

        <div className='flex flex-col justify-between'>
          {/* Put your graph component below the Histogram Card */}


          <div className='w-1/2 text-3xl text-center font-bold border-b-2 p-2 m-auto'>
              Bar Chart
            </div>
            <BarChart data={dataNonGeo}
              xAxisAttribute={BarXAttr}></BarChart>
            
            <div className='text-center border-t-2 py-2'>
              <div className='font-bold text-xl py-2'>
              X variable for Bar Chart of Non-Geo Data
              </div>
              <SelectBox
                    data={selectBoxData}
                    onValueChange={setBarXAttr}
              ></SelectBox>

          </div>
          </div>
      </div>
    </>
  );
}

export default GraphDisplay;