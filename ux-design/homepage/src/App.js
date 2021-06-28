import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <div class="menu-bar">
          <ul class="breadcrumb" id="left">
            <li><a href="index.html">Humanities Research Lab</a></li>
          </ul>
          <ul class="breadcrumb" id="right">
            <li><a href="data.html">Data</a></li>
            <li><a href="visualize.html">Visualize</a></li>
            <li><a href="faq.html">FAQ</a></li>
            <li><a href="login.html">Login</a></li>
          </ul>
        </div>

        <header className="App-header">
          {/* <img src={logo} id="logo"></img> */}
          <p id="header-text">
            History Beyond is a website of NY Immigrant City, a guided research seminar with participation from the NYU New York, Abu Dhabi, and Shanghai. It showcases the work of a team-based research program called Vertically Integrated Projects, piloted by Georgia Tech and coordinated through NYU Tandon School of Engineering
          </p>
        </header>

        <div id="decoration"></div>


      <div className="App-content">
        <p>hello</p>
      </div>
    </div>
  );
}

export default App;
