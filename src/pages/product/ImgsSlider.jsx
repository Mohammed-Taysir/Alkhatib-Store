import { Box, Skeleton, Stack, useMediaQuery, useTheme } from '@mui/material'
import { useEffect, useState } from 'react'


function ImgsSlider({ product, isLoading, isError }) {
    const imgs = [
        '/img-1.jpg',
        '/img-2.jpg',
        '/img-3.jpg'
    ];

    console.log(product)

    const [active, setActive] = useState('');
    useEffect(() => {
        if(!isLoading && !isError)
            setActive(product.mainImageUrl);
    }, [isLoading, isError, product])
    const theme = useTheme();
    const isSmallScreen = useMediaQuery('(max-width: 778px)');
    
    return (
        <Box>
            <Box className='main-image'>
                {!isLoading?<Box component={'img'} src={active} sx={{
                    width: isSmallScreen? '100%': '400px',
                    height: '400px',
                    borderRadius: 4
                }} />: <Skeleton variant='rectangle' animation = 'wave' width = {400} height = {416}/>}
            </Box>
            <Box className='imgs-slider'>
                <Stack direction = 'row' spacing={1}>
                    {
                        imgs.map(image => (
                            <Box  key = { image } component='img' sx={{
                                width: '80px',
                                height: '80px',
                                cursor: 'pointer',
                                borderRadius: 4,
                                border: active === image && `1px solid #000`
                            }} src = {image} onClick={() => {
                                setActive(image)
                            }} />

                        ))
                    }
                </Stack>

            </Box>
        </Box>
    )
}

export default ImgsSlider