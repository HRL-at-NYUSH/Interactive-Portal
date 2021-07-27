import { useState } from 'react';
import HeaderText from '@components/HeaderText.js';
import SelectBox from '../components/SelectBox.js';
import { Switch, Route, useRouteMatch } from 'react-router';
import CustomLink from '@components/Link';
import { dataGeo, dataNonGeo } from '../utils/MockData.js';
import DefaultTable from '../components/DefaultTable.js';

// this is a dummy data for the select box component to render
const datasetsSelections = [
  { fieldName: 'Mock Data with Geo', value: 'dataGeo' },
  { fieldName: 'Mock Data without Geo', value: 'dataNonGeo' },
];

const datasets = {
  dataGeo: dataGeo,
  dataNonGeo: dataNonGeo,
};

const Description = () => {
  return (
    <div>
      <div className='w-full m-auto mt-2 text sm:w-2/3 border-2 rounded p-2'>
        <div className='text-lg leading-8 font-bold'>
          What is the dataset about?
        </div>
        Aenean ut ante ligula. Fusce at eros consectetur, dignissim dolor
        pretium, laoreet purus. Donec tristique tortor non laoreet fermentum.
        Etiam non tempus nisl. Nulla rhoncus ante vel maximus fringilla. Duis
        imperdiet scelerisque magna, a convallis mauris condimentum in.
        Pellentesque ultricies sem ac ante aliquet, a ultricies est aliquet.
      </div>
      <div className='w-full m-auto mt-2 text sm:w-2/3 border-2 rounded p-2'>
        <div>
          <b>People:</b> Lorem ipsum dolor sit amet, consectetur adipiscing
          elit.
        </div>
        <div>
          <b>Time:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
        <div>
          <b>Objects:</b> Lorem ipsum dolor sit amet, consectetur adipiscing
          elit.
        </div>
      </div>

      <div className='mt-4'>
        <CustomLink
          className=' text-lg  m-auto border-2 rounded p-2 hover:text-gray-400'
          href='#'
        >
          Learn More
        </CustomLink>
      </div>
    </div>
  );
};

const DataSources = () => {
  return (
    <div>
      <div className='w-full m-auto mt-2 text sm:w-2/3 border-2 rounded p-2'>
        <div className='text-lg leading-8 font-bold'>
          Where are the data from?
        </div>
        <div className='m-2'>
          <b>Year: </b>Aenean ut ante ligula. Fusce at eros consectetur,
          dignissim dolor pretium, laoreet purus. Donec tristique tortor non
          laoreet fermentum. Etiam non tempus nisl.
        </div>
        <div className='m-2'>
          <b>Document:</b> Nulla rhoncus ante vel maximus fringilla. Duis
          imperdiet scelerisque magna, a convallis mauris condimentum in.
          Pellentesque ultricies sem ac ante aliquet, a ultricies est aliquet.
        </div>
      </div>
      <div className='w-full m-auto mt-2 text sm:w-2/3 border-2 rounded p-2'>
        <div className='text-lg leading-8 font-bold'>Collection Method</div>
        <div className='m-2'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
          pellentesque mauris, non facilisis turpis. Sed leo tellus, molestie
          vel dignissim ut, congue in lectus. Donec ullamcorper bibendum
          scelerisque. Quisque vitae orci pellentesque, accumsan arcu et, tempus
          diam.
        </div>
      </div>
      <div></div>
    </div>
  );
};

