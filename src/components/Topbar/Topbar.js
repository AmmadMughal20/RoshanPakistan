import React, { useEffect, useState } from 'react'
import './Topbar.scss'
import { Typography, Grid } from '@mui/material';
import Logos from '../../images/assetsss/Group 2.png'
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';

const Topbar = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            const isVisible = currentScrollPos === 0;

            setPrevScrollPos(currentScrollPos);
            setIsVisible(isVisible);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);

    return (
        <Grid container spacing={2} className={`top-bar-container ${isVisible ? 'visible' : 'hidden'}`} >
            <Grid item className='top-bar-center'>
                <Grid container spacing={2} className='center-container'>
                    <Grid item className='top-bar-text'>
                        <img alt='logos' src={Logos} style={{ width: '30%' }} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Topbar