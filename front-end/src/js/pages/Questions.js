//import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import React, { useState } from "react";
import Faq from "react-faq-component";
import Data from './Data';
const Questions = () => {
  const data = {
      title: "FAQ",
    rows: [
      {
        title: "Lorem ipsum dolor sit amet?",
        content: "Lorem ipsum dolor sit amet, consectetur "
      },
      {
        title: "Nunc maximus, magna at ultricies elementum?",
        content:
          "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam. Und was ist, wenn der Satz länger ist ... Geht es dann einfach weiter"
      },
      {
        title: "Curabitur laoreet, mauris vel blandit fringilla?",
        content:
          "Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc"
      },
      {
        title: "Wie sollen wir arbeite?",
        content: "Ich habe auch keine Ahnung"
      }
  ],

  }
  const getData = rows => {
        let content = [];
        for (let i = 0; i < rows.length; i++){
          const item = rows[i];
          content.push(<li key={rows.title}>{rows.content}</li>);
        }
      return content;
  };
  return (
    <div>
      <Header />
      <h2 className="header-text">Frequently Asked Questions page </h2>
     
        <Faq
            data={data}
           
        />
       <div className="block">
      <p className="full-text">Contact us for more questions: HRL@nyu.edu</p>
      </div>
    </div>
);
  // return(
    
    
  //   <div>
  //     <Header />
  //     <div>
  //     {
  //       data.title
  //     }
  //     <ul>
  //       {getData(data.rows)}
  //     </ul>
  //     </div>
  //   </div>
    
  // )
}

export default Questions;