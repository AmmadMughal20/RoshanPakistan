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
            <h3 >Task Force Performance Stats</h3>
          </div>
          <div className='description-text'>
            <p>The taskforce team is actively performing in the field against the electricity theives. Below are some of the real time performance stats depicting their progress.</p>
          </div>
          <div className='button-item'>
            <CounterCard counter='5000' title='FIRs Registered'/>
            <CounterCard counter='500' title='Arrested Persons' />
            <CounterCard counter='300,000' title='Amount Recovered' />
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