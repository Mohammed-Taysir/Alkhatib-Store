import { Box, Container, Stack, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import darklogo from '../../assets/darklogo.png'
import { useTranslation } from 'react-i18next'
import Logo from '../logo/Logo';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  const { t } = useTranslation();
  const date = new Date();
  const isSmallScreen = useMediaQuery('(max-width: 515px)');
  const isMediumScreen = useMediaQuery('(max-width:768px)');
  return (
    <Box bgcolor={'#2b3445'} >
      <Container maxWidth='lg' >
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: isMediumScreen ? "column": 'row',
    
        }}>
          <Box sx = {{
            margin: isSmallScreen && 'auto'
          }}>
            <Logo isDark={true} />
          </Box>
          <Stack alignItems={'center'} spacing={1} mb = {2}>
            <Typography fontWeight={'bold'} color = '#fff'>Follow On: </Typography>
            <Stack direction={'row'} alignItems={'center'} spacing={1}>
            <FacebookIcon sx={{
                  color: '#fff'
                }} fontSize='medium' />
  
                <InstagramIcon sx={{
                  color: '#fff'
                }} fontSize='medium' />
  
                <LinkedInIcon sx={{
                  color: '#fff'
                }} fontSize='medium' />
            </Stack>
          </Stack>
          <Stack spacing={1} sx = {{
            margin: isSmallScreen && 'auto',
          }}>
            <Typography color='#fff' align='center' fontWeight='bold'>Payments</Typography>
            <Stack direction='row' alignItems='center' spacing={2}>
              <Box component={'img'} src="/payment.png" alt="" width={40} />
              <Box component={'img'} src="/payment2.png" alt="" width={40} />
              <Box component={'img'} src="/payment3.png" alt="" width={40} />
              <Box component={'img'} src="/payment4.png" alt="" width={40} />
              <Box component={'img'} src="/payment5.png" alt="" width={40} />
            </Stack>
          </Stack>
        </Box>

        <Typography mt = {1.2} align = 'center' color='#fff'>&copy;{date.getFullYear()} <span style = {{textTransform: 'uppercase'}}>Alkhatib Store</span> | All Rights Reserved | Designed By Eng. Mohammed Taysir</Typography>

      </Container>
    </Box>
  )
}

export default Footer