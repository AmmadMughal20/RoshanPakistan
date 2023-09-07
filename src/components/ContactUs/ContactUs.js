import React from 'react'
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import './ContactUs.scss'
import { TextareaAutosize } from '@mui/base/TextareaAutosize';

const ContactUs = () => {
  return (
    <div id="ContactUs">
      <Grid container className='feedback-container' >
        <Grid item className='left-content'>
          <Typography variant='h4' className='main-heading'>
            Let's Start
          </Typography>
          <div className='bottom-para'>
            <Typography variant="p" className='bottom-para-text'>
              Thank you for your interest in our bespoke software devlopment services.
            </Typography>
            <br />
            <br />
            <Typography variant="p" className='bottom-para-text'>
              Whether you are looking to develop a complete idea, hire dedicated and like-minded individuals or just want to learn more about Codinit, we are connecting ypu with our Business Development Team. They will assit you with queries you may have.
            </Typography>
          </div>
        </Grid>
        <Grid item className="right-content">
          <form className='form'>
            <TextField
              className='textField'
              type="text"
              label="Name"
              variant="outlined"
            />
            <TextField
              className='textField'
              type="text"
              label="Company"
              variant="outlined"
            />
            <br />
            <TextField
              className='textField'
              type="number"
              label="Phone"
              variant="outlined"
            />
            <TextField
              className='textField'
              type="text"
              label="Role"
              variant="outlined"
            />
            <br />
            <TextField
              className='textField1'
              type="email"
              label="Email"
              variant="outlined"
            />
            <br />
            <TextareaAutosize minRows={15} className='textArea' placeholder='Your query' />
            <Box className='buttonContainer' >
              <Button variant="outlined" className='buttonBody'>
                save
              </Button>
            </Box>
          </form>
        </Grid>
      </Grid>
    </div>
  )
}

export default ContactUs