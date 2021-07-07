import React from 'react'
import LineGraph from '../graphs/LineGraph'
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

function Time() {
    return (
        <div id="Time">
            <LineGraph options={data} highcharts={Highcharts} />
        </div>
    )
}

export default Time