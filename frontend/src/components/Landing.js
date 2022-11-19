import React from 'react';

import DucaBG from '../resources/duca-bg.jpg';

import '../styles/landing.css';

export default function Landing() {
  return (
    <div className='container-bg'>
      <img src={DucaBG}
        alt='background'
        className='bg'
       />
    </div>
  )
}
