import React from 'react';
import HighchartsReact from 'highcharts-react-official';
import './Graph.css';

const LineGraph = ({ options, highcharts }) => (
  <div className='graph'>
    <HighchartsReact
      highcharts={highcharts}
      constructorType={'chart'}
      options={options}
    />
  </div>
);

export default LineGraph;
