import { Box, CircularProgress, Stack, useMediaQuery } from '@mui/material'
import React from 'react'
import ImgsSlider from './ImgsSlider';
import Details from './Details';

function ProductHead({ product, isLoading, isError, error}) {
    const isSmallScreen = useMediaQuery('(max-width: 850px)');
    return (
        <Box>
             <Stack direction={isSmallScreen ? 'column' : 'row'} spacing={4} >
                <ImgsSlider isLoading = {isLoading} product={product} isError = {isError} />
                <Details sx={{ flexGrow: 1 }} product={product} isLoading = {isLoading}  />
            </Stack>
        </Box>
    )
}

export default ProductHead