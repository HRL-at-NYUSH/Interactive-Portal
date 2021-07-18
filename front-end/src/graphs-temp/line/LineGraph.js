import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

class Line extends React.Component {
  constructor(props) {
    super(props);
    this.chartComponent = React.createRef();

    this.state = {
      options: {
        series: [
          {
            data: [1, 2, 3]
          }
        ],
        credits: {
            enabled: false
        }
      }
    };
  }

  componentDidMount() {
    const container = this.chartComponent.current.container.current;

    container.style.height = "99%";
    container.style.width = "100%";
    this.chartComponent.current.chart.reflow();
  }
  
  render() {
    return (
        <>
        <HighchartsReact
          constructorType={"chart"}
          ref={this.chartComponent}
          highcharts={Highcharts}
          options={this.state.options}
        />
        </>
    );
  }
}

export default Line
