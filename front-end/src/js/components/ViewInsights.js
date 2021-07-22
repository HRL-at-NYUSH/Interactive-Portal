import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import DropdownMenu from './DropdownMenu'
import CloseBtn from './CloseBtn'

function ViewInsights() {
  const labelDS = 'Select a Dataset'
  const [database, setDS] = useState('')
  const [one, setOne] = useState('')
  const [two, setTwo] = useState('')
  const [gender, setGender] = useState('')
  const [method, setMethod] = useState('')
  const [birthplace, setBirthplace] = useState('')
  const [year, setYear] = useState('')
  const [occupation, setOccupation] = useState('')
  const variables = ['gender', 'year', 'birthplace', 'occupation']
  const display = false
  const datasetNames = ['US Census', 'Restaurant Data']
  const genders = ['female', 'male']
  const years = [1850, 1860, 1870]
  const birthplaces = ['Russia', 'United States', 'England']
  const occupations = ['Clerk', 'Housekeeper', 'Construction Worker']
  const methods = ['correlation', 'standard deviation', 'median', 'mean']

  function getVariables(str) {
    let array = str.split(',')
    //setMethods(array) //tbd
    /*
      let correct = []
      let incorrect = []
  
      //do more nlp querying here
      for (let x in array) {
        if (variables.includes(x)) {
          correct.push(x)
        } else {
          incorrect.push(x)
        }
      }
      setVariableArray(correct)
      */
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const insightObject = {
      database,
      one,
      two,
      gender,
      occupation,
      birthplace,
      year,
    }
    console.log(insightObject)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <br />
        <br />
        <DropdownMenu
          selected={database}
          setSelected={setDS}
          label={labelDS}
          options={datasetNames}
        />
        <br />
        {display ? <p>Selected Dataset is {database}</p> : ''}
        <br />
        <p>
          Enter Variable names <br />
          <i id="comment">For example: age, year, gender</i>
        </p>
        <br />
        <DropdownMenu
          selected={one}
          setSelected={setOne}
          label={'Select Variable 1'}
          options={
            variables //to be replaced with variableArray
          }
        />
        {display ? <p>one is {one} </p> : ''}
        <br />
        <DropdownMenu
          className="drop-axis"
          selected={two}
          setSelected={setTwo}
          label={'Select Variable 2'}
          options={variables}
        />
        {display ? <p>two is {two} </p> : ''}

        <DropdownMenu
          selected={method}
          setSelected={setMethod}
          label={'Select Statistical term'}
          options={
            methods //to be replaced with variableArray
          }
        />
        {display ? <p>one is {one} </p> : ''}
        <br />
        {one === 'gender' || two === 'gender' ? (
          <DropdownMenu
            className="drop-axis"
            selected={gender}
            setSelected={setGender}
            label={'Select Gender'}
            options={genders}
          />
        ) : (
          ''
        )}
        {one === 'occupation' || two === 'occupation' ? (
          <DropdownMenu
            className="drop-axis"
            selected={occupation}
            setSelected={setOccupation}
            label={'Select Occupation'}
            options={occupations}
          />
        ) : (
          ''
        )}
        {one === 'year' || two === 'year' ? (
          <DropdownMenu
            className="drop-axis"
            selected={year}
            setSelected={setYear}
            label={'Select Year'}
            options={years}
          />
        ) : (
          ''
        )}
        {one === 'birthplace' || two === 'birthplace' ? (
          <DropdownMenu
            className="drop-axis"
            selected={birthplace}
            setSelected={setBirthplace}
            label={'Select Birthplace'}
            options={birthplaces}
          />
        ) : (
          ''
        )}
        <br />
        <button className="btn">View Insights</button>
      </form>
    </>
  )
}
export default ViewInsights
