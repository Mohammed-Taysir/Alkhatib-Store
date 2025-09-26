import { Box, Typography, useTheme } from '@mui/material'
import React from 'react'

function MainTitle({sectionTitle}) {
  const theme = useTheme();
  return (
    <Box>
      <Typography sx = {{
        fontSize: '2.5rem',
        fontWeight: 'bold',
        backgroundImage: `linear-gradient(90deg, ${theme.palette.neutral.secondary}, #1976d2)`,
         backgroundClip: 'text',
        WebkitTextFillColor:'transparent'
      }}>{sectionTitle}</Typography>
    </Box>
  )
}

export default MainTitle