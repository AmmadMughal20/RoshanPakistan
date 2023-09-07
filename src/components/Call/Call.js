import React from 'react'
import { Grid, Typography, Box } from '@mui/material'
import './Call.scss'

const Call = () => {
  return (
    <div id="Complaint">
      <Grid container className='call-container' >
        <Grid item className='text-container'>
          <Typography variant='h5' className='top-heading'>IN CASE OF ANY POWER THEFT COMPLAINT</Typography>
        </Grid>
        <Grid item className='text-container'>
          <Typography variant='h3' className='main-heading'>Please Call: 000-000-000</Typography>
        </Grid>
        
      </Grid>
    </div>
  )
}

export default Call