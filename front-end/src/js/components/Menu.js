import '../../css/components/Menu.css'
import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import Switch from './Switch'
// import "react-tabs/style/react-tabs.css";
function Search() {
  const [isToggled, setIsToggled] = useState(false)
  return (
    <Switch
      isToggled={isToggled}
      onToggle={() => setIsToggled(!isToggled)}
      rounded={true}
    />
  )
}
function Menu() {
  return (
    <div className="Menu">
      <h1>Sample</h1>
      <Tabs>
        <TabList>
          <Tab>
            <p>Search</p>
          </Tab>
          <Tab>
            <p>View Insights</p>
          </Tab>
          <Tab>
            <p>Export</p>
          </Tab>
        </TabList>

        <TabPanel>
          <div className="panel-content">
            <h2>Any content 1</h2>
            <Search />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <h2>Any content 2</h2>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <h2>Save</h2>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  )
}
export default Menu
