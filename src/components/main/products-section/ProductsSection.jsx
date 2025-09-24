import { Box, Button, CircularProgress, Grid, Stack, useTheme } from '@mui/material'
import React from 'react'
import MainTitle from '../../main-title/MainTitle'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ProductCard from '../../product-card/ProductCard';
import { Link } from 'react-router-dom';



function ProductsSection({ sectionTitle, products, isLoading }) {
  const theme = useTheme();
  if (isLoading)
    return <CircularProgress />
  return (
    <Box py={10}>
      <Stack alignItems={'center'}>
        <MainTitle sectionTitle={sectionTitle} />
      </Stack>


      <Box pt = {4}>
        
        <Box sx = {{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 4
        }}>
          
          {
            products.map(product => (
              
                <ProductCard key = {product.id} product = {product} />
             
            ))
          }
        </Box>

      
     
        <Box textAlign={'center'} mt = {3}>
          <Button variant='contained' sx = {{
            bgcolor: theme.palette.neutral.secondary
          }} size='large'><Link to = '/shop' style = {{textDecoration: 'none', color: '#fff'}}>More</Link></Button>
        </Box>
      </Box>


    </Box>
  )
}

export default ProductsSection