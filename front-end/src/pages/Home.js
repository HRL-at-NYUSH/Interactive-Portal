import React, { useEffect } from 'react';
import * as d3 from 'd3';
import enterView from 'enter-view';

import './Home.css';
import {
  logo,
  headshot1,
  headshot2,
  headshot3,
  headshot4,
  headshot5,
  headshot6,
  highlight1,
  highlight2,
  highlight3,
  highlight4,
  diagram1,
  diagram2,
  diagram3,
  diagram4,
  diagram5,
} from '@assets/home-page';

function Home() {
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

  return (
    <div className='App-home'>
      <div className='header-section'>
        <div id='parent_div_1'>
          <h className='h-title-home'>History beyond the New York City</h>
          <br />
          <p className='p-home-title'>
            History Beyond gives undergraduate students experiences in
            undertaking independent historical research. The course encourages
            students to think creatively and boldly, to negotiate past
            difficulties in collaboration, and to learn from setbacks.
          </p>
        </div>

        <div id='parent_div_2'>
          <img src={logo} id='logo-home'></img>
        </div>
        <div id='clear'></div>
      </div>
      <div>
        <h1 className='title'>What is HRL?</h1>
      </div>
      <div className='App-content'>
        <div>
          <p className='p-home'>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>
        </div>
        <div>
          <p className='p-home'>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary, making this the first true
            generator on the Internet. It uses a dictionary of over 200 Latin
            words, combined with a handful of model sentence structures, to
            generate Lorem Ipsum which looks reasonable. The generated Lorem
            Ipsum is therefore always free from repetition, injected humour, or
            non-characteristic words etc.
          </p>
        </div>
      </div>

      <div>
        <h1 className='title'>Course & Highlights</h1>
      </div>
      <div className='App-content-2'>
        <div class='gallery-cell'>
          <img src={highlight1} id='eventImg'></img>
          <div id='event-info'>
            <h2 className='home-h2'>revisit the history</h2>
            <p1>
              {' '}
              those interested. Sections 1.10.32 and 1.10.33 from "de Finibus
              Bonorum et.
            </p1>
          </div>
        </div>
        <div class='gallery-cell'>
          <img src={highlight2} id='eventImg'></img>
          <div id='event-info'>
            <h2 className='home-h2'>man of the time</h2>
            <p1>
              {' '}
              those interested. Sections 1.10.32 and 1.10.33 from "de Finibus
              Bonorum et.
            </p1>
          </div>
        </div>
        <div class='gallery-cell'>
          <img src={highlight3} id='eventImg'></img>
          <div id='event-info'>
            <h2 className='home-h2'>revisit the history</h2>
            <p1>
              {' '}
              those interested. Sections 1.10.32 and 1.10.33 from "de Finibus
              Bonorum et.
            </p1>
          </div>
        </div>
        <div class='gallery-cell'>
          <img src={highlight4} id='eventImg'></img>
          <div id='event-info'>
            <h2 className='home-h2'>man of the time</h2>
            <p1>
              {' '}
              those interested. Sections 1.10.32 and 1.10.33 from "de Finibus
              Bonorum et.
            </p1>
          </div>
        </div>
      </div>

      <section>
        <div>
          <h1 className='title'>Development & Information</h1>
        </div>
        <div className='App-content-3'>
          <div className='diagram-layout'>
            <img src={diagram1} className='diagram'></img>
            <img src={diagram2} className='diagram'></img>
            <img src={diagram3} className='diagram'></img>
            <img src={diagram4} className='diagram'></img>
            <img src={diagram5} className='diagram'></img>
          </div>
          <div className='textBox'>
            <div id='develop-info'>
              <h3>23</h3>
              <p className='p-home'> datasets</p>
            </div>
            <div id='develop-info'>
              <h3>10</h3>
              <p className='p-home'> publications</p>
            </div>
            <div id='develop-info'>
              <h3>5</h3>
              <p className='p-home'> universities</p>
            </div>
            <div id='develop-info'>
              <h3>51</h3>
              <p className='p-home'> contributors</p>
            </div>
            <div id='develop-info'>
              <h3>68</h3>
              <p> platforms</p>
            </div>
          </div>
        </div>
      </section>

      <div>
        <h1 className='title'>Team Members</h1>
      </div>

      <div className='App-content-4'>
        <div id='profile'>
          <img src={headshot1} id='headshot'></img>
          <div id='introduction'>
            <h2 className='home-h2'>Carmen</h2>
            <p1> Data Scientist</p1>
          </div>
        </div>
        <div id='profile'>
          <img src={headshot2} id='headshot'></img>
          <div id='introduction'>
            <h2 className='home-h2'>Bob</h2>
            <p1> Decision Support Analyst</p1>
          </div>
        </div>
        <div id='profile'>
          <img src={headshot3} id='headshot'></img>
          <div id='introduction'>
            <h2 className='home-h2'>Lisa</h2>
            <p1>Network Management Specialist</p1>
          </div>
        </div>
        <div id='profile'>
          <img src={headshot4} id='headshot'></img>
          <div id='introduction'>
            <h2 className='home-h2'>Alex</h2>
            <p1> Software Product Manager</p1>
          </div>
        </div>
        <div id='profile'>
          <img src={headshot5} id='headshot'></img>
          <div id='introduction'>
            <h2 className='home-h2'>Cara</h2>
            <p1> UX Designer</p1>
          </div>
        </div>
        <div id='profile'>
          <img src={headshot6} id='headshot'></img>
          <div id='introduction'>
            <h2 className='home-h2'>Jenny</h2>
            <p1>Tech Intern</p1>
          </div>
        </div>
      </div>
      {
        //put it later in the footer
        /*
          
          <div className="App-footer">
          <div id="left-box">
            <h1 className="title">NYU Shanghai</h1>
          </div>
          <div id="right-box">
            <h2 className="home-h2">copyright@2021</h2>
          </div>
        </div>
          */
      }
    </div>
  );
}

export default Home;
