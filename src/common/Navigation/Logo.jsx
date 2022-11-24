import * as React from "react";
import {Link} from 'react-router-dom';


import WorkIcon from "@mui/icons-material/Work";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const LOGO_NAME = 'STD WORK'

const MD = () => (
    <Box sx={{display: {xs: 'none', md: 'flex'}}}>
        <Link to='/'>
            <Box display='flex' alignItems='center'>
                <WorkIcon sx={{display: {xs: 'none', md: 'flex'}, mr: 1, color: '#35F6A8'}}/>
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    sx={{
                        mr: 2,
                        display: {xs: 'none', md: 'flex'},
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: '#35F6A8',
                    }}
                >
                    {LOGO_NAME}
                </Typography>
            </Box>
        </Link>
    </Box>

)

const XS = () => (
    <Box sx={{display: {xs: 'flex', md: 'none'}}} flexGrow={1}>
        <Link to='/'>
            <Box display='flex' alignItems='center'>
                <WorkIcon sx={{display: {xs: 'flex', md: 'none'}, mr: 1, color: '#35F6A8'}}/>
                <Typography
                    variant="h5"
                    noWrap
                    component="a"
                    sx={{
                        mr: 2,
                        display: {xs: 'flex', md: 'none'},
                        flexGrow: 1,
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: '#35F6A8',
                    }}
                >
                    {LOGO_NAME}
                </Typography>
            </Box>
        </Link>
    </Box>
)

export const Logo = {
    MD,
    XS
}