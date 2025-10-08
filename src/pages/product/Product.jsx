import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../custom-hook/useFetch';
import { Box, CircularProgress, Container, Stack, useMediaQuery } from '@mui/material';
import ImgsSlider from './ImgsSlider';
import Details from './Details';
import Reviews from './Reviews';
import SpecificationTabs from './SpecificationTabs';

function Product() {
  const {id} = useParams();
  console.log(id)

  const {data, isLoading, isError, error} = useFetch(`/Customer/Products/${id}`, 'product', false, id);

  const product = data?.data;
  console.log(product)
  
  const isSmallScreen = useMediaQuery('(max-width: 850px)');

  let message = '';
  if(isError)
    message =  <p>Error : {error.message}</p>
  

  return (
    <Box py = {5}>
      <Container maxWidth = 'lg'>
     
        {isLoading? <Box height={'250px'} display={'flex'} justifyContent={'center'} alignItems={"center"}><CircularProgress/></Box>: <Stack direction = { isSmallScreen? 'column': 'row'} spacing={4} >
          <ImgsSlider product = {product} />
          <Details  sx = {{flexGrow: 1}} product = {product} />
        </Stack>}
        <SpecificationTabs product={product} />
      </Container>
    </Box>
  )
}

export default Product