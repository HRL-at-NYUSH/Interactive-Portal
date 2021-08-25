import createPlotlyComponent from 'react-plotlyjs';
//npm install react-plotlyjs
import React from 'react';
import Plotly from 'plotly.js/dist/plotly-cartesian';
const PlotlyComponent = createPlotlyComponent(Plotly);

const AreaChart = ({ data, xAxisAttribute, yAxisAttribute }) => {
  console.log(data);
  
  let xDataTemp = data.map((d) => {
    if (d[xAxisAttribute] === undefined || d[xAxisAttribute] === 'NULL') {
      // return 'UNKOWN';
      return;
    }
    return d[xAxisAttribute];
  });
  
  // let yData = data.map((d) => {
  //   if (d[yAxisAttribute] === undefined || d[yAxisAttribute] === 'NULL') {
  //     return; // this means continue, don't need unknown as a category
  //   }
  //   return d[yAxisAttribute];
  // });

  // console.log("xData"+" "+xData);
  // console.log("yData" +" "+yData);
  var tempResult = {}

  for(let key1 of xDataTemp)
    tempResult[key1] = { 
      key1, 
      key2: tempResult[key1] ? tempResult[key1].key2 + 1 : 1
    }      

  function keysAndValues(obj) {
    var keys = [], values = [];
    for (var p in obj) {
        keys.push(p);
        values.push(obj[p]['key2']);
    }
    return [keys, values];
}
  
  let xyData = keysAndValues(tempResult)
  let xData = xyData[0]
  let yData = xyData[1]
  let yData2 = xyData[0]
  let xData2 = xyData[1]
  
  console.log("xData"+xData)
  console.log("yData"+yData)

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
    yaxis: { title: yAxisAttribute + "Count"},
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

