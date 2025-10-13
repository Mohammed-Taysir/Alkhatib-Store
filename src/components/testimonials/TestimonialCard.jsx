import { Avatar, Box, Card, CardContent, Typography, useTheme } from '@mui/material'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

function TestimonialCard({ testi }) {
    const theme = useTheme();

    return (
        <Card sx={{
            bgcolor: '#f9fafb',
            p: 3,
            pt: 7,
            borderRadius: 6,
            boxShadow: '0 2px 15px rgb(0 0 0 / 10%)',
            position: 'relative'
        }}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <Typography  color={theme.palette.favColor.secondary}>{testi.comment}</Typography>
                <Box sx = {{
                    position: 'absolute',
                    top: 5,
                    color: theme.palette.neutral.main
                   
                }}>
                    <FontAwesomeIcon fontSize={'60px'} icon={faQuoteLeft} />
                </Box>
                <Box display='flex' flexDirection={'column'} justifyContent={'center'} alignItems={'center'} gap={1}>
                    <Avatar sx={{
                        width: '80px',
                        height: '80px'
                    }} src={testi.image} />
                    <Typography fontSize={'1.3rem'} color={theme.palette.neutral.secondary} fontWeight='bold' >{testi.name}</Typography>
                    <Typography fontSize={'0.9rem'} color={theme.palette.neutral.main}>{testi.role}</Typography>
                </Box>
            </CardContent>

        </Card>
    )
}

export default TestimonialCard