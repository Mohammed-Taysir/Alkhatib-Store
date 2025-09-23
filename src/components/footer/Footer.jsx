import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import darklogo from '../../assets/darklogo.png'

function Footer() {
  return (
    <Box bgcolor={'#2b3445'} >
      <Container maxWidth = 'lg' sx = {{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Box component={'img'} src = {darklogo} sx = {{width: 150, height: 140}}></Box>
        <Typography color = '#fff'>All Rights Reserved For Mohammed Taysir Alkhatib &copy;</Typography>
      </Container>
    </Box>
  )
}

export default Footer