import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import darklogo from '../../assets/darklogo.png'
import { useTranslation } from 'react-i18next'

function Footer() {
  const {t} = useTranslation();
  return (
    <Box bgcolor={'#2b3445'} >
      <Container maxWidth = 'lg' sx = {{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Box component={'img'} src = {darklogo} sx = {{width: 150, height: 140}}></Box>
        <Typography color = '#fff'>{t('copyRight')} &copy;</Typography>
      </Container>
    </Box>
  )
}

export default Footer