import './styles/banner.styles.css'
import PlayVector from '../assets/play-vector.png'
import MoreInfo from '../assets/info-vector.png'
// import DaredevilBanner from '../assets/daredevil-banner.webp'

import React from 'react'

const Banner = () => {
  return (
    <header className='banner'>
      <div className='banner__content'>
        <h1 className='banner__title'>Movie Name</h1>
        <div className='banner__buttons'>
          <button className='banner__button--play'>
            <img src={PlayVector} alt='Play Button' />
            <span className='play'>Play</span>
          </button>
          <button className='banner__button--info'>
            <img src={MoreInfo} alt='More Info' />
          </button>
        </div>
        <h1 className='banner__description'>This is a Test Description</h1>
      </div>

      <div className='banner--fadeBottom' />
    </header>
  )
}

export default Banner
