import React from 'react';
import Plot from 'react-plotly.js';

function BoxPlot({ data, xAxisAttribute, yAxisAttribute, title }) {
  let layout = {
    autosize: true,
    // width: 500,
    // height: 500,
    // margin: {
    //   l: 50,
    //   r: 50,
    //   b: 100,
    //   t: 100,
    //   pad: 6,
    // },
    title: title || 'Untitled',
    yaxis: { title: yAxisAttribute },
  };

  let xKeys = data.map((d) => d[xAxisAttribute]).filter(onlyUnique);

  let traces = xKeys.map((key, i) => {
    let yData = data
      .filter((d) => d[xAxisAttribute] === key)
      .map((d) => d[yAxisAttribute])
      .map(stringifyValue);

    return {
      y: yData,
      name: stringifyValue(key),
      boxpoints: 'all',
      jitter: 0.3,
      pointpos: -1.8,
      type: 'box',
    };
  });

  console.log(traces);

  // an example trace of Box Plot
  // {
  //   y: yData,
  //   boxpoints: 'all',
  //   jitter: 0.3,
  //   pointpos: -1.8,
  //   type: 'box',
  // }

  return <Plot data={traces} layout={layout}></Plot>;
}

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

function stringifyValue(x) {
  if (x === undefined || x === null) {
    return 'UNKNOWN';
  }
  return x.toString();
}

export default BoxPlot;
