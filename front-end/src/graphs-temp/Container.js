import React from 'react';
import { ResizableBox } from 'react-resizable';
import '../graphs-temp/container.css';

class Container extends React.Component {
    state = {
        width: 800,
        height: 400,
      };

    onResize = (event, {element, size, handle}) => {
        this.setState({width: size.width, height: size.height});
    }
    
  
    render() {
      return (
        <ResizableBox className="box hover-handles" width={this.state.width} height={this.state.height} minConstraints={[400, 300]} maxConstraints={[1000, 600]} resizeHandles={['se']} onResize={this.onResize}>
            {this.props.content}
      </ResizableBox>
      );
    }
  }

export default Container
