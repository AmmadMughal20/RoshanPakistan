import React from 'react'
import { Grid, Typography, Box } from '@mui/material'
import './TaskForce.scss'

const TaskForce = () => {
  return (
    <div id="TaskForce">
      <Grid container className='taskforce-container' >
        <Grid item className='text-container'>
          <Typography variant='h3' className='main-heading'>Electricity Thieves Behind Bars</Typography>
        </Grid>
        <Grid item className='bottom-para'>
          <Typography variant='p' className='bottom-para-text'>Be a responsible Pakistani and prove it by helping us in the fight to resist electrivity theft. Incase you see any electricity theft near your surroundings, fell safe to report a case anonymously using the above mentioned channels. Your identity will not be disclosed to anyone.</Typography>
        </Grid>
        <Grid item className='text-container'>
          <button style={{ padding: '20px 50px', color: '#01411c', backgroundColor: 'white', borderRadius: '10px', border: 'none' }}>
            REPORT A CASE
          </button>
        </Grid>
        <Grid item className='bottom-para'>
        </Grid>
      </Grid>
    </div>
  )
}

export default TaskForce