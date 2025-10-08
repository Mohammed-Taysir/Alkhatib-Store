import { Box, Button, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { Link } from 'react-router-dom';


const banners = ['./slider-01.jpg', './slider-02.jpg', './slider-03.jpg']


function MainBanner() {
  const isSmallScreen = useMediaQuery('(max-width: 770px)');
  const theme = useTheme();
  return (
    <Box py = {3}>
      <Swiper
        cssMode={false}
        navigation={true}
        pagination={true}
        grabCursor = {2}
        keyboard={true}
    
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
        style = {{borderRadius: '40px', height: '411px'}}
      >
        {
          banners.map(banner => (
            <SwiperSlide key = {banner} style = {{position: 'relative', display: 'flex', justifyContent: 'center', alignItems: "center"}} >
              <Box sx = {{position: 'absolute', top: 0, left: 0, zIndex: -1,width: '100%', height: '100%'}} component={'img'} src = {banner} />
              <Box sx = {{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 2

              }}>
                <Typography color = "#fff">Highest Quality</Typography>
                <Typography maxWidth = {!isSmallScreen?'450px': "100%"} sx = {{
                  fontSize: isSmallScreen && "20px"
                }} align = 'center' fontWeight = 'bold' component={'h1'} variant='h4' color = "#fff">Discover The Perfect Products, Quality, And Style</Typography>
                <Typography color = {theme.palette.favColor.main}>Alkhatib Store The Joy of Shopping</Typography>
                <Button component = {Link} to = '/shop/1' variant='contained' size = 'large' sx = {{bgcolor: theme.palette.neutral.secondary, textTransform: 'capitalize'}}>Shop Now</Button>
              </Box>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </Box>
  )
}

export default MainBanner