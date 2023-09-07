import React from 'react'
import { Grid, Typography, Box } from '@mui/material'
import './AboutUs.scss'

const AboutUs = () => {
  return (
    <div id="AboutUs">
      <Grid container className='about-us-container' >
        <Grid item className='text-container'>
          <Typography variant='h3' className='main-heading'>About Us</Typography>
        </Grid>
        <Grid item className='bottom-para'>
          <Typography variant='p' className='bottom-para-text'>The "Roshan Pakistan" web and mobile application is a step forward towards making electricity consumers able to access Billing Details and Information regarding Load Shedding Schedule and more at their finger tips.</Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export default AboutUs