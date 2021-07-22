import React from 'react'
import DashTabs from '../dashboard-tabs/DashTabs'
import TabItem from '../dashboard-tabs/TabItem'
import DropNav from '../dropdown/DropNav'
import Item from '../dropdown/DropItem'
import { FaPlus } from 'react-icons/fa'
import { AiFillCloseSquare } from 'react-icons/ai'
import '../../../css/components/Dropdown.css'
import Distribution from '../dashboard-tabs/Distribution'
import Time from '../dashboard-tabs/Time'
import Space from '../dashboard-tabs/Space'
import Playground from '../dashboard-tabs/Playground'
import Correlation from '../dashboard-tabs/Correlation'
import Menu from '../Menu'
import '../../../css/components/DashPanel.css'

let dcount = 0
let tcount = 0
let scount = 0
let ccount = 0
let pcount = 0
let overallcount = 2

class DashPanel extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      tabitems: [
        { label: 'Distribution', element: <Distribution /> },
        { label: 'Time', element: <Time /> },
      ],
    }
  }

  handleStateChange = (entry) => {
    if (isNaN(entry)) {
      if (overallcount > 5) {
        alert('Sorry! Too many tabs')
      } else if (entry === 'Distribution') {
        this.setState((prevState) => ({
          tabitems: [
            ...prevState.tabitems,
            { label: entry + ' ' + dcount, element: <Distribution /> },
          ],
        }))
        dcount += 1
        overallcount += 1
      } else if (entry === 'Time') {
        this.setState((prevState) => ({
          tabitems: [
            ...prevState.tabitems,
            { label: entry + ' ' + tcount, element: <Time /> },
          ],
        }))
        tcount += 1
        overallcount += 1
      } else if (entry === 'Space') {
        this.setState((prevState) => ({
          tabitems: [
            ...prevState.tabitems,
            { label: entry + ' ' + scount, element: <Space /> },
          ],
        }))
        scount += 1
        overallcount += 1
      } else if (entry === 'Correlation') {
        this.setState((prevState) => ({
          tabitems: [
            ...prevState.tabitems,
            { label: entry + ' ' + ccount, element: <Correlation /> },
          ],
        }))
        ccount += 1
        overallcount += 1
      } else if (entry === 'Playground') {
        this.setState((prevState) => ({
          tabitems: [
            ...prevState.tabitems,
            { label: entry + ' ' + pcount, element: <Playground /> },
          ],
        }))
        pcount += 1
        overallcount += 1
      }
    } else if (typeof entry === 'number' && overallcount > 1) {
      this.setState((prevState) => ({
        tabitems: [
          ...prevState.tabitems.slice(0, entry),
          ...prevState.tabitems.slice(entry + 1),
        ],
      }))
      overallcount -= 1
    }
    console.log(overallcount)
  }

  render() {
    return (
      <>
        <div className="rows">
          <Menu />
          <div>
            <div>
              <DropNav>
                <Item icon={<FaPlus />}>
                  <div className="dropdown">
                    <div>
                      <a
                        href="#"
                        className="menu-item"
                        onClick={() => this.handleStateChange('Distribution')}
                      >
                        Distribution
                      </a>
                    </div>
                    <div>
                      <a
                        href="#"
                        className="menu-item"
                        onClick={() => this.handleStateChange('Correlation')}
                      >
                        Correlation
                      </a>
                    </div>
                    <div>
                      <a
                        href="#"
                        className="menu-item"
                        onClick={() => this.handleStateChange('Time')}
                      >
                        Time
                      </a>
                    </div>
                    <div>
                      <a
                        href="#"
                        className="menu-item"
                        onClick={() => this.handleStateChange('Space')}
                      >
                        Space
                      </a>
                    </div>
                    <div>
                      <a
                        href="#"
                        className="menu-item"
                        onClick={() => this.handleStateChange('Playground')}
                      >
                        Playground
                      </a>
                    </div>
                  </div>
                </Item>
              </DropNav>
            </div>

            <div className="tab-container">
              <DashTabs>
                {this.state.tabitems.map((d, i) => (
                  <TabItem
                    label={d.label}
                    close={
                      <AiFillCloseSquare
                        className="close"
                        id={i}
                        onClick={() => this.handleStateChange(i)}
                      />
                    }
                  >
                    {d.element}
                  </TabItem>
                ))}
              </DashTabs>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default DashPanel
