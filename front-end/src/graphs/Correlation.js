import React from 'react'
import Plot from 'react-plotly.js'

function Correlation() {

// intake data, and for each element find the correlation between that element and the other element
// save this data to a "z index", then save different values as x and y 

// for ( var i = 0; i < yValues.length; i++ ) {
//   for ( var j = 0; j < xValues.length; j++ ) {
//     var currentValue = zValues[i][j];
//     if (currentValue != 0.0) {
//       var textColor = 'white';
//     }else{
//       var textColor = 'black';
//     }
//     var result = {
//       xref: 'x1',
//       yref: 'y1',
//       x: xValues[j],
//       y: yValues[i],
//       text: zValues[i][j],
//       font: {
//         family: 'Arial',
//         size: 12,
//         color: 'rgb(50, 171, 96)'
//       },
//       showarrow: false,
//       font: {
//         color: textColor
//       }
//     };
//     layout.annotations.push(result);
//   }
// }

// Plotly.newPlot('myDiv', data, layout);



  return (
    <>
      <div>
        <h2 className="header-text">Correlation </h2>
        <div className="block">
          <p className="full-text">TBH</p>
        </div>
      </div>
      <Plot className="" data={traces} layout={layout} />
    </>
  )
}

export default Correlation
