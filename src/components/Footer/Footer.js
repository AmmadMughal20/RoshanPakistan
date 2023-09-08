import React from 'react'
import { Grid, Typography } from '@mui/material';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import './Footer.scss'
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import LocalPhoneSharpIcon from '@mui/icons-material/LocalPhoneSharp';
import BusinessSharpIcon from '@mui/icons-material/BusinessSharp';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GOPLogo from '../../images/assetsss/sfsfs-1.png';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <>
            <Grid container spacing={2} className='footer-container'>
                <Grid item lg={3} className='logo-item'>
                    <Grid container spacing={2} padding={2}>
                        <Grid item lg={12}>
                            <img src={GOPLogo} className='logo' style={{ display: 'flex' }} alt='logo' />
                        </Grid>
                        <Grid item lg={12}>
                            <p style={{ color: 'white', paddingBottom: '2rem', textAlign: 'left' }}>
                                The "Roshan Pakistan" web and mobile.
                            </p>
                        </Grid>
                        <Grid item lg={12}>
                            <Grid container spacing={1}>
                                <Grid item lg={2}>
                                    <Link to='#' style={{ textDecoration: 'none', color: 'white' }} target='_blank'>
                                        <FacebookIcon />
                                    </Link>
                                </Grid>
                                <Grid item lg={2}>
                                    <Link to='#'  style={{ textDecoration: 'none', color: 'white' }}  target='_blank'>
                                        <TwitterIcon />
                                    </Link>
                                </Grid>
                                <Grid item lg={2}>
                                    <Link to='#'  style={{ textDecoration: 'none', color: 'white' }} target='_blank'>
                                        <InstagramIcon />
                                    </Link>
                                </Grid>
                                <Grid item lg={2}>
                                    <Link to='#'  style={{ textDecoration: 'none', color: 'white' }} target='_blank'>
                                        <LinkedInIcon />
                                    </Link>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item lg={3} className='contact-us-item'>
                    <h2 className='footer-heading'>Services</h2>
                    <p>Link 1</p>
                    <p>Link 2</p>
                    <p>Link 3</p>
                    <p>Link 4</p>
                    <p>Link 5</p>
                </Grid>

                <Grid item lg={3} className='contact-us-item'>
                    <h2 className='footer-heading'>Contact Info</h2>
                    <p>WAPDA House Egerton Rd, Garhi Shahu, Lahore, Punjab</p>
                    <p>Support</p>
                    <p>042-99202048</p>
                    <p>Email</p>
                    <p>info@pitc.com.pk</p>
                </Grid>
                <Grid item lg={3} className='contact-us-item'>
                    <h2 className='footer-heading'>Newsletter</h2>
                    <p>Get every week update from us</p>
                    <input
                        type="text"
                        style={{ backgroundColor: 'transparent', padding: '10px', borderColor: 'white', borderRadius: '5px', width: '75%' }}
                        placeholder='Enter your email'
                    />
                    <button type='submit' style={{ padding: '10px 80px', border: 'none', borderRadius: '5px', color: '#01411C', marginTop: '4%' }}>
                        SUBSCRIBE
                    </button>
                </Grid>
            </Grid>
            <Grid container className='last-bar'>
                <Grid item lg={12} >
                    <Typography variant='p'> Copyright © 2023. POWER INFORMATION TECHNOLOGY COMPANBY - PITC - All Rights Reserved. <span style={{ textDecoration: 'underline' }}> Terms and conditions </span> |  <span style={{ textDecoration: 'underline' }}> Privacy Policy </span>  |  <span style={{ textDecoration: 'underline' }}> Support </span></Typography>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer