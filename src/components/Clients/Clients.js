import React from 'react'
import { Grid, Typography } from '@mui/material'
import './Clients.scss'
import CustomSlider from '../Slider/CustomSlider'
import image1 from '../../images/assetsss/download (1).png'
import image2 from '../../images/assetsss/images.png'
import Card from '../Card/Card'

const Clients = () => {

    return (
        <div id='Clients'>
            <Grid container spacing={2} className='clients-container'>
                <Grid item >
                    <Card image={image1} title='Complaint Management' description='Report a case using Customer complaint management system (CCMS). A running web portal in power sector for customers to register complaints.'/>
                </Grid>
                <Grid item >
                    <Card image={image2} title='Theft Reporting' description='A dedicated portal for general public to report theft cases anonymously. Click below button to report a case.'/>
                </Grid>
            </Grid>
        </div>
    )
}

export default Clients