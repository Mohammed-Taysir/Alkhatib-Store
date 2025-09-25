import { Box, Container, useTheme } from '@mui/material'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import logo from '../assets/logo.png'

function AuthLayout() {
    const theme = useTheme();
  return (
    <Box>
      <Container maxWidth = 'lg' sx = {{position: 'relative'}}>
        <Link style = {{position: 'absolute'}} to = '/'><Box component={'img'}  src = {logo} sx = {{width: '130px'}} /></Link>
      </Container>
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
    </Box>
  )
}

export default AuthLayout