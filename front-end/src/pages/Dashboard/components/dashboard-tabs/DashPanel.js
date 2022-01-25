import React, { useState } from 'react';
import DashTabs from './DashTabs';
import TabItem from './TabItem';
import DropNav from '../dropdown/DropNav';
import Item from '../dropdown/DropItem';
import { FaPlus } from 'react-icons/fa';
import { AiFillCloseSquare } from 'react-icons/ai';
import Time from './Time';
import Space from './Space';
import Playground from './Playground';
import Correlation from './Correlation';
import Menu from '@components/Menu';    
import InactiveMenu from '@components/InactiveMenu';   
import Distribution from './Distribution';     

import './DashPanel.css';
import ScatterPlot from '../graphs/ScatterPlot';
import Histogram from '../graphs/Histogram';
import BarChart from '../graphs/BarChart';
import Boxplot from '../graphs/Boxplot';
import { dataGeo, dataNonGeo } from '/Users/pw1101/Desktop/HRL/Interactive-Portal/front-end/src/utils/MockData.js';

let dcount = 0;
let tcount = 0;
let scount = 0;
let ccount = 0;
let pcount = 0;
let overallcount = 0;


//universal info
let input = "";
let workingTabNumber = 0;;
//////

//
let addedFirstGraph = false;


class DashPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value_key:"</>",
      tabitems:[]
    };
    
  }

  //receive info from menu
  parentFunction=(data_from_child)=>{
    console.log('received')
    this.setState({
      value_key:data_from_child,
    });
    input = data_from_child;

    if (data_from_child.id === 'graph #1') {
      this.setState((prevState) => ({
        tabitems: [
          // ...prevState.tabitems,
          { label: "ScatterPlot 1", element: <ScatterPlot 
                                                    data={dataNonGeo}
                                                    xAxisAttribute={input.x}
                                                    yAxisAttribute={input.y}
                                                    colorAttribute={1}
                                                    symbolAttribute={1}
                                                    /> },
        ],
      }))}; 
    console.log(input);
  }

  handleStateChange = (entry) => {
    if (isNaN(entry)) {
      if (overallcount > 5) {
        alert('Sorry! Too many tabs');
      } else if (entry === 'ScatterPlot') {
        this.setState((prevState) => ({
          tabitems: [
            ...prevState.tabitems,
            { label: entry + ' ' + dcount, element: <ScatterPlot 
                                                      data={dataNonGeo}
                                                      xAxisAttribute={input.x}
                                                      yAxisAttribute={input.y}
                                                      colorAttribute={1}
                                                      symbolAttribute={1}
                                                     /> },
          ],
        }));
        dcount += 1;
        overallcount += 1;
      } else if (entry === 'BarChart') {
        this.setState((prevState) => ({
          tabitems: [
            ...prevState.tabitems,
            { label: entry + ' ' + tcount, element: <BarChart /> },
          ],
        }));
        tcount += 1;
        overallcount += 1;
      } else if (entry === 'Boxplot') {
        this.setState((prevState) => ({
          tabitems: [
            ...prevState.tabitems,
            { label: entry + ' ' + scount, element: <Boxplot /> },
          ],
        }));
        scount += 1;
        overallcount += 1;
      } else if (typeof entry === 'number' && overallcount > 1) {
      this.setState((prevState) => ({
        tabitems: [
          ...prevState.tabitems.slice(0, entry),
          ...prevState.tabitems.slice(entry + 1),
        ],
      }));
      overallcount -= 1;
    }
  }
    //console.log(overallcount);
    addedFirstGraph = true;
  };

  render() {
    return (
      <>

        <div className='rows'>
        {addedFirstGraph ? (
          <Menu functionCallFromParent={this.parentFunction.bind(this)}
          />
          ) : (
          <InactiveMenu/>
            )}
        <div class="plus-btn-bg">
          <div> 
            <DropNav>
                <Item icon={<FaPlus />}>
                  <div className='dropdown'>
                    <div>
                      <a
                        href='#'
                        className='menu-item'
                        onClick={() => this.handleStateChange('ScatterPlot')}
                      >
                        ScatterPlot
                      </a>
                    </div>
                    {/* test with only one option
                    <div>
                      <a
                        href='#'
                        className='menu-item'
                        onClick={() => this.handleStateChange('BarChart')}
                      >
                        BarChart
                      </a>
                    </div> */}
                    {/* <div>
                      <a
                        href='#'
                        className='menu-item'
                        onClick={() => this.handleStateChange('Boxplot')}
                      >
                        Boxplot
                      </a>
                    </div> */}
                  </div>
                </Item>
              </DropNav>
           
             </div>

          <div className='tab-container'>
            {addedFirstGraph ? (
              <DashTabs>
              {this.state.tabitems.map((d, i) => (
                <TabItem
                  label={d.label}
                  close={
                    <AiFillCloseSquare
                      className='close'
                      id={i}
                      onClick={() => this.handleStateChange(i)}
                    />
                  }
                >
                  {d.element}
                </TabItem>
              ))}
            </DashTabs>
            ) : (
              ''
              )}
          </div>
        </div>

        </div>
     
      </>
    );
  }
}

export default DashPanel;
