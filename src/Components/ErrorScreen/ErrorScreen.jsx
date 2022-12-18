import { Box,Typography } from '@mui/material';
import React from 'react'
import './errorscreen.css'



export const ErrorScreen = () => {
    return (
        <>
            <Box>
                <Typography style={{color:'var(--color-text)', textAlign:'center'}}>Waiting for Response</Typography>
                <div className="typing">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </Box>
        
        </>
    )
}
