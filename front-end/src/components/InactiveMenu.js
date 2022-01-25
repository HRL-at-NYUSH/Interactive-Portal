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

class InactiveMenu extends Component {

  render (){
    return (
      <>
        <div className='Menu'>
          <Tabs>
            <TabPanel>
              <div className='inactive-panel-content'>
                <br />
               <p>Click on the + button on the right to add a graph</p>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </>
    );
  }
}
export default InactiveMenu;
