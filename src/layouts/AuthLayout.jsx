import { Box, useTheme } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'

function AuthLayout() {
    const theme = useTheme();
  return (
    <Box sx = {{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: theme.palette.favColor.main
    }}>
        <Outlet />
    </Box>
  )
}

export default AuthLayout