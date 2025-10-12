import { Box, Button, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
import MotionedSection from '../motioned-section/MotionedSection';
import { motion } from 'framer-motion';

function BannerSection({ text, subText, img }) {
    const isSmallScreen = useMediaQuery('(max-width: 778px)');
    const theme = useTheme();
    const TextMotion = motion(Box);
    return (
        <Box component={'section'} overflow={'hidden'} position={'relative'} height={isSmallScreen ? "310px" : "510px"}
            sx = {{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
               my: 7,
            }}
        >
            <Box component={'img'} src={img} sx={{
                maxWidth: '100%',
                borderRadius: 8,
               
                width: '100%',
                height: '100%',
           

            }} />

            <TextMotion p = {2} sx = {{
                position: 'absolute',
                zIndex: 99,
                display:"flex",
                flexDirection: 'column',
                alignItems: 'center',
                gap: 2,
               

 
                height: 'fit-content'
                
            }} initial = {{x: 100, opacity: 0}}  whileInView={{opacity: 1, x: 0, transition: {
                duration: 1.5
            }}}  >

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
               
            </TextMotion>

        </Box>
    )
}

export default BannerSection