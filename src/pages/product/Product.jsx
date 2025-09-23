import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../custom-hook/useFetch';
import { Box, CircularProgress, Container, Stack, useMediaQuery } from '@mui/material';
import ImgsSlider from './ImgsSlider';
import Details from './Details';

function Product() {
  const {id} = useParams();

  const {data, isLoading, isError, error} = useFetch(`/Customer/Products/${id}`, 'product', false, id);

  const product = data?.data;
  const isSmallScreen = useMediaQuery('(max-width: 850px)');
  if(isLoading)
    return <CircularProgress />

  if(isError)
    return <p>Error : {error.message}</p>
  

  return (
    <Box py = {5}>
      <Container maxWidth = 'lg'>
        <Stack direction = { isSmallScreen? 'column': 'row'} spacing={4} >
          <ImgsSlider product = {product} />
          <Details sx = {{flexGrow: 1}} product = {product} />
        </Stack>
      </Container>
    </Box>
  )
}

export default Product