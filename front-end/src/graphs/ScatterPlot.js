import React from "react";
import Plot from "react-plotly.js";
import { dataNonGeo } from "../js/utils/MockData-Winny.js";

let randomColors= 
  ["#1bb699", "#c79bc2", "#d02e29", "#1ae6db", "#3e464c", "#a84a8f",
  "#911e7e", "#3f16d9", "#0f525f", "#ac7c0a", "#b4c086", "#c9d730", "#30cc49",
  "#3d6751", "#fb4c03", "#640fc1", "#62c03e", "#d3493a", "#88aa0b", "#406df9",
  "#615af0", "#4be47", "#2a3434", "#4a543f", "#79bca0", "#a8b8d4", "#00efd4",
  "#7ad236", "#7260d8", "#1deaa7", "#06f43a", "#823c59", "#e3d94c", "#dc1c06",
  "#f53b2a", "#b46238", "#2dfff6", "#a82b89", "#1a8011", "#436a9f", "#1a806a"];

const ScatterPlot = ({ data, xAxisAttribute, yAxisAttribute, colorAttribute, lineAttribute, backgroundAttribute }) => { 

//<-------get a list of non-numeric variable values, non-repeated------>
  let colorData = data.map((d, i) => {
    if (d[colorAttribute] === undefined || d[colorAttribute] === "NULL") {
      return d[0];
    }
    return d[colorAttribute];
  });

  function getValues(a){
    var array = [];
    for (var i = 0; i < a.length; i++) {
        if (array.indexOf(a[i]) === -1) {
            array.push(a[i]);
        }
    }
    return array;
  }

  var values = getValues(colorData); 
  // console.log(colorData);
  // console.log(values)

  // function checkValue(a){
  //     return a == colorData[j];
  // }

  // let fillColor = [];
  // for (var j = 0; j < colorData.length; j++) {
  //   var index = values.findIndex(checkValue)
  //   fillColor.push(randomColors[index]);
  // }
//<-------get a list of non-numeric variable values, non-repeated------>

  let xData;
  let yData;

  let traces = values.map((key, i) => {
    xData = data
      .filter((d) => d[colorAttribute] === key)
      .map((d) => d[xAxisAttribute]);

    yData = data
      .filter((d) => d[colorAttribute] === key)
      .map((d) => d[yAxisAttribute]);
  
    colorData = data
      .filter((d) => d[colorAttribute] === key)
      .map((d) => d[colorAttribute]);

    return {
      x: xData,
      y: yData,
      text: colorData,
      mode: "markers",
      type: "scatter",
      name: key.toString(),
      marker: {
        size: 7,
        color: randomColors[i],
        opacity: 0.3
      },
      hovertemplate:
        "<b>" + xAxisAttribute + "</b>: %{x}" +
        "<br><b>" + yAxisAttribute + "</b>: %{y}<br>" +
        "<b>" + colorAttribute + "</b>: %{text}"
        + "<extra></extra>",
    };
  });
  

  //<------new arrays for sorting x/y data > get min/max------>
  let xDataSorted = data.map((d, i) => {
    if (d[xAxisAttribute] === undefined || d[xAxisAttribute] === "NULL") {
      return "UNKNOW";
    }
    return d[xAxisAttribute];
  });
  let yDataSorted = data.map((d, i) => {
    if (d[yAxisAttribute] === undefined || d[yAxisAttribute] === "NULL") {
      return "UNKNOW";
    }
    return d[yAxisAttribute];
  });
  function myFunction(total, value, index, array) {
    return total + value;
  }
  let xAverage = xDataSorted.reduce(myFunction) / xDataSorted.length;
  let yAverage = xDataSorted.reduce(myFunction) / yDataSorted.length;
  xDataSorted.sort(function(a, b){return a-b});
  yDataSorted.sort(function(a, b){return a-b});
   //<------new arrays for sorting x/y data > get min/max------>



  function show(l){
    if (l == true){
      return 1;
    } else {
      return 0;
    }
  }
  let layout = {
      height: 600,
      margin: {
        pad: 5,
      },
      // transition: {
      //   duration: 500,
      // },
      showlegend: true,
      xaxis: { 
        // range: [xDataSorted[0]-2, xDataSorted[xDataSorted.length-1]+2],
        // dtick: 5,
        showgrid: true,
        showticklabels: true },
      yaxis: { 
        // range: [yDataSorted[0]-2, yDataSorted[yDataSorted.length-1]+2],
        // dtick: 5,
        showgrid: true,
        showticklabels: true },
      title: "Scatter Plot Graph",
      hoverlabel: { bgcolor: "#FFF" },
      shapes: [
        {
          type: 'line',
          name: 'Average Line',
          x0: xAverage,
          y0: 0,
          x1: xAverage,
          y1: yDataSorted[yDataSorted.length-1],
          line: {
            color: '#fec89a',
            width: 2,
          },
          opacity: show(lineAttribute)*0.8
        },
        {
          type: 'line',
          name: 'Average Line',
          x0: 0,
          y0: yAverage,
          x1: xDataSorted[xDataSorted.length-1],
          y1: yAverage,
          line: {
            color: '#fec89a',
            width: 2,
          },
          opacity: show(lineAttribute)*0.8
        },
        {
          type: 'rect',
          x0: xAverage,
          y0: yAverage,
          x1: xDataSorted[xDataSorted.length-1],
          y1: yDataSorted[yDataSorted.length-1],
          fillcolor: '#fec89a',
          opacity: show(backgroundAttribute)*0.1,
          line: {
            width: 0
          }
      },
      ]
    };

  return (
    <>
      <Plot className="" data={traces} layout={layout} />
    </>
  );
};

export default ScatterPlot;
