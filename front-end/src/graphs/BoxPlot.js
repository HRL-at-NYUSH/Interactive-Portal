import React from 'react';
import Plot from 'react-plotly.js';

function BoxPlot({
  data,
  xAxisAttribute,
  yAxisAttribute,
  title = 'Untitled Box Plot',
  options = {},
}) {
  let layout = {
    // autosize: true,
    width: 1280,
    // height: 500,
    // margin: {
    //   l: 50,
    //   r: 50,
    //   b: 100,
    //   t: 100,
    //   pad: 6,
    // },
    title: title.length > 0 ? title : 'Untitled Box Plot',
  };

  // options
  layout[options.horizontal ? 'xaxis' : 'yaxis'] = { title: yAxisAttribute };
  layout.showlegend = options.showLegend;
  // extract unique keys
  let xKeys = data.map((d) => d[xAxisAttribute]).filter(onlyUnique);

  let traces = xKeys.map((key, i) => {
    let result = {
      name: stringifyValue(key),
    };

    let yData = data
      .filter((d) => d[xAxisAttribute] === key)
      .map((d) => d[yAxisAttribute])
      .map(stringifyValue);

    // options
    result[options.horizontal ? 'x' : 'y'] = yData;
    if (options.displayPoints) result.boxpoints = 'all';
    if (options.displayMeanAndStandardDeviation) result.boxmean = 'sd';

    return {
      ...result,
      jitter: 0.3,
      pointpos: -1.8,
      type: 'box',
    };
  });
  // console.log(traces);

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
