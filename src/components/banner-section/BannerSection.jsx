import { Box, Button, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';

function BannerSection({ text, subText, img }) {
    const isSmallScreen = useMediaQuery('(max-width: 778px)');
    const theme = useTheme();
    return (
        <Box component={'section'} overflow={'hidden'} position={'relative'} height={isSmallScreen ? "310px" : "510px"}
            sx = {{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
               marginBottom: 7
            }}
        >
            <Box component={'img'} src={img} sx={{
                maxWidth: '100%',
                borderRadius: 8,
               
                width: '100%',
                height: '100%',
           

            }} />

            <Box p = {2} sx = {{
                position: 'absolute',
                zIndex: 1,
                display:"flex",
                flexDirection: 'column',
                alignItems: 'center',
                gap: 2
            }}>

                <Typography sx = {{
                    color: theme.palette.neutral.secondary,
                    fontWeight: 'bold',
                    fontSize: '1.7rem'
                }}>{text}</Typography>
                <Typography sx = {{
                    color: theme.palette.neutral.main,
                    fontWeight: 'bold',
                    fontSize: "1.4rem"
                }}>{subText}</Typography>
               
               <Button variant='contained' sx = {{
                bgcolor: theme.palette.neutral.secondary,
                fontWeight: 'bold',
                textTransform: 'capitalize',
                py: 1.4,
                px: 4,
                borderRadius: 15,

               }} component = {Link} to = '/shop/1'>Discover Now</Button>
               
            </Box>

        </Box>
    )
}

export default BannerSection