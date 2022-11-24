import * as React from "react";
import {Link} from 'react-router-dom';

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {routes} from "$common/Navigation/routes";


const XS = ({handleOpenNavMenu, handleCloseNavMenu, anchorElNav}) => (
    <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
        <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
        >
            <MenuIcon/>
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
                display: {xs: 'block', md: 'none'},
            }}
        >
            {routes.mainPages.map(({name, path}) => (
                <MenuItem key={name} onClick={handleCloseNavMenu}>
                    <Link to={path}>
                        <Typography textAlign="center">{name}</Typography>
                    </Link>
                </MenuItem>
            ))}
        </Menu>
    </Box>
)

const MD = ({handleCloseNavMenu}) => (
    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
        {routes.mainPages.map(({name, path}) => (
            <Link to={path}>
                <Button
                    key={name}
                    onClick={handleCloseNavMenu}
                    sx={{my: 2, color: 'white', display: 'block'}}
                >
                    {name}
                </Button>
            </Link>

        ))}
    </Box>
)

export const PageMenu = {
    XS,
    MD
}