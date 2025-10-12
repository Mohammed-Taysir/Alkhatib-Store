import React from 'react'
import TopBar from '../components/header/TopBar'
import MidBar from '../components/header/MidBar'
import BottomBar from '../components/header/BottomBar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import { Box, Container, useMediaQuery } from '@mui/material'


function MainLayout() {
  const isSmallScreen = useMediaQuery('(max-width: 500px)');
  return (
    <>
  
      <Box component = 'header'>
        <TopBar />
        <MidBar />
        <BottomBar />
      </Box>
      <Container maxWidth = {'lg'}>
        <Outlet />
      </Container>
      <Footer />

    </>
  )
}

export default MainLayout