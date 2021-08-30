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
import TextField from '@/components/TextField.js';
import DataTextField from './components/DataTextField.js';

//Main component that displays your created graph
//Components in React can be in the form of functions, classes etc.
//and consist of both javascript code and html code (html is the return value)
function GraphDisplay() {
  const dataKeys = Object.keys(dataNonGeo[0]);
  const selectBoxData = dataKeys.map((d) => ({ fieldName: d, value: d }));

  const [histoXAttr, setHistoXAttr] = useState('Time');
  const [histogramOptions, setHistogramOptions] = useState();

  const [boxPlotTitle, setBoxPlotTitle] = useState();
  const [boxPlotXAttr, setBoxPlotXAttr] = useState('Person');
  const [boxPlotYAttr, setBoxPlotYAttr] = useState('Time');
  const [boxPlotOptions, setBoxPlotOptions] = useState();

  //Below is the html code (return value)
  return (
    <>
      <div>
        <HeaderText>A page that displays your graph component</HeaderText>

        <div className='flex flex-col justify-between'>
          {/* Put your graph component below the Histogram Card */}

          {/* HISTOGRAM CARD */}
          <div className='rounded-lg overflow-hidden shadow-lg m-auto mb-4 p-4 bg-white'>
            <div className='w-1/2 text-3xl text-center font-bold border-b-2 p-2 m-auto'>
              Histogram
            </div>
            <Histogram
              data={dataNonGeo}
              xAxisAttribute={histoXAttr}
              title={`People from Different ${histoXAttr}`}
              options={histogramOptions}
            ></Histogram>
            <div className='text-center border-t-2 py-2'>
              <div className='font-bold text-xl py-2'>
                Histogram of Non-Geo Data
              </div>

              <div className='m-auto w-64'>
                <DataSelectBox
                  title={'Set X Attribute'}
                  options={USCensusMetadata}
                  onChange={setHistoXAttr}
                ></DataSelectBox>

                <DataCheckBoxGroup
                  title='Visualization Options'
                  options={[
                    {
                      title: 'Horizontal',
                      stateName: 'horizontal',
                      defaultChecked: false,
                    },
                    {
                      title: 'Cumulative',
                      stateName: 'cumulative',
                      defaultChecked: false,
                    },
                  ]}
                  onChange={setHistogramOptions}
                ></DataCheckBoxGroup>
              </div>
            </div>
          </div>

          <div className='flex rounded-lg overflow-hidden shadow-lg m-auto p-4 bg-white'>
            <div>
              <div className='w-1/2 text-3xl text-center font-bold border-b-2 p-2 m-auto'>
                BoxPlot of Non-Geo Data
              </div>
              <BoxPlot
                data={dataGeo}
                xAxisAttribute={boxPlotXAttr}
                yAxisAttribute={boxPlotYAttr}
                title={boxPlotTitle}
                options={boxPlotOptions}
              ></BoxPlot>
            </div>
            <div>
              <div className='text-center  py-2'>
                <div className='font-bold text-xl py-2'>
                  BoxPlot of Non-Geo Data
                </div>
                <div className='m-auto w-96'>
                  <DataTextField
                    title='Graph Title'
                    onChange={setBoxPlotTitle}
                  ></DataTextField>
                  <DataSelectBox
                    title={'Set X Attribute'}
                    options={USCensusMetadata}
                    dataType={'categorical'}
                    onChange={setBoxPlotXAttr}
                  />
                  <DataSelectBox
                    title={'Set Y Attribute'}
                    options={USCensusMetadata}
                    dataType={'numerical'}
                    onChange={setBoxPlotYAttr}
                  />

                  <DataCheckBoxGroup
                    title='Visualization Options'
                    options={[
                      {
                        title: 'Horizontal',
                        stateName: 'horizontal',
                        defaultChecked: false,
                      },
                      {
                        title: 'Display All Points',
                        stateName: 'displayPoints',
                        defaultChecked: false,
                      },
                      {
                        title: 'Display Mean & Standard Deviation',
                        stateName: 'displayMeanAndStandardDeviation',
                        defaultChecked: false,
                      },
                      {
                        title: 'Show Legend',
                        stateName: 'showLegend',
                        defaultChecked: true,
                      },
                      {
                        title: 'Overlay Violin Plot',
                        stateName: 'overlayViolinPlot',
                        defaultChecked: false,
                      },
                    ]}
                    onChange={setBoxPlotOptions}
                  ></DataCheckBoxGroup>
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
