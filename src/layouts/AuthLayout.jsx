import { Box, Container, IconButton, useTheme } from '@mui/material'
import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import logo from '../assets/logo.png'
import Logo from '../components/logo/Logo';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { ThemeContext } from '../context/ThemeContext';
import ToggleLanguage from '../components/toggle-language/ToggleLanguage';

function AuthLayout() {
  const { mode, toggleMode } = useContext(ThemeContext);
  const theme = useTheme();
  return (
    <Box bgcolor = {theme.palette.favColor.main} height = "100vh">
      
        <Container maxWidth = 'lg'>
        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} width="100%">
          <Logo />
          <Box display={'flex'} alignItems={'center'} gap={4}>
            <IconButton onClick={toggleMode}>
              {
                mode === 'light' ? <DarkModeIcon fontSize='medium' sx={{ color: 'white' }} /> : <LightModeIcon fontSize='medium' sx={{ color: 'white' }} />
              }
            </IconButton>
            <ToggleLanguage />
          </Box>
        </Box>
        </Container>
  
      <Box sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

      }}>
        <Outlet />
      </Box>
    </Box>
  )
}

export default AuthLayout