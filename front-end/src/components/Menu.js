import './Menu.css';
import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ToggleSwitch from './ToggleSwitch';
import DropdownMenu from './DropdownMenu';
import GraphMenu from './GraphMenu';
import ViewInsights from './ViewInsights';
import CloseBtn from './CloseBtn';
import { InboxIcon } from '@heroicons/react/solid';

//universal data
let info = "";
let previousInfo = "";
const display = false;
let id = "graph #1";



//next steps: get the user object

function Search() {
  let [isToggleOn, setToggle] = useState(false);
  const onChange = (checked) => {
    setToggle(checked);
  };
  const labelDS = 'Select a Dataset';
  const labelVariables = 'Select Variables';
  const labelFilters = 'Select Filters';

  const [database, setDS] = useState('');
  const [x, setX] = useState('');
  const [y, setY] = useState('');
  const [selectedFilters, setFilters] = useState('');

  const [variableArray, setVariableArray] = useState([]);
  const chartNames = ['Histogram', 'BarChart', 'Boxplot']; //need to add titles to graphs
  const variables = ['Time', 'Age', 'Birthplace'];
  const filters = ['filter A', 'filter B', 'filter C'];
  const datasetNames = ['US Census', 'Restaurant Data'];

  function showVariables(array) {
    for (let x in array) {
      <CloseBtn variable={x} />;
    }
  }

  function validate(string) {
    let array = string.split(',');
    for (let x in array) {
      if (variables.includes(x)) {
        continue;
      } else {
        return x;
      }
    }
    return true;
  }
  function getVariables(str) {
    let array = str.split(',');
    setVariableArray(array);
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
    const submitObject = {
      id,
      database,
      x,
      y,
      selectedFilters
    }
    info = submitObject;
    console.log(info);
  }

  return (
    <>
      <form>
        {/* <ToggleSwitch id='switch' checked={isToggleOn} onChange={onChange} />
        {display ? <p>Toggle: {isToggleOn ? 'select' : 'query'}</p> : ''} */}
        <br />

        <DropdownMenu
          selected={database}
          setSelected={setDS}
          label={labelDS}
          options={datasetNames}
        />
        {display ? <p>Selected Dataset is {database}</p> : ''}

        <DropdownMenu
          selected={x}
          setSelected={setX}
          label={labelVariables}
          options={variables}
        />
          <DropdownMenu
          selected={y}
          setSelected={setY}
          options={variables}
        />
        {display ? <p>Selected variables are {x}</p> : ''}

        <DropdownMenu
          selected={selectedFilters}
          setSelected={setFilters}
          label={labelFilters}
          options={filters}
        />
        {display ? <p>Selected filters are {selectedFilters}</p> : ''}
        <br />
        <button class='bg-green-500 hover:bg-green-700 mt-10 px-7 py-3 shadow-ml rounded-lg text-white'
        onClick={handleSubmit}>Create Graph</button>
      </form>
    </>
  );
}

class Menu extends Component {

  constructor(props){
    super(props);
    this.state = {
        data: this.props.dataParentToChild
    }
  }

  // send info to graph
    childFunction=(e)=>{
      console.log('send')
      e.preventDefault();
      this.props.functionCallFromParent(info);
    }
  ///////////
  

  render (){
    return (
      <>
        <div className='Menu'  onClick={this.childFunction.bind(this)}>
          <Tabs>
            <TabList>
              <Tab >
                <p className='menu-p' >Select</p>
              </Tab>
              <Tab>
                <p className='menu-p'>Modify</p>
              </Tab>
              <Tab>
                <p className='menu-p'>Summarize</p>
              </Tab>
            </TabList>

            <TabPanel>
              <div className='panel-content'>
                <br />
                <Search/>
              </div>
            </TabPanel>
            <TabPanel>
              <div className='panel-content'>
                <ViewInsights />
              </div>
            </TabPanel>
            <TabPanel>
              <div className='panel-content'>
                <ViewInsights />
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </>
    );
  }
}
export default Menu;
