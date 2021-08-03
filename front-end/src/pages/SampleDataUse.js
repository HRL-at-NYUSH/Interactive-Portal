import React from 'react';
//Important! Below the mock data is imported from the utils folder
import { dataGeo, dataNonGeo } from '@utils/MockData.js';
import Histogram from '@graphs/Histogram';
import HeaderText from '@components/HeaderText.js';
import SelectBox from '@components/SelectBox.js';
import DefaultTable from '@components/DefaultTable.js';
import { useState } from 'react';

//Main component that displays the data and renders page html elements
//Components in React can be in the form of functions, classes etc.
//and consist of both javascript code and html code (html is the return value)
function SampleDataUse() {
  //Javascript code inside component. JS code can be also written inside brackets within the html code
  // See example below inside the DataDisplay component
  const titleNonGeo = 'Using non-geospatial data';
  const titleGeo = 'Using geospatial data';

  const dataKeys = Object.keys(dataNonGeo[0]);
  const selectBoxData = dataKeys.map((d) => ({ fieldName: d, value: d }));

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
              <div className='m-auto w-64'>
                <SelectBox
                  data={selectBoxData}
                  onValueChange={setHistoXAttr}
                ></SelectBox>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div>
            <HeaderText>{titleNonGeo}</HeaderText>
            <div>
              <DefaultTable data={dataNonGeo}></DefaultTable>
            </div>
          </div>
          <div>
            <HeaderText>{titleGeo}</HeaderText>
            <div>
              <DefaultTable data={dataGeo}></DefaultTable>
            </div>
          </div>
          <br />
        </div>
      </div>
    </>
  );
}

export default SampleDataUse;
