import React from 'react'
import DropNav from '../dropdown/DropNav'
import Item from '../dropdown/DropItem'
import { FaPlus } from 'react-icons/fa';
import '../../../css/components/Dropdown.css'



class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selection: "none"
    }
  }

  handleDist = () => {
    console.log("Dist");
    this.setState({selection: "Distribution"});
    localStorage.setItem('state', "Distribution"); 
  }

  handleTime = () => {
    console.log("Time");
    this.setState({selection: "Time"});
    localStorage.setItem('state', "Time"); 
  }

  handleCorr = () => {
    console.log("Corr");
    this.setState({selection: "Correlation"});
    localStorage.setItem('state', "Correlation"); 
  }

  handleSpace = () => {
    console.log("Space");
    this.setState({selection: "Space"});
    localStorage.setItem('state', "Space"); 
  }

  handlePlay = () => {
    console.log("Play");
    this.setState({selection: "Playground"});
    localStorage.setItem('state', "Playground"); 
  }

  render() {
    return (

    <>
    <div>
      <DropNav>
        <Item icon={<FaPlus />}>
          <div className="dropdown">
            <div>
              <a href="#" className="menu-item" onClick={this.handleDist}>Distribution</a>
            </div>
            <div>
              <a href="#" className="menu-item" onClick={this.handleCorr}>Correlation</a>
            </div>
            <div>
            <a href="#" className="menu-item" onClick={this.handleTime}>Time</a>
            </div>
            <div>
              <a href="#" className="menu-item" onClick={this.handleSpace}>Space</a>
            </div>
            <div>
              <a href="#" className="menu-item" onClick={this.handlePlay}>Playground</a>
            </div>
          </div>
        </Item>
      </DropNav>
    </div>
    </>
    )
  }
}

export default Dropdown