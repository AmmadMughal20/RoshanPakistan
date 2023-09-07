import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import './ServiceCard.scss';
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';

const ServiceCard = ({ item }) => {
    return (
        <Box className="service-card">
            <Box sx={{ backgroundColor: 'white' }} className='icon-box'>
                <img src={item.iconColor} className='icon'/>
            </Box>
            <Box className='title-box'>
                <Typography variant='h5' className='title'>{item.title}</Typography>
            </Box>
            <Box className='description-box'>
                <Typography variant='p' className='description'>{item.description}</Typography>
            </Box>
        </Box>
    )
}

export default ServiceCard