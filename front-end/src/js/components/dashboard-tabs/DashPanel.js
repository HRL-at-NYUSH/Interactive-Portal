import React, { useState } from 'react'
import Highcharts from 'highcharts'
import LineGraph from '../graphs/LineGraph'
import DashTabs from '../dashboard-tabs/DashTabs'
import TabItem from '../dashboard-tabs/TabItem'
import DropNav from '../dropdown/DropNav'
import Item from '../dropdown/DropItem'
import { FaPlus } from 'react-icons/fa'
import '../../../css/components/Dropdown.css'



var newTab = "None";

// ----------- temporary ----------
const data = {
  title: {
    text: 'Sample 1'
  },
  series: [{
    data: [1,2,3],

  }],
  chart: {
    width: 300,
    height: 250,
    borderWidth: 2
  },
  credits: {
    enabled: false
  },
}

// -------------------------------

let dcount = 0;
let tcount = 0;
let scount = 0;
let ccount = 0;
let pcount = 0;

class DashPanel extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      tabitems: [{label: "Distribution"},{label: "Time"}],
    }
  }

  handleStateChange = (entry) => {
    if (entry == "Distribution" && this.state.tabitems.length < 7) {
      this.setState(prevState => ({
        tabitems: [...prevState.tabitems, {label: (entry + " " + dcount)}]
      }))
      dcount += 1;
    } else if (entry == "Time") {
      this.setState(prevState => ({
        tabitems: [...prevState.tabitems, {label: (entry + " " + tcount)}]
      }))
      tcount += 1;
    }
    else if (entry == "Space") {
      this.setState(prevState => ({
        tabitems: [...prevState.tabitems, {label: (entry + " " + scount)}]
      }))
      scount += 1;
    }
    else if (entry == "Correlation") {
      this.setState(prevState => ({
        tabitems: [...prevState.tabitems, {label: (entry + " " + ccount)}]
      }))
      ccount += 1;
    }
    else if (entry == "Playground") {
      this.setState(prevState => ({
        tabitems: [...prevState.tabitems, {label: (entry + " " + pcount)}]
      }))
      pcount += 1;
    }
  }

  render(){

    return (
      <>
      <div className="block">
        <div>
          <DropNav>
            <Item icon={<FaPlus />}>
              <div className="dropdown">
                <div>
                  <a href="#" className="menu-item" onClick={() => this.handleStateChange("Distribution")}>Distribution</a>
                </div>
                <div>
                  <a href="#" className="menu-item" onClick={() => this.handleStateChange("Correlation")} >Correlation</a>
                </div>
                <div>
                <a href="#" className="menu-item" onClick={() => this.handleStateChange("Time")}>Time</a>
                </div>
                <div>
                  <a href="#" className="menu-item" onClick={() => this.handleStateChange("Space")}>Space</a>
                </div>
                <div>
                  <a href="#" className="menu-item" onClick={() => this.handleStateChange("Playground")}>Playground</a>
                </div>
              </div>
            </Item>
          </DropNav>
        </div>
        <div className="tab-container">
        <DashTabs>
        {this.state.tabitems.map(d => (
          <TabItem label={d.label}>
          <LineGraph options={data} highcharts={Highcharts} />
          </TabItem>
        ))}
        </DashTabs>
        </div>
      </div>
      </>
    )

  }
}

export default DashPanel

