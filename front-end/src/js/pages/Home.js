import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../../css/pages/Home.css'
import pic from '../../images-src/home.jpg'
import headshot1 from '../../images-src/headshot-1.jpg'
import headshot2 from '../../images-src/headshot-2.jpg'
import headshot3 from '../../images-src/headshot-3.jpg'

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

        <div id="decoration-2"><h>Courses & Highlights</h></div>
        <div className="App-content">
          <div><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p></div>
          <div><p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p></div>
        </div>

        <div id="decoration-2"><h>Faculty & Teaching Staff</h></div>
        <div className="App-content-2">
          <div>
            <img src={headshot1} id='headshot'></img>
            <div id="introduction">
              <h1>Carmen</h1>
              <p1> those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p1>
            </div>
          </div>
          <div>
            <img src={headshot2} id='headshot'></img>
            <div id="introduction">
              <h1>Bob</h1>
              <p1> those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p1>
            </div>
          </div>
          <div>
            <img src={headshot3} id='headshot'></img>
            <div id="introduction">
              <h1>Lisa</h1>
              <p1> those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p1>
            </div>
          </div>
        </div>

        <div className="App-footer">
          <div><p1>copyright@2021</p1></div>
        </div>
    </div>
    // </>
  );
}
export default Home
