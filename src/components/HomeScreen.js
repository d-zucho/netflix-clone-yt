import React from 'react'
import Nav from './Nav'
import Banner from './Banner'
import './styles/homescreen.styles.css'

const HomeScreen = () => {
  return (
    <div className='homescreen'>
      {/* -- Navbar -- */}
      <Nav />
      {/* -- Banner -- */}
      <Banner />

      {/* -- Rows -- */}
    </div>
  )
}

export default HomeScreen
