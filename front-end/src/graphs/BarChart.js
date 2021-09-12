import React from 'react'
import Plot from 'react-plotly.js'
import Plotly from 'plotly.js'
import _ from 'lodash'

const BarChart = ({data, xAxisAttribute}) => { 
  console.log(data);

  let xDataTemp = data.map((d) => {
    return d[xAxisAttribute];
  });
  
  var filteredX = xDataTemp.filter(function (key) {
    return key != 'NULL';
  });

  let xDataTemp2 = data.map((d) => {
    return d[xAxisAttribute];
  });

  var filteredX2 = xDataTemp2.filter(function (key) {
    return key != 'NULL';
  });

  //count xDataTemp
  let countOriginal = 0;
  for (var c1 in xDataTemp) {
    countOriginal = countOriginal + 1;
  }
  //count filteredX
  var countNullTemp = 0;
  for (var c2 in filteredX) {
    countNullTemp = countNullTemp + 1;
  }
  //number of null values
  var countNull = countOriginal - countNullTemp

  //get counts of categories (xAxisAttribute)
  var tempResult = {}

  for(let key1 of filteredX)
    tempResult[key1] = { 
      key1, 
        key2: tempResult[key1] ? tempResult[key1].key2 + 1 : 1
    }      
  var tempResult2 = {}

    for(let key1 of filteredX2)
      tempResult2[key1] = { 
        key1, 
          key2: tempResult2[key1] ? tempResult2[key1].key2 + 1 : 1
      } 

  function keysAndValues(obj) {
    var keys = [], values = [];
    for (var p in obj) {
        keys.push(p);
        values.push(obj[p]['key2']);
    }
    return [keys, values];
}
  
  let xyData = keysAndValues(tempResult)

  let xData = xyData[0]
  let yData = xyData[1]

  let yData2 = xyData[0]
  let xData2 = xyData[1]
  
  console.log(xData)
  console.log(yData)

  let config = {
    showLink: false,
    displayModeBar: true,
    scrollZoom: true,
    displaylogo: false,
    toggleHover: true,
    modeBarButtonsToRemove: ['zoom', 'pan','lasso','zoomin','zoomout'],
  };
  var graph = [
    //horizontal graph
    {
      type: 'bar',
      x: xData2,
      y: yData2,
      marker: {
        color: 'rgba(255, 100, 102, 0.7)',
      },
      name:xAxisAttribute,
      orientation:'h',
      xaxis: { title: 'Count' },
      yaxis: { title: xAxisAttribute },
      visible: false,
    },
    //vertical graph
    {
      type: 'bar',
      y: yData,
      x: xData,
      orientation:'v',
      name:`<br>${xAxisAttribute}<br>`,
      marker: {
        color: 'rgba(255, 100, 102, 0.7)'},
      hovertemplate: '<br><b>%{x}</b>: %{y}<br>'},
    //vertical graph, descending
    {
      type: 'bar',
      y: yData,
      x: xData,
      orientation:'v',
      name:`<br>${xAxisAttribute}<br>`,
      marker: {
        color: 'rgba(255, 100, 102, 0.7)'},
      hovertemplate: '<br><b>%{x}</b>: %{y}<br>',
      transforms: [{
        type: 'sort',
        target: 'y',
        order: 'descending'
      }],
      visible: false,

    },
    //vertical graph, ascending
    {
      type: 'bar',
      y: yData,
      x: xData,
      orientation:'v',
      name:`<br>${xAxisAttribute}<br>`,
      marker: {
        color: 'rgba(255, 100, 102, 0.7)'},
      hovertemplate: '<br><b>%{x}</b>: %{y}<br>',
      transforms: [{
        type: 'sort',
        target: 'y',
        order: 'ascending'
      }],
      visible: false,
    }
    ]
 
  var updatemenus=[
      {
          buttons: [
              {
                  args: [{'visible': [true, false,false,false]}],
                  label: 'Horizontal View',
                  method: 'update'
              },
              {
                  args: [{'visible': [false, true, false,false]}],
                  label: 'Vertical View',
                  method: 'update'
              },
              {
                args: [{'visible': [false,false, true,false]}],
                label: 'Descending order',
                method: 'update'
              },
              {
                args: [{'visible': [false,false,false,true]}],
                label: 'Ascending order',
                method: 'update'
              },
          ],
          font: {size:11},
          direction: 'left',
          pad: {'r': 8, 't': 90},
          showactive: true,
          type: 'buttons',
          x: 0.1,
          xanchor: 'left',
          yanchor: 'bottom'
      },
  ]
  
  let layout = {
    title:`<b>People from different ${xAxisAttribute}</b> <br> Number of null values: ${countNull}`,
    autosize: true,
    hovermode:'closest',
    updatemenus: updatemenus,
    xaxis:{
      tickangle:-45,
    },
    };

  return (
     <div id='myDiv'>
      <Plot
      data ={graph}
      layout = {layout}
      config = {config}
      />
      </div>
  );
  }
export default BarChart;

/* return (
   <>
    <div id='myDiv'>
      <Plot
        data ={graph}
        layout = {layout}
        config = {config}
          />
      </div>
    <script>{
      var myPlot = document.getElementById('myDiv')
      myPlot.on('plotly_hover', function(data){
        var pn='',
            tn='',
            colors=[];
        for(var i=0; i < data.points.length; i++){
          pn = data.points[i].pointNumber;
          tn = data.points[i].curveNumber;
          colors = data.points[i].data.marker.color;
         };
         colors[pn] = '#C54C82';
        
          var update = {'marker':{color: colors, size:16}};
          Plotly.restyle('myDiv', update, [tn]);
        });
      
      //unhover
        myPlot.on('plotly_unhover', function(data){
          var pn='',
              tn='',
              colors=[];
          for(var i=0; i < data.points.length; i++){
            pn = data.points[i].pointNumber;
            tn = data.points[i].curveNumber;
            colors = data.points[i].data.marker.color;
          };
          colors[pn] = '#00000';
        
          var update = {'marker':{color: colors, size:16}};
          Plotly.restyle('myDiv', update, [tn]);
        });
    }
    </script>
    </>
    )
  
export default BarChart;
    */
