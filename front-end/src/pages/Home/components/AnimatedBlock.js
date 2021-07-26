import React, { useEffect } from 'react';
import * as d3 from 'd3';
import enterView from 'enter-view';

const AnimatedBlock = () => {
  useEffect(() => {
    //d3 animation
    let w = 1200;
    let h = 150;
    let color = '#c0fdff';

    let viz = d3
      .select('.diagram-d3')
      .append('svg')
      .style('width', w)
      .style('height', h)
      .style('background-color', 'transperant')
      .style('margin-top', '30px');
    let myData = [
      [10, 50, 0, '#5daac9'],
      [30, 50, 0, 'white'],
      [50, 50, 0, '#76769b'],
      [70, 50, 0, '#dece73'],
      [90, 50, 0, '#ffa876'],
    ];

    let xScale = d3.scaleLinear().domain([0, 100]).range([0, w]);
    let yScale = d3.scaleLinear().domain([0, 100]).range([0, h]);
    let rScale = d3.scaleLinear().domain([0, 100]).range([0, 50]);

    let graphGroup = viz.append('g').attr('class', 'graphGroup');

    function updateGraph() {
      let elements = graphGroup.selectAll('.datapoint').data(myData);

      let enteringElements = elements.enter();
      let exitingElements = elements.exit();

      enteringElements
        .append('circle')
        .attr('class', 'datapoint')
        .attr('cx', function (d, i) {
          let x = d[0];
          return xScale(x);
        })
        .attr('cy', function (d, i) {
          let y = d[1];
          return yScale(y);
        })
        .attr('r', function (d, i) {
          let r = d[2];
          return rScale(r);
        })
        .attr('fill', function (d, i) {
          return d[3];
        })
        .attr('opacity', '0.5');

      elements
        .transition()
        .duration(700)
        .attr('cx', function (d, i) {
          let x = d[0];
          return xScale(x);
        })
        .attr('cy', function (d, i) {
          let y = d[1];
          return yScale(y);
        })
        .attr('r', function (d, i) {
          let r = d[2];
          return rScale(r);
        })
        .attr('fill', function (d, i) {
          return d[3];
        });
    }

    updateGraph();

    enterView({
      selector: '.animation',
      enter: function (el) {
        myData[0][2] = 70;
        myData[1][2] = 100;
        myData[2][2] = 120;
        myData[3][2] = 150;
        myData[4][2] = 90;
        updateGraph();
      },
      exit: function (el) {
        myData[0][2] = 0;
        myData[1][2] = 0;
        myData[2][2] = 0;
        myData[3][2] = 0;
        myData[4][2] = 0;
        updateGraph();
      },
      progress: function (el, progress) {
        // console.log("progress");
      },
      offset: 0.3,
    });
  }, []);

  return <></>;
};

export default AnimatedBlock;
