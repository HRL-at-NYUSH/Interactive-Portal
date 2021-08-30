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
    autosize: true,
    width: 1280,
    height: 800,
    // margin: {
    //   l: 50,
    //   r: 50,
    //   b: 100,
    //   t: 100,
    //   pad: 6,
    // },
    title: title.length > 0 ? title : 'Untitled Box Plot',
  };

  // layout options
  layout[options.horizontal ? 'xaxis' : 'yaxis'] = { title: yAxisAttribute };
  layout.showlegend = options.showLegend;

  // extract unique keys
  let xKeys = data.map((d) => d[xAxisAttribute]).filter(onlyUnique);
  // composing the traces
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

  // optional overlay scatter plot
  if (options.overlayScatterPlot) {
    let scatterTraces = traces.map((trace) => ({
      x: Array(trace.y.length).fill(trace.name),
      y: trace.y,
      name: trace.name,
      mode: 'markers',
      type: 'scatter',
    }));
    traces = traces.concat(scatterTraces);
  }
  // optional overlay violin plot
  if (options.overlayViolinPlot) {
    let violinTraces = traces.map((trace) => ({
      x: trace.x,
      y: trace.y,
      name: trace.name,
      type: 'violin',
    }));
    traces = traces.concat(violinTraces);
  }

  let config = {
    modeBarButtonsToRemove: ['zoomIn', 'zoomOut'],
    editable: true,
    scrollZoom: true,
    // responsive: true,
  };

  return <Plot data={traces} layout={layout} config={config}></Plot>;
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
