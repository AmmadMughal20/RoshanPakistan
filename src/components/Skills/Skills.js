import React from 'react'
import { Grid, Typography } from '@mui/material'
import './Skills.scss'

const Skills = () => {
  return (
    <div id="Skills">
      <Grid container className='skills-container' >
        <Grid item lg={6} xs={12}>

        </Grid>
        <Grid item lg={6} xs={12}>
          <Typography variant='h4'>
            Skills
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export default Skills