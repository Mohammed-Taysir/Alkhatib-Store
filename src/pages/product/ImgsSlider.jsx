import { Box, Stack, useMediaQuery, useTheme } from '@mui/material'
import { useState } from 'react'


function ImgsSlider({ product }) {
    const imgs = [
        '/img-1.jpg',
        '/img-2.jpg',
        '/img-3.jpg'
    ];

    const [active, setActive] = useState(product.mainImageUrl);
    const theme = useTheme();
    const isSmallScreen = useMediaQuery('(max-width: 778px)');
    return (
        <Box>
            <Box className='main-image'>
                <Box component={'img'} src={active} sx={{
                    width: isSmallScreen? '100%': '400px',
                    height: '400px',
                    borderRadius: 4
                }} />
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