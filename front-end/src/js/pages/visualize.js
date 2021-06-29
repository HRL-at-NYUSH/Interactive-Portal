import React from 'react';
import { Link } from 'react-router-dom';

import '../../css/pages/Visualize.css';

import time from '../../images-src/time.png';
import correl from '../../images-src/correl.png';
import hist from '../../images-src/hist.png';
import map from '../../images-src/map.png';

function Visualize() {
  return (
    <>
      <div className='vis-body'>
        <h2 className='header-text-vis'>Visualize </h2>
        <div className='block-vis'>
          <div className='grid-container'>
            <div className='grid-item'>
              <Link to='/Dashboard' className='link'>
                <p>Distribution</p>
                <img alt='histogram img' src={hist} />
              </Link>
            </div>
            <div className='grid-item'>
              <Link to='/Dashboard' className='link'>
                <p>Correlation</p>
                <img alt='correlation img' src={correl} />
              </Link>
            </div>
            <div className='grid-item'>
              <Link to='/Dashboard' className='link'>
                <p>Time</p>
                <img alt='time img' src={time} />
              </Link>
            </div>
            <div className='grid-item'>
              <Link to='/Dashboard' className='link'>
                <p>Space</p>
                <img alt='map img' src={map} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Visualize;
