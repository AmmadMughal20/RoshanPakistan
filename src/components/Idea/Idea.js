import React from 'react'
import { Grid, Typography, Box } from '@mui/material';
import './Idea.scss';
import { Link } from 'react-scroll';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import imageOfPerson from '../../images/assetsss/images (1).png'
import CounterCard from '../CounterCard/CounterCard'

const Idea = () => {
  return (
    <div id="Services">
      <Grid container className='idea-container' >
        <Grid item className='left-content'>
          <div className='main-text'>
            <h3 >The Prime Minister initiated Special Task Force</h3>
          </div>
          <div className='description-text'>
            <p>The "Roshan Pakistan" web and mobile application is a step forward towards making electricity consumers able to access Billing Details and Information regarding Load Shedding Schedule and more at their finger tips.The "Roshan Pakistan" web and mobile application is a step forward towards making electricity consumers able to access Billing Details and Information regarding Load Shedding Schedule and more at their finger tips.The "Roshan Pakistan" web and mobile application is a step forward towards making electricity consumers able to.</p>
          </div>
          <div className='button-item'>
            <CounterCard counter='50' title='TOTAL COMPLAINT'/>
            <CounterCard counter='500' title='DISPOSED' />
            <CounterCard counter='300' title='REDRESSED' />
            <CounterCard counter='65' title='IN PROCESS' />
          </div>

        </Grid>
        <Grid item className='right-content'>
          <img src={imageOfPerson} alt='img' style={{ width: '50%', padding: 'auto', margin: 'auto' }} />
        </Grid>
      </Grid>
    </div>
  )
}

export default Idea