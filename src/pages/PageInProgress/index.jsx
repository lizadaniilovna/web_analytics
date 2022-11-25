import React from 'react';
import {Box, Typography} from '@mui/material';

export const PageInProgress = ({pageName = ''}) => (
    <Box
        sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            padding: '10px'
        }}
    >
        <Box alignItems='center' display='flex' gap='12px'>
            <Typography variant="h5"
                        sx={{
                            background: `conic-gradient(
                                #CA4246 16.666%,
                            #E16541 16.666%,
                            #E16541 33.333%,
                            #F18F43 33.333%,
                            #F18F43 50%,
                            #8B9862 50%,
                            #8B9862 66.666%,
                            #476098 66.666%,
                            #476098 83.333%,
                            #A7489B 83.333%)`,
                            backgroundSize: '57%',
                            backgroundColor: "CA4246",
                            backgroundRepeat: 'repeat',
                            fontFamily: '"Work Sans", sans-serif',
                            backgroundClip: "text",
                            fontWeight: '800',
                            WebkitTextFillColor: 'transparent',

                        }}>
                Страница {pageName && `"${pageName}"`} находится в разработке
            </Typography>
        </Box>

    </Box>
)