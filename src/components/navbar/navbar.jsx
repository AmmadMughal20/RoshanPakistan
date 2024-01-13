import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { IconButton, Typography, Box, Button, Tooltip, Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import AdbIcon from '@mui/icons-material/Adb';
import MenuItem from '@mui/material/MenuItem';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import Container from '@mui/material/Container';
import { Link } from 'react-scroll';
import Topbar from '../Topbar/Topbar';
import { RotateRight } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


import './navbar.scss';

const pages = ['Home', 'About Tf Theft', 'Statistics', 'News Feed'];
const idArray = ['Home', 'AboutUs', 'Services', 'TaskForce'];
const settings = [
    {
        name: 'Profile',
        url: '#'
    }, {
        name: 'Account',
        url: '#'
    }, {
        name: 'Dashboard',
        url: '#'
    }, {
        name: 'Logout',
        url: '/'
    }];


const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const navigate = useNavigate()

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const theme = useTheme();
    const isMdScreen = useMediaQuery(theme.breakpoints.up('md'));


    return (
        <div>
            <div className='app-bar'>
                <Topbar />
                <div className='toolbar-container'>
                    <div className='toolbar'>
                        <div className='mobile-menu'>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                    color: 'white'
                                }}
                            >
                                {pages.map((page, index) => (
                                    <Link
                                        to={idArray[index]}
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                    >
                                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                                            <Typography textAlign="center" sx={{ color: 'black' }}>{page}</Typography>
                                        </MenuItem>
                                    </Link>
                                ))}
                                <button>
                                    REPORT A CASE
                                </button>
                            </Menu>
                        </div>
                        <div className='desktop-menu'>
                            {pages.map((page, index) => (
                                <Link
                                    to={idArray[index]}
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                    <div
                                        className='menu-item'
                                    >
                                        <p
                                            key={page}
                                            onClick={handleCloseNavMenu}
                                        >
                                            {page}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                            <button style={{padding:'10px', margin:'10px', borderRadius:'10px', fontSize:'medium', backgroundColor:'orange', color:'white'}}>
                                REPORT A CASE
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar