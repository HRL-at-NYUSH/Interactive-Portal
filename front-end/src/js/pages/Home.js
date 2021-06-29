import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../../css/pages/Home.css'
import pic from '../../images-src/home.jpg'

function Home() {
  return (
    // <>
    // <Header />
    <div className="App">
        <div class="menu-bar">
          <ul class="breadcrumb" id="left">
            <li><a href="Home">Humanities Research Lab</a></li>
          </ul>
          <ul class="breadcrumb" id="right">
            <li><a href="data">Data</a></li>
            <li><a href="visualize">Visualize</a></li>
            <li><a href="Questions">FAQ</a></li>
            <li><a href="login">Login</a></li>
          </ul>
        </div>

        <header className="App-header">
          <img src={pic} id="background-pic"></img>
          <h id="header-text">What is HRL?</h>
          <p id="header-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </header>

        <div id="decoration"></div>


      <div className="App-content">
        <p>hello</p>
      </div>
    </div>
    // </>
  );
}
export default Home
