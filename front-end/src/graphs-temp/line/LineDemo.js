import React from 'react';
import Container from '../Container';
import Line from '../line/LineGraph';

function LineDemo() {

  return (
    <>
      <div>
        <h2 className='header-text'>Line Graph Demo</h2>
        <Container content={<Line />}/>
      </div>
    </>
  );
}

export default LineDemo;