const DatasetProduction = () => {
  const productionMethods = [
    {
      name: 'Preprocessing',
      description: ` Nulla rhoncus ante vel maximus fringilla. Duis
    imperdiet scelerisque magna, a convallis mauris condimentum in.
    Pellentesque ultricies sem ac ante aliquet, a ultricies est aliquet.`,
      url: '#',
    },

    {
      name: 'OCR Recognition',
      description: ` Nulla rhoncus ante vel maximus fringilla. Duis
    imperdiet scelerisque magna, a convallis mauris condimentum in.
    Pellentesque ultricies sem ac ante aliquet, a ultricies est aliquet.`,
      url: '#',
    },
    {
      name: 'Data Cleaning',
      description: ` Nulla rhoncus ante vel maximus fringilla. Duis
    imperdiet scelerisque magna, a convallis mauris condimentum in.
    Pellentesque ultricies sem ac ante aliquet, a ultricies est aliquet.`,
      url: '#',
    },
  ];
  return (
    <div>
      {productionMethods.map((method) => {
        return (
          <div className='w-full m-auto mt-2 sm:w-2/3 border-2 rounded p-2'>
            <div className='text-lg leading-8 font-bold'>{method.name}</div>
            {method.description}
            <div className='m-4'>
              <CustomLink
                className=' m-auto border-2 rounded p-2 hover:text-gray-400'
                href={method.url}
              >
                Learn More
              </CustomLink>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const Variables = () => {
  const variableHighlights = [
    {
      name: 'Cleaning',
      description: ` Nulla rhoncus ante vel maximus fringilla. Duis
    imperdiet scelerisque magna, a convallis mauris condimentum in.
    Pellentesque ultricies sem ac ante aliquet, a ultricies est aliquet.`,
    },
    {
      name: 'Missing Cases',
      description: ` Nulla rhoncus ante vel maximus fringilla. Duis
    imperdiet scelerisque magna, a convallis mauris condimentum in.
    Pellentesque ultricies sem ac ante aliquet, a ultricies est aliquet.`,
    },
    {
      name: 'Assumptions about Variables',
      description: ` Nulla rhoncus ante vel maximus fringilla. Duis
    imperdiet scelerisque magna, a convallis mauris condimentum in.
    Pellentesque ultricies sem ac ante aliquet, a ultricies est aliquet.`,
    },
    {
      name: 'Decisions Made for Users',
      description: ` Nulla rhoncus ante vel maximus fringilla. Duis
    imperdiet scelerisque magna, a convallis mauris condimentum in.
    Pellentesque ultricies sem ac ante aliquet, a ultricies est aliquet.`,
    },
  ];
  return (
    <div>
      {variableHighlights.map((highlight) => {
        return (
          <div>
            <div className='w-full m-auto mt-2 sm:w-2/3 border-2 rounded p-2'>
              <div className='text-lg leading-8 font-bold'>
                {highlight.name}
              </div>
              {highlight.description}
            </div>
          </div>
        );
      })}
      <div className='m-4'>
        <CustomLink
          className=' m-auto border-2 rounded p-2 hover:text-gray-400'
          href='#'
        >
          Learn More
        </CustomLink>
      </div>
    </div>
  );
};

const Data = ({ match: { path, url } }) => {
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
        <div className='flex justify-around border-b-2'>
          <CustomLink
            className='text-lg p-4 leading-4 hover:text-gray-400'
            href={url + '/description'}
          >
            Description
          </CustomLink>
          <CustomLink
            className='text-lg p-4 leading-4 m-auto hover:text-gray-400'
            href={url + '/data-sources'}
          >
            Data Sources
          </CustomLink>
          <CustomLink
            className='text-lg p-4 leading-4 m-auto hover:text-gray-400'
            href={url + '/dataset-production'}
          >
            Dataset Production
          </CustomLink>
          <CustomLink
            className='text-lg p-4 leading-4 m-auto hover:text-gray-400'
            href={url + '/variables'}
          >
            Variables
          </CustomLink>
        </div>

        <div className='mt-4'>
          <Switch>
            <Route exact path={path} component={Description} />
            <Route path={`${path}/description`} component={Description} />
            <Route path={`${path}/data-sources`} component={DataSources} />
            <Route
              path={`${path}/dataset-production`}
              component={DatasetProduction}
            />
            <Route path={`${path}/variables`} component={Variables} />
          </Switch>
        </div>
      </div>

      <div className='flex flex-col center text-center border-2 rounded shadow-md p-4 m-4'>
        <div className='text-xl m-2'>Variables</div>
        <div className=' h-96 overflow-y-auto'>
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
      </div>

      <div className='flex flex-col center text-center border-2 rounded shadow-md p-4 m-4'>
        <div className='text-xl m-2'>Data Explorer</div>
        <div className=' h-96 overflow-x-auto overflow-y-auto'>
          <DefaultTable data={currentDataset}></DefaultTable>
        </div>
      </div>

      {/* <HeaderText>Data Codebook</HeaderText> */}
    </>
  );
};

export default Data;
