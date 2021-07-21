### Graph Guidelines

## Development requirements:

1. You should use the Plotly library and at most 3 other additional libraries (no minimum).
2. You should code your graph in the js file correponding to your assigned graph. For example, if you are working on the graph Box Plot, you should write your code in the file 'BoxPlot.js' inside the [graphs folder](/front-end/src/graphs/).
3. Please refer to the example Histogram graph in the Histogram.js file.
4. You can view your graph on the GraphDisplay page (on the header menu) after you include your graph component in the [GraphDisplay.js](/front-end/src/graphs/GraphDisplay.js) file. See below the example of Histogram component:

```
<Histogram
  data={dataNonGeo}
  xAxisAttribute={histoXAttr}
  title={`People from Different ${histoXAttr}`}
></Histogram>
```

5. Your component should have title and data object parameters (data parameter in Histogram.js file). You can optionally include xAxisAttribute, yAxisAttribute and other parameters as needed.

## Design requirements:

1. Please refer to the Graph Overview slides [here](https://docs.google.com/presentation/d/1PCT_KmKtl4cVDy2kbxht90w56cfO1XbcBfrrry4bJx0/edit#slide=id.p) to explore potential interactions for the graphs.
2. Otherwise, you have full creative freedom!
