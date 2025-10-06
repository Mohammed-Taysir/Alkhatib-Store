import { Box, CircularProgress, Stack, Typography } from '@mui/material';
import React from 'react'
import useFetch from '../../custom-hook/useFetch';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";


function BrandsBanner() {
    const {data, isLoading, isError, error} = useFetch('/Customer/Brands', 'brands');
    if(isLoading)
        return <CircularProgress />

    if(isError) 
        return <Typography>Error: {error.message}</Typography>

    const brands = data?.data;
    console.log(brands)

  return (
    <Box sx = {{overflow: "hidden"}} className = 'banner-container' py = {3}>
        <Stack direction = 'row' alignItems = 'center' className = 'brands-banner'>
        {
           brands.length > 0 && brands?.map(brand =><Box key = {brand.name} component={'img'} width = {'100px'} alt = {brand.name} src = {brand.mainImageUrl} />)
                
         
        }
    </Stack>
    </Box>
  )
}

export default BrandsBanner