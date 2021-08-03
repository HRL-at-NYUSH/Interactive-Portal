import createPlotlyComponent from 'react-plotlyjs';
//npm install react-plotlyjs
import React from 'react';
import Plotly from 'plotly.js/dist/plotly-cartesian';
const PlotlyComponent = createPlotlyComponent(Plotly);

const AreaChart = ({ data, xAxisAttribute, yAxisAttribute }) => {
  console.log(data);
  
  let xData = data.map((d) => {
    if (d[xAxisAttribute] === undefined || d[xAxisAttribute] === 'NULL') {
      return 'UNKOWN';
    }
    return d[xAxisAttribute];
  });
  
  let yData = data.map((d) => {
    if (d[yAxisAttribute] === undefined || d[yAxisAttribute] === 'NULL') {
      return 'UNKOWN';
    }
    return d[yAxisAttribute];
  });
  console.log(xData);
  console.log(yData);
  let dataKeys=[
     {
          fill: 'tozeroy',
          type: 'scatter',
          x: xData, 
          y: yData,
          // x: [1, 2, 3, 4],
          // y: [3, 5, 1, 7],
          marker:{
            color:'(16,32,77)'
          }
        },
        {
          fill: 'tonexty',
          type: 'scatter',
          x: xData,
          y: yData,
          // x: [1, 2, 3, 4],
          // y: [0, 2, 3, 5],
        }
  ];
  let layout = {
    autosize: true,
    xaxis: { title: xAxisAttribute },
    yaxis: { title: yAxisAttribute },
    // yaxis: { title: 'Count' },
  };
  let config = {
    showLink: false,
    displayModeBar: true
  };

  return (
    <>
    <PlotlyComponent className="" data={dataKeys} layout={layout} config={config}/>
    </>
  );
  
  }
export default AreaChart;

