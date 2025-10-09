import { Avatar, Box, Button, Stack, Typography, useTheme } from '@mui/material'
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Widget({ blogs }) {
    const theme = useTheme();
    return (
        <Box>
            <Box>
                <Typography fontWeight='bold'>Post Widget</Typography>
                <Stack spacing={3} py={3}>
                    {
                        blogs.map(blog => (
                            <Box key={blog.id} display={'flex'} gap={2}>
                                <Avatar src={blog.img} />
                                <Box display={'flex'} flexDirection={'column'} gap={1}>
                                    <Typography fontSize="0.9rem" fontWeight='bold'
                                        sx={{
                                            ":hover": {
                                                cursor: 'pointer',
                                                textDecoration: 'underline'
                                            }
                                        }}>{blog.title}</Typography>

                                    <Typography fontSize={'0.7rem'} color={theme.palette.neutral.main}>{blog.date}</Typography>
                                </Box>
                            </Box>
                        ))
                    }
                </Stack>
            </Box>
            <Box>
                <Typography fontWeight={'bold'}>Social Media Widget</Typography>
                <Stack spacing={3} py={3}>
                    <Box display={'flex'} justifyContent={'space-between'} alignItems = {'center'} bgcolor = {theme.palette.favColor.main} px = {2} py = {1} borderRadius={8}>
                        <Avatar sx={{ bgcolor: theme.palette.neutral.secondary }}><FacebookIcon /></Avatar>
                        <Typography color = {theme.palette.neutral.main} sx = {{
                            ":hover": {
                                cursor: 'pointer'
                            }
                        }}>Follow</Typography>
                    </Box>
                    <Box display={'flex'} justifyContent={'space-between'} alignItems = {'center'} bgcolor = {theme.palette.favColor.main} px = {2} py = {1} borderRadius={8}>
                        <Avatar sx={{ bgcolor: theme.palette.neutral.secondary }}><InstagramIcon /></Avatar>
                        <Typography color = {theme.palette.neutral.main} sx = {{
                            ":hover": {
                                cursor: 'pointer'
                            }
                        }}>Follow</Typography>
                    </Box>
                    <Box display={'flex'} justifyContent={'space-between'} alignItems = {'center'} bgcolor = {theme.palette.favColor.main} px = {2} py = {1} borderRadius={8}>
                        <Avatar sx={{ bgcolor: theme.palette.neutral.secondary }}><YouTubeIcon /></Avatar>
                        <Typography color = {theme.palette.neutral.main} sx = {{
                            ":hover": {
                                cursor: 'pointer'
                            }
                        }}>Follow</Typography>
                    </Box>
                    <Box display={'flex'} justifyContent={'space-between'} alignItems = {'center'} bgcolor = {theme.palette.favColor.main} px = {2} py = {1} borderRadius={8}>
                        <Avatar sx={{ bgcolor: theme.palette.neutral.secondary }}><LinkedInIcon /></Avatar>
                        <Typography color = {theme.palette.neutral.main} sx = {{
                            ":hover": {
                                cursor: 'pointer'
                            }
                        }}>Follow</Typography>
                    </Box>
                    

                </Stack>
            </Box>
        </Box>
    )
}

export default Widget