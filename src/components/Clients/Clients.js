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
                    <Card image={image1} title='Complaint Management' description='The "Roshan Pakistan" web and mobile application is a step forward towards making electricity consumers able to access Billing Details and Information regarding Load Shedding Schedule and more at their finger tips.'/>
                </Grid>
                <Grid item >
                    <Card image={image2} title='Theft Reporting' description='The "Roshan Pakistan" web and mobile application is a step forward towards making electricity consumers able to access Billing Details and Information regarding Load Shedding Schedule and more at their finger tips.'/>
                </Grid>
            </Grid>
        </div>
    )
}

export default Clients