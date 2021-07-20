import React, { useEffect }from 'react'
import * as d3 from "d3";
import enterView from 'enter-view';
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../../css/pages/Home.css'
import pic from '../../images-src/home.jpg'
import logo from '../../images-src/logo3.png'
import headshot1 from '../../images-src/headshot-1.jpg'
import headshot2 from '../../images-src/headshot-2.jpg'
import headshot3 from '../../images-src/headshot-3.jpg'
import headshot4 from '../../images-src/headshot-4.jpg'
import headshot5 from '../../images-src/headshot-5.jpg'
import headshot6 from '../../images-src/headshot-6.jpg'
import highlight1 from '../../images-src/highlight-1.jpg'
import highlight2 from '../../images-src/highlight-2.jpg'
import highlight3 from '../../images-src/highlight-3.jpg'
import highlight4 from '../../images-src/highlight-4.jpg'
import diagram1 from '../../images-src/diagram-1.jpeg'
import diagram2 from '../../images-src/diagram-2.jpeg'
import diagram3 from '../../images-src/diagram-3.jpeg'
import diagram4 from '../../images-src/diagram-4.jpeg'
import diagram5 from '../../images-src/diagram-5.jpeg'



function Home() {
  useEffect(() => {

    //d3 animation
    let w = 1200
    let h = 150;
    let color = "#c0fdff";
  
    let viz = d3.select(".diagram-d3").append("svg")
        .style("width", w)
        .style("height", h)
        .style("background-color", "transperant")
        .style('margin-top', '30px')
    ;

    let myData = [
      [10, 50, 0, "#5daac9"],
      [30, 50, 0, "white"],
      [50, 50, 0, "#76769b"],
      [70, 50, 0, "#dece73"],
      [90, 50, 0, "#ffa876"]
    ]

    let xScale = d3.scaleLinear().domain([0, 100]).range([0, w]);
    let yScale = d3.scaleLinear().domain([0, 100]).range([0, h]);
    let rScale = d3.scaleLinear().domain([0, 100]).range([0, 50]);
    
    
    let graphGroup = viz.append("g").attr("class", "graphGroup");
    
    function updateGraph(){
    
      let elements = graphGroup.selectAll(".datapoint").data(myData);
    
      let enteringElements = elements.enter();
      let exitingElements = elements.exit();

      enteringElements
      .append("circle")
        .attr("class", "datapoint")
        .attr("cx", function(d, i){
          let x = d[0]
          return xScale(x)
        })
        .attr("cy", function(d, i){
          let y = d[1]
          return yScale(y)
        })
        .attr("r", function(d, i){
          let r = d[2]
          return rScale(r)
        })
        .attr("fill", function(d,i){
          return d[3]
        })
        .attr("opacity", "0.5")
    ;

      elements
      .transition()
      .duration(700)
      .attr("cx", function(d, i){
        let x = d[0]
        return xScale(x)
      })
      .attr("cy", function(d, i){
        let y = d[1]
        return yScale(y)
      })
      .attr("r", function(d, i){
        let r = d[2]
        return rScale(r)
      })
      .attr("fill", function(d,i){
        return d[3]
      })
    ;
    }
  
    
    updateGraph();
    
    
    
    enterView({
      selector: '.animation',
      enter: function(el) {
        myData[0][2] = 70
        myData[1][2] = 100
        myData[2][2] = 120
        myData[3][2] = 150
        myData[4][2] = 90
        updateGraph();
    
      },
      exit: function(el) {
        myData[0][2] = 0
        myData[1][2] = 0
        myData[2][2] = 0
        myData[3][2] = 0
        myData[4][2] = 0
        updateGraph();
    
      },
      progress: function(el, progress) {
        // console.log("progress");
      },
      offset: 0.3, 
    });
    

  }, []);


  return (
    <div className="App">
        <header className="App-header">
          {/* <img src={pic} id="background-pic"></img> */}
          <h id="header-text">History beyond the New York City</h>
          <p id="header-text">
          History Beyond gives undergraduate students experiences in undertaking independent historical research. The course encourages students to think creatively and boldly, to negotiate past difficulties in collaboration, and to learn from setbacks.</p>
        </header>

        <div id="decoration">
          <img src={logo} id='logo'></img>
        </div>

        <div id="title"><h1>What is HRL?</h1></div>
        <div className="App-content">
          <div><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p></div>
          <div><p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p></div>
        </div>

        <div id="title"><h1>Course & Highlights</h1></div>
        <div className="App-content-2">
              <div class="gallery-cell">
                <img src={highlight1} id='eventImg'></img>
                <div id="event-info">
                  <h2>revisit the history</h2>
                  <p1> those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et.</p1>
                </div>
              </div>
              <div class="gallery-cell">
                <img src={highlight2} id='eventImg'></img>
                <div id="event-info">
                  <h2>man of the time</h2>
                  <p1> those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et.</p1>
                </div>
              </div>
              <div class="gallery-cell">
                <img src={highlight3} id='eventImg'></img>
                <div id="event-info">
                  <h2>revisit the history</h2>
                  <p1> those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et.</p1>
                </div>
              </div>
              <div class="gallery-cell">
                <img src={highlight4} id='eventImg'></img>
                <div id="event-info">
                  <h2>man of the time</h2>
                  <p1> those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et.</p1>
                </div>
              </div> 
        </div>

        <section>

        <div className="App-content-3">
        
          <div className="diagram-layout">
            <div className="title"><h1>Development & Information</h1></div>
            <img src={diagram1} id='diagram'></img>
            <img src={diagram2} id='diagram'></img>
            <img src={diagram3} id='diagram'></img>
            <img src={diagram4} id='diagram'></img>
            <img src={diagram5} id='diagram'></img>
          </div>
          <div className="textBox">
            <div id="develop-info">
              <h3>23</h3>
              <p> datasets</p>
            </div>
            <div id="develop-info">
              <h3>10</h3>
              <p> publications</p>
            </div>
            <div id="develop-info">
              <h3>5</h3>
              <p> universities</p>
            </div>
            <div id="develop-info">
              <h3>51</h3>
              <p> contributors</p>
            </div>
            <div id="develop-info">
              <h3>68</h3>
              <p> platforms</p>
            </div>
           
          </div>
    
          <div className="diagram-d3">
          </div>
        
        </div>

        <div class="scrollingContent">
        <div>
              <p class="animation"></p>
            </div>
            <div>
              <p class=""></p>
            </div>
            <div>
              <p class=""></p>
            </div>
        </div> 
        </section>

        <div id="title"><h1>Team Members</h1></div>

        <div className="App-content-4">
          <div id="profile">
            <img src={headshot1} id='headshot'></img>
            <div id="introduction">
              <h2>Carmen</h2>
              <p1> Data Scientist</p1>
            </div>
          </div>
          <div id="profile">
            <img src={headshot2} id='headshot'></img>
            <div id="introduction">
              <h2>Bob</h2>
              <p1> Decision Support Analyst</p1>
            </div>
          </div>
          <div id="profile">
            <img src={headshot3} id='headshot'></img>
            <div id="introduction">
              <h2>Lisa</h2>
              <p1>Network Management Specialist</p1>
            </div>
          </div>
          <div id="profile">
            <img src={headshot4} id='headshot'></img>
            <div id="introduction">
              <h2>Alex</h2>
              <p1> Software Product Manager</p1>
            </div>
          </div>
          <div id="profile">
            <img src={headshot5} id='headshot'></img>
            <div id="introduction">
              <h2>Cara</h2>
              <p1> UX Designer</p1>
            </div>
          </div>
          <div id="profile">
            <img src={headshot6} id='headshot'></img>
            <div id="introduction">
              <h2>Jenny</h2>
              <p1>Tech Intern</p1>
            </div>
          </div>
        </div>

        <div className="App-footer">
        <div id="left-box">
          <h1>NYU <br></br>Shanghai</h1>
        </div>
        <div id="right-box"><h2>copyright@2021</h2></div>
        </div>
    </div>
  );

}

export default Home
