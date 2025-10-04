import { Box, Button, Stack, TextField, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'

import image from '../../assets/new-img.png'

function Subscribe() {
  const isSmallScreen = useMediaQuery('(max-width: 990px)');
  const theme = useTheme();
  return (
    <Box pb = {3}>
        <Box sx = {{
            position: 'relative',
            minHeight:!isSmallScreen?'450px': "112px",
          
          }}>
          <Box sx = {{
            position: 'absolute',
           
            top: '50%',
            transform: 'translateY(-50%)',
            bgcolor: theme.palette.favColor.main,
            boxShadow: '0 2px 15px rgb(0 0 0 / 10%)',
            p: !isSmallScreen? 5: 2,
            borderRadius: 5,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            maxWidth: !isSmallScreen? '550px': "100%",
            left: !isSmallScreen? '130px': '0',
          
          }} >
            <Typography sx = {{
              color: theme.palette.neutral.secondary,
              fontWeight: 'bold',
              fontSize:!isSmallScreen? '1.6rem': "1rem",
              lineHeight: isSmallScreen? '1.7': null,
            }}>Let’s stay connected 🚀 Subscribe with your email and get all the cool stuff first</Typography>
            <Stack direction={'row'} alignItems={'center'} spacing = {1}>
            <TextField variant='outlined' sx = {{flexGrow: 1,
              '.MuiInputBase-root': {
              borderRadius: 4,
              height: isSmallScreen && '40px',
            }
            }} label = "Subscribe" />
            <Button variant='outlined' sx = {{height:!isSmallScreen? '53.3px': "40px", bgcolor: theme.palette.neutral.secondary, color: '#Fff', textTransform: "capitalize", borderRadius: '15px'}}>Subscribe</Button>
            </Stack>
          </Box>

            {
              !isSmallScreen && <Box sx = {{
                width: '450px',
                height: '400px',
                position: 'absolute',
                top: '50%',
                transform: 'translateY(-50%)',
                right: '60px',
                zIndex: -1,
                borderRadius: 4
              }} component={'img'} src = {image} />
          
            }
            </Box>

    </Box>
  )
}

export default Subscribe