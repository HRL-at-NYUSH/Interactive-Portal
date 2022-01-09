import React from 'react'
import Plot from 'react-plotly.js'

let test = [];
let data;
let num;

const Correlation = ({bothAxisAttribute}) => {
//const Correlation = () => {
//

    test = [];
    for (var i = 0; i < bothAxisAttribute.length; i++){
      num = bothAxisAttribute[i].value;
      if (num !== 'empty' || num !== undefined){
        test[i] = num;
      } 
    }

    console.log(test);

    let trace1 = {
      z: [[1,	0.293725549468303,	-0.30509232360096,	-0.385934521059537,	-0.118213064594059,	0.256731262380705,	0.278255483537607], 
          [0.293725549468303,	1,	-0.329295682183085,	-0.298496231131986,	-0.256907527519235,	-0.201739297696056,	-0.11555528278658], 
          [-0.30509232360096,	-0.329295682183085,	1,	0.155685168447387,	-0.274708277150018,	0.289048275093248,	0.0894523492172873],
          [-0.385934521059537,	-0.298496231131986,	0.155685168447387,	1,	0.1,	0.5,	0.0],
          [-0.118213064594059,	-0.256907527519235,	-0.274708277150018,	0.1,	1,	0.5,	0.8],
          [0.256731262380705,	-0.201739297696056,	0.289048275093248,	0.5, 0.5,	1,	0.8],
          [0.278255483537607,	-0.11555528278658,	0.0894523492172873,	0.0, 0.8,	0.8,	1]],
      //x: ['Year', 'Sex', 'Race', 'Age', 'Relation', 'Marriage', 'Family Size', 'Birthplace', 'Mother POB', 'Father POB', 'Nativity', 'Citizenship', 'Immigration Year', 'Literacy', 'EDSCORE50', 'OCC1995', 'OCCSCORE', 'PRESGL', 'EMPSTAT', 'Income Wage'],
      //y: ['Year', 'Sex', 'Race', 'Age', 'Relation', 'Marriage', 'Family Size', 'Birthplace', 'M-Birthplace', 'F-Birthplace', 'Nativity', 'Citizenship', 'Immigration Year', 'Literacy', 'EDSCORE50', 'OCC1995', 'OCCSCORE', 'PRESGL', 'EMPSTAT', 'Income Wage'],
      x: test,
      y: test,
      dx: 1, 
      dy: 1, 
      x0: 0, 
      y0: 0, 
      scl: [['0', 'rgb(30,10,30)'], ['0.1', 'rgb(70,10,70)'], ['0.2', 'rgb(110,40,110)'], ['0.3', 'rgb(170,60,150)'], ['0.4', 'rgb(230,90,115)'], ['0.5', 'rgb(255,90,95)'], ['0.6', 'rgb(255,90,55)'], ['0.7', 'rgb(255,110,75)'], ['0.8', 'rgb(255,150,100)'], ['0.9', 'rgb(255,200,180)'], ['1', 'rgb(255,240,240)']], 
      name: 'trace 0', 
      type: 'heatmap', 
      //zsrc: 'plotly.js:12:', 
      zauto: true
    };

    if (test.length == 0){
      data = [];
    } else {
      data = [trace1]
    }
  
    let layout = {
      font: {
        size: 8, 
        color: '#000', 
        family: 'Arial, sans-serif'
      }, 
      //title: 'Correlation Matrix', 
      width: 600,
      bargap: 0.2,
     legend: {
        font: {
          size: 0, 
          color: '', 
          family: ''
        }, 
        bgcolor: '#fff', 
        //traceorder: 'normal', 
        bordercolor: '#000', 
        borderwidth: 1
      }, 
      margin: {
        b: 50, 
        l: 120, 
        r: 120, 
        t: 50, 
        pad: 2, 
        autoexpand: true
      }, 
      xaxis:{
        dtick: 1
      },
      yaxis:{
        dtick: 1
      },
      autosize: false, 
      //dragmode: 'zoom', 
      hovermode: 'x', 
    }
    return (
      <>
        <Plot data={data} layout={layout}/>
      </>
    );
}

export default Correlation
