import { Box } from '@mui/material'
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function FloatingIcons() {
  return (
    <Box width = '50px' bgcolor={'#fff'} display={'flex'} flexDirection={'column'} gap = {1.4} position={'fixed'} top = {'50%'} right = {10} zIndex={9999} boxShadow={'0 2px 15px rgb(0 0 0 / 10%)'} sx = {{
      py: 1,
      alignItems: 'center',
      borderRadius: 8
    }}>
        <FacebookIcon sx={{
                
              }}  />

              <InstagramIcon sx={{
               
              }}  />

              <LinkedInIcon sx={{
         
              }}  />
    </Box>
  )
}

export default FloatingIcons