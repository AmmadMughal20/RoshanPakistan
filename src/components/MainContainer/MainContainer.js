import { Grid, Typography } from '@mui/material'
import { Link } from 'react-scroll'
import React from 'react'
import './MainContainer.scss'
import Typewriter from 'typewriter-effect';
import CustomSlider from '../Slider/CustomSlider';

const MainContainer = () => {
    return (
        <div id="Home">
            {/* <Grid className='main-container' >
            </Grid> */}

                <CustomSlider />
        </div>
    )
}

export default MainContainer