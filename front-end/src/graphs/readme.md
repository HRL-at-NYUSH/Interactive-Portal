### Graph Guidelines

## Development requirements:

1. You should use the Plotly library and at most 3 other additional libraries (no minimum).
2. You should code your graph in the js file correponding to your assigned graph. For example, if you are working on the graph Box Plot, you should write your code in the file 'BoxPlot.js' inside the [graphs folder](/front-end/src/graphs/).
3. Please refer to the example Histogram graph in the [Histogram.js](/front-end/src/graphs/Histogram.js) file.
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

1. Please refer to the Graph Overview slides [here](https://docs.google.com/presentation/d/1PCT_KmKtl4cVDy2kbxht90w56cfO1XbcBfrrry4bJx0/edit#slide=id.p) to explore potential interactions for the graphs. You should implement at least one interaction for your graph (more than one is preferred).
2. Please refer to the Plotly documentation for React [here](https://plotly.com/javascript/react/#plotlyjs-chart-types-and-attributes).
3. To style your graph, you can use tailwindcss library or your custom css files. 
- To learn more about tailwindcss, please refer to the notes [here](https://github.com/HRL-at-NYUSH/Interactive-Portal/tree/main/front-end#tailwind-css) and official documentation [here](https://tailwindcss.com/).
- If you want to use custom styling, create a 'GraphXXX.css' file in the [graphs folder](/front-end/src/graphs/) and replace 'GraphXXX' with the name of your graph (e.g. if you are working on histogram, your file will be 'Histogram.css'). Don't forget to import this css file to your js file!
4. Make sure that your graph parameters and visualization take into account different variable types (numeric, string, boolean). The mock data is stored in [this file](https://github.com/HRL-at-NYUSH/Interactive-Portal/blob/main/front-end/src/js/utils/MockData.js) and a sample usage of the mock data can be viewed on the Sample Data Use page (on the header menu).
5. After first week of development, reference the general web accessibility notes [here](https://docs.google.com/presentation/d/1PCT_KmKtl4cVDy2kbxht90w56cfO1XbcBfrrry4bJx0/edit#slide=id.ge39c248885_0_20) on slides 21-25.
6. Otherwise, you have full creative freedom!
