import React from 'react'
import Matrix from '../graphs/CorrelationMatrix'
import LineGraph from '../graphs/LineGraph'
import Histogram from '../graphs/Histogram'
import BarChart from '../graphs/BarChart'
import Boxplot from '../graphs/Boxplot'
import Scatter from '../graphs/ScatterPlot'
import Highcharts from 'highcharts'

const data = {
    title: {
      text: 'Line Graph'
    },
    series: [{
      data: [1,2,3],
  
    }],
    chart: {
      width: 300,
      height: 250
      
    },
    credits: {
      enabled: false
    },
}


function Playground() {
    return (
        <div id="Playground">
            <Histogram />
            <Matrix />
            <BarChart />
            <Boxplot />
            <Scatter />
            <div className="lineoverride"><LineGraph options={data} highcharts={Highcharts} /></div>
        </div>
    )
}

export default Playground