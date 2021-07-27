import { useState } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router';
import { useLocation, matchPath } from 'react-router-dom';

import { dataGeo, dataNonGeo } from '@utils/MockData.js';
import { HeaderText, SelectBox, DefaultTable, Link } from '@components';

import Description from './components/Description';
import DataSources from './components/DataSources';
import DatasetProduction from './components/DatasetProduction';
import Variables from './components/Variables';

// this is a dummy data for the select box component to render
const datasetsSelections = [
  { fieldName: 'Mock Data with Geo', value: 'dataGeo' },
  { fieldName: 'Mock Data without Geo', value: 'dataNonGeo' },
];

const datasets = {
  dataGeo: dataGeo,
  dataNonGeo: dataNonGeo,
};

let localRoutes = [
  { href: '/description', title: 'Description', component: Description },
  { href: '/data-sources', title: 'Data Sources', component: DataSources },
  {
    href: '/dataset-production',
    title: 'Dataset Production',
    component: DatasetProduction,
  },
  { href: '/variables', title: 'Variables', component: Variables },
];

const Data = ({ match: { path, url } }) => {
  const location = useLocation();

  const [currentDatasetSelection, setCurrentDatasetSelection] = useState(
    datasetsSelections[0].value
  );

  let currentDataset = datasets[currentDatasetSelection];

  return (
    <>
      <HeaderText>Data Codebook</HeaderText>
      <div className='text-center'>Please choose a dataset</div>

      <div className='m-auto mt-4 w-72'>
        <SelectBox
          data={datasetsSelections}
          onValueChange={setCurrentDatasetSelection}
        ></SelectBox>
      </div>

      <div className='flex flex-col flex-wrap text-center border-2 rounded shadow-md p-4 m-4'>
        {/* links to different tab routes */}
        <div className='flex justify-around border-b-2'>
          {localRoutes.map((route) => {
            console.log(path, url + route.href);

            return (
              <Link
                className={`text-lg p-4 leading-4
              ${
                !!matchPath(location.pathname, url + route.href)
                  ? 'text-gray-900 font-bold'
                  : 'text-gray-600 font-medium'
              } 
                hover:text-gray-500 
              `}
                href={url + route.href}
              >
                {route.title}
              </Link>
            );
          })}
        </div>

        {/* the actual tab switch is here */}
        <div className='mt-4'>
          <Switch>
            <Route exact path={path} component={Description} />
            {localRoutes.map((route) => (
              <Route path={path + route.href} component={route.component} />
            ))}
          </Switch>
        </div>
      </div>

      <div className='flex flex-col center text-center border-2 rounded shadow-md p-4 m-4'>
        <div className='text-xl m-2'>Variables</div>
        <DefaultTable
          data={Object.keys(currentDataset[0]).map((key) => {
            return {
              Name: key,
              'Data Type': typeof currentDataset[0][key],
              Description: 'Lorem ipsum dolor sit amet.',
            };
          })}
        ></DefaultTable>
      </div>

      <div className='flex flex-col center text-center border-2 rounded shadow-md p-4 m-4'>
        <div className='text-xl m-2'>Data Explorer</div>
        <DefaultTable data={currentDataset}></DefaultTable>
      </div>

      {/* <HeaderText>Data Codebook</HeaderText> */}
    </>
  );
};

export default Data;
