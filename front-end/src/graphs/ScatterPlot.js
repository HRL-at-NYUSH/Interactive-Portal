import React from "react";
import Plot from "react-plotly.js";
import { dataNonGeo } from "../js/utils/MockData";

const ScatterPlot = ({ data, xAxisAttribute, yAxisAttribute }) => {
  let xData = data.map((d) => {
    if (d[xAxisAttribute] === undefined || d[xAxisAttribute] === "NULL") {
      return "UNKOWN";
    }
    return d[xAxisAttribute];
  });

  let yData = data.map((d) => {
    if (d[yAxisAttribute] === undefined || d[yAxisAttribute] === "NULL") {
      return "UNKOWN";
    }
    return d[yAxisAttribute];
  });

  var datapoints = {
    x: xData,
    y: yData,
    text: [],
    mode: "markers",
    type: "scatter",
    marker: {
      size: 12,
      color: "rgba(90, 201, 203, 0.5)",
    },
    hovertemplate:
      "<b>Age</b>: %{y}" +
      "<br><b>Immigration Year</b>: %{x}<br>" +
      "<extra></extra>",
  };

  var data = [datapoints];

  let layout = {
    margin: {
      pad: 5,
    },
    transition: {
      duration: 500,
      easing: "cubic",
    },
    frame: {
      duration: 500,
    },
    xaxis: { showgrid: false },
    yaxis: { showgrid: false },
    line: {
      width: 0,
    },
    title: "Scatter Plot Graph",
    hoverlabel: { bgcolor: "#FFF" },
  };

  return (
    <>
      <Plot className="" data={data} layout={layout} />
    </>
  );
};

export default ScatterPlot;
