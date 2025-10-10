import { Box, Button, CircularProgress, Grid, Skeleton, Stack, useTheme } from '@mui/material'
import React from 'react'
import MainTitle from '../../main-title/MainTitle'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation } from 'swiper/modules';
import ProductCard from '../../product-card/ProductCard';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ProductSkeleton from '../../skeleton/ProductSkeleton';



function ProductsSection({ sectionTitle, products, isLoading }) {
  const {t} = useTranslation();
  const loadingArray = Array.from({'length': 10});
  
  const theme = useTheme();
  // if (isLoading)
  //   return <CircularProgress />
  return (
    <Box  component={'section'} pb = {4}>
      <Stack alignItems={'center'}>
        <MainTitle sectionTitle={sectionTitle} />
      </Stack>
      


      <Box pt = {4}>
        
        

<Swiper style = {{padding: "20px 0"}} navigation={true} modules={[Navigation]} className="mySwiper"  spaceBetween={25}  
breakpoints={{

  300: {
    slidesPerView: 1.3,
    spaceBetween: 15,
  },
  480: {
    slidesPerView: 1.6
  },
  768: {
    slidesPerView: 2.4,
    spaceBetween: 30,
  },
  1024: {
    slidesPerView: 3.4,
    spaceBetween: 40,
  },
}}
>
        {
          isLoading && loadingArray.map((item, index) => (
            <SwiperSlide key = {index}>
              <ProductSkeleton />
            </SwiperSlide>
          ))
        }
        {
          products && products.map(product => (
            <SwiperSlide key = {product.id} >
              <ProductCard product={product}   />
            </SwiperSlide>
          ))
        }
      </Swiper>

      
     
        
      </Box>


    </Box>
  )
}

export default ProductsSection