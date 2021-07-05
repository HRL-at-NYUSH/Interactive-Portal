import React from 'react';
import HighchartsReact from 'highcharts-react-official';
import '../../../css/components/LineGraph.css'

const LineGraph = ({ options, highcharts }) => <HighchartsReact
  highcharts={highcharts}
  constructorType={'chart'}
  options={options}
/>

export default LineGraph