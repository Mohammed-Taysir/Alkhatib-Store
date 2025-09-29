import { Box } from '@mui/material'
import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';


const banners = []


function MainBanner() {
  return (
    <Box py = {3}>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
        style = {{borderRadius: '40px'}}
      >
        {
          banners.map(banner => (
            <SwiperSlide key = {banner} >
              <Box sx = {{width: '100%', height: '100%', }} component={'img'} src = {banner} />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </Box>
  )
}

export default MainBanner