import React, { useState, Component } from 'react'
import ReactDOM from 'react-dom'
import DropdownMenu from './DropdownMenu'
import CloseBtn from './CloseBtn'

function ViewInsights() {

  const labelX = 'X-axis';
  const labelY = 'Y-axis';
  const labelColor = 'Explore with Color'
  const labelSymbol = 'Explore with Symbol'

  //test with scatter plot attributes
  const [color, setColor] = useState("");
  const [symbol, setSymbol] = useState("");

  const variables = ['Time', 'Age', 'Immigration_year']
  const display = false
  const colorChoices = ['Gender', 'Person']
  const birthplaces = ['Russia', 'United States', 'England']

  // function getVariables(str) {
  //   let array = str.split(',')
  //   //setMethods(array) //tbd
  //   /*
  //     let correct = []
  //     let incorrect = []
  
  //     //do more nlp querying here
  //     for (let x in array) {
  //       if (variables.includes(x)) {
  //         correct.push(x)
  //       } else {
  //         incorrect.push(x)
  //       }
  //     }
  //     setVariableArray(correct)
  //     */
  // }
  const handleSubmit = (e) => {
    e.preventDefault()
    const submitObject = {
      color,
      symbol,
    }
  }

 

  return (
    <form onSubmit={handleSubmit}>
      <br />
      <br />

      <DropdownMenu
          selected={color}
          setSelected={setColor}
          label={labelColor}
          options={colorChoices}
        />
      {display ? <p>Selected is {color}</p> : ''}

      <DropdownMenu
          selected={symbol}
          setSelected={setSymbol}
          label={labelSymbol}
          options={birthplaces}
        />
      {display ? <p>Selected is {symbol}</p> : ''}
    
     
</form>
  );
}
export default ViewInsights
