import React from 'react'
import Plot from 'react-plotly.js'

let symbols = [
  "circle",  "x", "arrow-right-open", "hexagram", 
  "hexagon",   "cross", "octagon", "star-diamond", "arrow-left", 
];

let randomColors= 
[
    '#2dbc96',
    '#ffa600',
    '#58508d',
    '#bc5090'
];

const ScatterPlot = ({ data, xAxisAttribute, yAxisAttribute, colorAttribute, symbolAttribute, lineAttribute }) => { 

//<-------get a list of non-numeric variable values, non-repeated------>
  let xData = data.map((d, i) => {
    if (d[xAxisAttribute] === undefined || d[xAxisAttribute] === "NULL" || d[xAxisAttribute] === "") {
     return "UNKOWN"
    }
     return d[xAxisAttribute];
  });
  let yData = data.map((d, i) => {
    if (d[yAxisAttribute] === undefined || d[yAxisAttribute] === "NULL" || d[yAxisAttribute] === "") {
      return "UNKOWN"
    }
      return d[yAxisAttribute];
  });
  let colorData = data.map((d, i) => {
      if (d[colorAttribute] === undefined || d[colorAttribute] === "NULL" || d[colorAttribute] === "") {
        return ;
      }
      return d[colorAttribute];
    });

  let symbolData = data.map((d, i) => {
    if (d[symbolAttribute] === undefined || d[symbolAttribute] === "NULL" || d[symbolAttribute] === "") {
      return "UNKOWN";
    }
    return d[symbolAttribute];
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

  function setName(n){
    if (n === undefined || n === "NULL"){
      return "UNKOWN"
    } else {
      return n.toString();
    }
  }

  let values = getValues(colorData);
  let valuesSymbol = getValues(symbolData);
  
//<-------get traces by color groups------->
    var j = 0;
    var h = 0;
    let symbolText;
    let traces = values.map((key, i) => {
      j++;
      h++;

    xData = data
      .filter((d) => d[colorAttribute] === key)
      .map((d) => d[xAxisAttribute]);

    yData = data
      .filter((d) => d[colorAttribute] === key)
      .map((d) => d[yAxisAttribute]);
  
    colorData = data
      .filter((d) => d[colorAttribute] === key)
      .map((d) => d[colorAttribute]);
    
    symbolData = data.map((d, j) => {
      if (d[symbolAttribute] === 'Male' || d[symbolAttribute] === 'Employed' ){
        // symbolText.push(d[symbolAttribute]);
        return symbols[1]
      } else if ( d[symbolAttribute] === 'Unemployed' ){
        // symbolText.push(d[symbolAttribute]);
        return symbols[2]
      } else if (d[symbolAttribute] === 'NULL'){
        // symbolText.push(d[symbolAttribute]);
        return symbols[3]
      } else {

        return symbols[0]
      }
    });

    symbolText = data.map((d, h) => {
      return d[symbolAttribute];
    });

    return {
      x: xData,
      y: yData,
      text: symbolText,
      mode: "markers",
      type: "scatter",
      name: setName(key),
      marker: {
        symbol: symbolData,
        size: 8,
        color: randomColors[i],
        opacity: 0.7
      },
      hovertemplate:
        "<b>" + xAxisAttribute + "</b>: %{x}" +
        "<br><b>" + yAxisAttribute + "</b>: %{y}<br>" +
        // "<b>" + colorAttribute + "</b>: %{text}" 
        "<b>" + symbolAttribute + "</b>: %{text}" 
        + "<extra></extra>",
    };
  });  

  //<------new arrays for sorting x/y data > get min/max------>
  let xDataSorted = data.map((d, i) => {
    if (d[xAxisAttribute] === undefined || d[xAxisAttribute] === "NULL") {
      return "";
     } 
      return d[xAxisAttribute];
  });

  xDataSorted = xDataSorted.filter(function( element ) {
    return element !== "";
  });

  let yDataSorted = data.map((d, i) => {
    if (d[yAxisAttribute] === undefined || d[yAxisAttribute] === "NULL") {
      return "";
     } 
      return d[yAxisAttribute];
  });

  yDataSorted = yDataSorted.filter(function( element ) {
    return element !== "";
  });

  // console.log(yDataSorted);

  function myFunction(total, value, index, array) {
    return total + value;
  }
  let xAverage = xDataSorted.reduce(myFunction) / xDataSorted.length;
  let yAverage = yDataSorted.reduce(myFunction) / yDataSorted.length;
  xDataSorted.sort(function(a, b){return a-b});
  yDataSorted.sort(function(a, b){return a-b});



   //<------movable reference line------>

  var refLine = document.getElementById("refLine");
  var figurecontainer = document.getElementById("figurecontainer");

  function clamp(x, lower, upper) {
    return Math.max(lower, Math.min(x, upper));
  }

  function startDragBehavior() {
    var d3 = Plot.d3;
    var drag = d3.behavior.drag();
    drag.origin(function() {
        var transform = d3.select(this).attr("transform");
        var translate = transform.substring(10, transform.length-1).split(/,| /);
        return {x: translate[0], y: translate[1]};
    });
    drag.on("dragstart", function() {
      refLine.setAttribute("display", "inline");
    });
    drag.on("drag", function() {
        var xmouse = d3.event.x, ymouse = d3.event.y;
        d3.select(this).attr("transform", "translate(" + [xmouse, ymouse] + ")");
        var xaxis = figurecontainer._fullLayout.xaxis;
        var yaxis = figurecontainer._fullLayout.yaxis;
        var handle = this.handle;
        });
    drag.on("dragend", function() {
        refLine.setAttribute("display", "none");
        d3.select(".scatterlayer .trace:last-of-type .points path:last-of-type").call(drag);    
    });
        d3.selectAll(".scatterlayer .trace:last-of-type .points path").call(drag);
}
console.log(lineAttribute)

  let layout = {
      height: 650,
      margin: {
        pad: 5,
      },
      showlegend: true,
      legend: {
        x: 0,
        y: 1,
      },
      xaxis: { 
        rangeslider: {},
        showgrid: true,
        showticklabels: true },
      yaxis: { 
        showgrid: true,
        showticklabels: true },
      title: "Scatter Plot Graph",
      hoverlabel: { bgcolor: "#FFF" },
      shapes: [
        {
          type: 'line',
          name: 'Average Line - X Axis',
          divId: "refLine",
          x0: xAverage,
          y0: yDataSorted[0],
          x1: xAverage,
          y1: yDataSorted[yDataSorted.length-1],
          line: {
            color: 'grey',
            width: 2,
          },
          opacity: lineAttribute,
          editable: true
        }]
      };

  return (
    <>
      <Plot className="" divId="figurecontainer" data={traces} layout={layout} editable={true} />
    </>
  );
};

export default ScatterPlot;
