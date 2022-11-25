import * as React from 'react';
import {Link} from "react-router-dom";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import {Logo} from "./Logo";
import {PageMenu} from "./PageMenu";
import {routes} from "$common/Navigation/routes";


export const Navigation = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

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

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <PageMenu.XS
                        handleOpenNavMenu={handleOpenNavMenu}
                        handleCloseNavMenu={handleCloseNavMenu}
                        anchorElNav={anchorElNav}
                    />
                    <Logo.XS/>

                    <Logo.MD/>
                    <PageMenu.MD
                        handleCloseNavMenu={handleCloseNavMenu}
                    />

                    {/* PROFILE */}
                    <Box sx={{flexGrow: 0}}>
                        <Tooltip title="Профиль">
                            <IconButton
                                onClick={handleOpenUserMenu}
                                sx={{p: 0}}
                                size="large"
                                color="inherit"
                            >
                                <AccountCircleIcon fontSize='large'/>
                            </IconButton>
                        </Tooltip>

                        <Menu
                            sx={{mt: '45px'}}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {routes.userPages.map(({name, path}) => (
                                <MenuItem key={path} onClick={handleCloseUserMenu}>
                                    <Link to={path}>
                                        <Typography textAlign="center">{name}</Typography>
                                    </Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}