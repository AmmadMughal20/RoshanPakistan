import React from 'react'
import Navbar from '../../components/navbar/navbar'
import MainContainer from '../../components/MainContainer/MainContainer'
import Clients from '../../components/Clients/Clients'
import AboutUs from '../../components/AboutUs/AboutUs'
import Idea from '../../components/Idea/Idea'
import Footer from '../../components/Footer/Footer'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Call from '../../components/Call/Call';

import './landing.scss';
import TaskForce from '../../components/TaskForce/TaskForce'

const Landing = () => {
  const toTop = () => {
    window.scrollTo(0, 0)
  }
  return (
    <>
      <Navbar />
      <MainContainer />
      <AboutUs />
      <Clients />
      <Idea />
      <TaskForce />
      <Call />
      <Footer />
      <div style={{ textAlign: 'right' }}>
        <button onClick={toTop} className='top-button'><KeyboardArrowUpIcon /></button>
      </div>
    </>
  )
}

export default Landing