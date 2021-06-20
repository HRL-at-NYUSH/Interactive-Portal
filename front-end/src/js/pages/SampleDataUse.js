import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../../css/pages/SampleDataUse.css'
//Important! Below the mock data is imported from the utils folder
const { dataNonGeo } = require('../utils/MockNonGeo.js')
const { dataGeo } = require('../utils/MockGeo.js')

//Main component that displays the data and renders page html elements
//Components in React can be in the form of functions, classes etc.
//and consist of both javascript code and html code (html is the return value)
function SampleDataUse() {
  //Javascript code inside component. JS code can be also written inside brackets within the html code
  // See example below inside the DataDisplay component
  const titleNonGeo = 'Using non-geospatial data '
  const titleGeo = 'Using geospatial data '
  //Below is the html code (return value)
  return (
    <>
      <Header />
      <div className="home">
        <h2 className="header-text">
          This page demonstrates a sample usage of the mock data and react
          components:)
        </h2>
        <div className="block">
          <DataDisplay
            data={dataNonGeo}
            title={titleNonGeo}
            geospatial={false}
          />
          <DataDisplay data={dataGeo} title={titleGeo} geospatial={true} />
          <br />
        </div>
      </div>
    </>
  )
}
//This is a reusable component that accepts 1) data (array in json format) 2) title (string)
//and geospatial (boolean; indicates whether data is geospatial or not)
//and returns an html element that displays the data as output based on the inputs

function DataDisplay({ data, title, geospatial }) {
  return (
    <>
      <div className="home">
        <h2 className="header-text">{title}</h2>
        <div className="block">
          <br />
          <div className="data-container">
            {data.map((data, key) => {
              return (
                <>
                  <div key={key}>
                    {
                      //Note that only certain keys (name, entity etc. ) are displayed.
                      //You can display more characteristics by referencing data.KEY
                      'ID: ' +
                      data.ID +
                      ' , ' +
                      'Time: ' +
                      data.Time +
                      ' ,' +
                      'Entity: ' +
                      data.Entity +
                      ', ' +
                      'Name: ' +
                      data.Name + //If data is geospatial, display latitude and longitude.
                        //Otherwise, display an empty string
                        (!geospatial
                          ? ''
                          : ' ,' +
                            'Latitude: ' +
                            data.Latitude +
                            ', ' +
                            'Longitude: ' +
                            data.Longitude)
                    }
                  </div>
                  <br />
                </>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default SampleDataUse
