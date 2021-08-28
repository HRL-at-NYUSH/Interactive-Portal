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

const ScatterPlot = ({ data, xAxisAttribute, yAxisAttribute, colorAttribute, symbolAttribute, lineAttribute, backgroundAttribute }) => { 

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
  let valueS = getValues(symbolData);
  

  // for (var i = 0; i < valueC.length; i++) {
  //   var v = {color: valueC[i]} 
  //   values.push(v); 
  // }
  //   for (var j = 0; j < valueS.length; j++) {
  //     var m = {symbol: valueS[j]}
  //     values.push(m); 
  //   }
  // // console.log(colorData);
  // console.log(values)

  // function checkValue(a){
  //     return a == colorData[j];
  // }

  // let symbol = [];
  // for (var j = 0; j < symbolData.length; j++) {
  //   var index = valueS.findIndex(checkValue)
  //   symbolData.push(symbols[index]);
  // }

  // let fillColor = [];
  // for (var j = 0; j < colorData.length; j++) {
  //   var index = values.findIndex(checkValue)
  //   fillColor.push(randomColors[index]);
  // }
//<-------get a list of non-numeric variable values, non-repeated------>
  var j = 0;
  let traces = values.map((key, i) => {
    j++;

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
        return symbols[1]
      } else if ( d[symbolAttribute] === 'Unemployed' ){
        return symbols[2]
      } else if (d[symbolAttribute] === 'NULL'){
        return symbols[3]
      } else {
        return symbols[0]
      }
    });

    return {
      x: xData,
      y: yData,
      text: colorData,
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
        "<b>" + colorAttribute + "</b>: %{text}" 
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
   //<------new arrays for sorting x/y data > get min/max------>


  // var step = Math.round((xDataSorted[xDataSorted.length-1]-xDataSorted[0])/9);
  // // console.log(xDataSorted[xDataSorted.length-1], xDataSorted[0], step)
  // var sliderSteps = [];
  // for (var i = 0; i < 10; i++) {
  //   sliderSteps.push({
  //     method: 'relayout',
  //     label: xDataSorted[0]+step*i,
  //     args: [[xDataSorted[0]+step*i], {
  //       mode: 'immediate',
  //       transition: {duration: 300},
  //       frame: {duration: 300, redraw: false},
  //     }]
  //   });
  // }
  var trash = document.getElementById("trash");
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
        // if (this.handle.type != 'spawn') {
            trash.setAttribute("display", "inline");
            trash.style.fill = "rgb(254, 200, 154)";
            // destroyHandle(points[0].handle);
        //}
    });
    drag.on("drag", function() {
        var xmouse = d3.event.x, ymouse = d3.event.y;
        d3.select(this).attr("transform", "translate(" + [xmouse, ymouse] + ")");
        var xaxis = figurecontainer._fullLayout.xaxis;
        var yaxis = figurecontainer._fullLayout.yaxis;
        var handle = this.handle;
        if (handle.type != 'endpoint') handle.x = clamp(xaxis.p2l(xmouse), xaxis.range[0], xaxis.range[1] - 1e-9);
        //if (handle.type == 'spawn' && handle.x > handles[1].x) {
            trash.setAttribute("display", "inline");
            trash.style.fill = "rgb(254, 200, 154)";
            handle.type = 'normal';
        //}
        handle.y = clamp(yaxis.p2l(ymouse), yaxis.range[0], yaxis.range[1]);
        // if (handle.x < firstx) {    // release from the interpolation if dragged beyond the leftmost breakpoint
        //     handle.type = 'spawn';
        //     trash.style.fill = "#a00";              
        // }
        // updateFigure();
    });
    drag.on("dragend", function() {
        // if (this.handle.x < firstx) destroyHandle(this.handle);
        // addHandle('spawn');
        // updateFigure();
        // updatePointHandles();
        trash.setAttribute("display", "none");
        d3.select(".scatterlayer .trace:last-of-type .points path:last-of-type").call(drag);    
    });
    d3.selectAll(".scatterlayer .trace:last-of-type .points path").call(drag);
}

  // var showLine1;
  // var showLine2;

  // function showLine(l){
  //   if (lineAttribute == 1){
  //     showLine1 = 1;
  //     showLine2 = 0;
  //   } else if (lineAttribute == 2){
  //     showLine1 = 0;
  //     showLine2 = 1;
  //   } else {
  //     showLine1 = 0;
  //     showLine2 = 0;
  //   }
  // }
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
        // 'itemsizing': 'constant',
      },
      xaxis: { 
        // range: [xDataSorted[0]-2, xDataSorted[xDataSorted.length-1]+2],
        // dtick: 5,
        rangeslider: {},
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
          name: 'Average Line - X Axis',
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
        },
        // {
        //   type: 'line',
        //   name: 'Average Line',
        //   x0: xDataSorted[0],
        //   y0: yAverage,
        //   x1: xDataSorted[xDataSorted.length-1],
        //   y1: yAverage,
        //   line: {
        //     color: 'grey',
        //     width: 2,
        //   },
        //   opacity: (lineAttribute-1)+1,
        //   editable: true
        // }
      ],
      // sliders: [{
      //   pad: {l: 5, t: 10},
      //   currentvalue: {
      //     visible: true,
      //     prefix: 'Year:',
      //     xanchor: 'left',
      //     font: {size: 10, color: '#000'}
      //   },
      //   steps: sliderSteps
      // }]
      };

  return (
    <>
      <Plot className="" divId="figurecontainer" data={traces} layout={layout} editable={true} />
    </>
  );
};

export default ScatterPlot;
