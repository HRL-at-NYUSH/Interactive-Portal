import React from 'react'
import Plot from 'react-plotly.js'

const BarChart = ({data, xAxisAttribute, yAxisAttribute, title}) => { 
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


  let layout = {
    autosize: true,
    title: title || "Sample Bar Chart",
    xaxis: {
      tickangle: -45
    },
 };
      return (
        <div>
          <Plot
            data = {[
              {
                type: 'bar',
                x: xData,
                y: yData,
                marker: {
                  color: 'rgba(255, 100, 102, 0.7)',
                },
            }
          ]}
          layout = {layout}
            />
        </div>
      ) 
      }
  
export default BarChart;
