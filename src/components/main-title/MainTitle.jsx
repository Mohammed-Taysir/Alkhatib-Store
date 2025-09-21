import { Box, Typography } from '@mui/material'
import React from 'react'

function MainTitle({sectionTitle}) {
  return (
    <Box className = 'main-title' position={'relative'} border = {'3px solid'}  sx = {{
        width: 'fit-content',
        padding: '10px 20px'
    }}>
        <Typography textTransform={'uppercase'} fontWeight={'bold'} fontSize = '1.8rem'>{sectionTitle}</Typography>
    </Box>
  )
}

export default MainTitle