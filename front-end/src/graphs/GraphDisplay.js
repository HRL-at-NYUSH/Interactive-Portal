import React, { useState } from 'react';
//Important! Below the mock data is imported from the utils folder
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
function GraphDisplay() {
  const dataKeys = Object.keys(dataNonGeo[0]);
 

  
  const test = ['Year', 'Age', 'Family Size', 'Immigration Year', 'EDSCORE50', 'OCCSCORE', 'PRESGL']
  const testKeys = test.map((d) => ({ label: d, value: d }));
  const [selectedOption, setSelectedOption] = useState('0');
  const animatedComponents = makeAnimated();

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
      </div>
    </>
  );
}

export default GraphDisplay;


