import React from 'react'
import { Grid, Typography, Box } from '@mui/material'
import './AboutUs.scss'

const AboutUs = () => {
  return (
    <div id="AboutUs">
      <Grid container className='about-us-container' >
        <Grid item className='text-container'>
          <Typography variant='h3' className='main-heading'>About Tf Theft</Typography>
        </Grid>
        <Grid item className='bottom-para'>
          <Typography variant='p' className='bottom-para-text'>A PM initiative to deal with the rising crime of electricity theft in power sector of Pakistan. An interface for general public to report cases of electricity theft while being anonymous. Use the below mentioned channels to report a case.</Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export default AboutUs