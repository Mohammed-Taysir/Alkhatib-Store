import { Box, CircularProgress, Stack } from '@mui/material'
import React from 'react'
import MainTitle from '../../main-title/MainTitle'

function ProductsSection({sectionTitle, products, isLoading}) {
  if(isLoading)
    return <CircularProgress />
  return (
    <Box py = {10}>
      <Stack alignItems={'center'}>
        <MainTitle sectionTitle = {sectionTitle} />
      </Stack>

      
      


    </Box>
  )
}

export default ProductsSection