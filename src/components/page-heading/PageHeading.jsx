import { Box, Typography, useTheme } from '@mui/material'
import React from 'react'

function PageHeading({title, description, image, color, left}) {
    const theme = useTheme();
  return (
    <Box position={'relative'}>
        <Box component={'img'} src= {image} width='100%' height='350px' borderRadius={4} />
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: left,
          fontSize: {xs: '2rem', md: '3rem'},
          transform: 'translateY(-50%)',
          color: color,
          fontWeight: 'bold',
          display: 'flex',
          flexDirection: 'column',
          gap: 2
        }}>
          <Typography component={'h2'} variant='h3' fontWeight={'bold'} >{title}</Typography>
        <Typography >{description}</Typography>
        </Box>
      </Box>
  )
}

export default PageHeading