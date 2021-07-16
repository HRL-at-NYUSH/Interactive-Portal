import React from 'react';
//Important! Below the mock data is imported from the utils folder
import { dataGeo, dataNonGeo } from '../utils/MockData.js';
import Histogram from '../../graphs/Histogram';
import HeaderText from '../components/HeaderText.js';
import SelectBox from '../components/SelectBox.js';
import { useState } from 'react';

//Main component that displays the data and renders page html elements
//Components in React can be in the form of functions, classes etc.
//and consist of both javascript code and html code (html is the return value)
function SampleDataUse() {
  //Javascript code inside component. JS code can be also written inside brackets within the html code
  // See example below inside the DataDisplay component
  const titleNonGeo = 'Using non-geospatial data ';
  const titleGeo = 'Using geospatial data ';

  const dataKeys = Object.keys(dataNonGeo[0]);
  const selectBoxData = dataKeys.map((d) => ({ fieldName: d, value: d }));
  console.log(selectBoxData);
  const [histoXAttr, setHistoXAttr] = useState('ID');
  //Below is the html code (return value)
  return (
    <>
      <div>
        <HeaderText>
          A sample usage of the mock data and react components
        </HeaderText>

        <div className='flex flex-wrap justify-between'>
          <div className='rounded overflow-hidden shadow-lg m-auto p-4'>
            <Histogram
              data={dataNonGeo}
              xAxisAttribute={histoXAttr}
              title={`People from Different ${histoXAttr}`}
            ></Histogram>
            <div className=' text-center border-t-2 px-6 py-2'>
              <div className=' font-bold text-xl py-2'>
                Histogram of Non-Geo Data
              </div>
              <div className='inline-block relative w-64'>
                <SelectBox
                  data={selectBoxData}
                  onValueChange={setHistoXAttr}
                ></SelectBox>
              </div>
            </div>
          </div>
        </div>

        <div>
          <DataDisplay data={dataNonGeo} title={titleNonGeo} />
          <DataDisplay data={dataGeo} title={titleGeo} />
          <br />
        </div>
      </div>
    </>
  );
}
//This is a reusable component that accepts 1) data (array in json format) 2) title (string)
//and geospatial (boolean; indicates whether data is geospatial or not)
//and returns an html element that displays the data as output based on the inputs

function DataDisplay({ data, title }) {
  // get attribute list from data
  const dataKeys = Object.keys(data[0]);
  return (
    <>
      <HeaderText>{title}</HeaderText>

      <div>
        <table className='min-w-max w-full table-fixed'>
          {/* table head */}
          <thead>
            <tr className='bg-gray-200 text-gray-600 uppercase text-sm leading-normal'>
              {dataKeys.map((key) => (
                <th className='py-3 text-center'>{key}</th>
              ))}
            </tr>
          </thead>

          <tbody className='text-gray-600 text-sm font-semibold'>
            {/* iterate through data items for each row*/}
            {data.map((datum, i) => {
              return (
                <tr
                  key={`data-${i}`}
                  className='border-b border-gray-200 hover:bg-gray-100'
                >
                  {/* iterate through data attributes each cell in each row*/}
                  {dataKeys.map((dataKey) => {
                    return (
                      <td
                        key={`data-${i}-${dataKey}`}
                        className='py-3 text-center'
                      >
                        {datum[dataKey]}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default SampleDataUse;
