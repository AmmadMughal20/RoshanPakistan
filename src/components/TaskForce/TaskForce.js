import React from 'react'
import { Grid, Typography, Box } from '@mui/material'
import './TaskForce.scss'

const TaskForce = () => {
  return (
    <div id="TaskForce">
      <Grid container className='taskforce-container' >
        <Grid item className='text-container'>
          <Typography variant='h3' className='main-heading'>The Prime Minister initiated Special Task Force</Typography>
        </Grid>
        <Grid item className='bottom-para'>
          <Typography variant='p' className='bottom-para-text'>The "Roshan Pakistan" web and mobile application is a step forward towards making electricity consumers able to access Billing Details and Information regarding Load Shedding Schedule and more at their finger tips.</Typography>
        </Grid>
        <Grid item className='text-container'>
          <button style={{ padding: '20px 50px', color: '#01411c', backgroundColor: 'white', borderRadius: '10px', border: 'none' }}>
            REGISTER COMPLAINT
          </button>
        </Grid>
        <Grid item className='bottom-para'>
        </Grid>
      </Grid>
    </div>
  )
}

export default TaskForce