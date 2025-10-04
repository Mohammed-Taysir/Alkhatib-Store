import { Avatar, Box, Button, Stack, TextField, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import SendIcon from '@mui/icons-material/Send';

function Contact() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery('(max-width: 990px)');
  return (
    <Box py={4}>
      <Box sx={{
        display: 'flex',
        flexDirection: isSmallScreen ? "column" : 'row',
        justifyContent: "space-between"
      }}>
        <Box>
          <Typography component={'h3'} variant='h5' sx={{
            fontFamily: "Bitcount Single Ink",
            color: theme.palette.secondary.neutral
          }}>Alkhatib Store</Typography>
          <Typography color={theme.palette.neutral.main} sx={{ maxWidth: !isSmallScreen ? '550px' : "100%", lineHeight: 1.8, mt: 2 }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur molestiae culpa quam amet accusamus corporis dicta praesentium delectus. Optio deleniti repudiandae inventore mollitia id ea recusandae porro harum expedita neque.</Typography>

          <Typography mt={2} color={theme.palette.neutral.main} fontSize='18px' >Follow Us:</Typography>
          <Stack mt={1} direction={'row'} alignItems={'center'} spacing={2}>
            <Avatar sx={{ bgcolor: theme.palette.neutral.secondary }}><FacebookIcon /></Avatar>
            <Avatar sx={{ bgcolor: theme.palette.neutral.secondary }}><InstagramIcon /></Avatar>
            <Avatar sx={{ bgcolor: theme.palette.neutral.secondary }}><YouTubeIcon /></Avatar>
            <Avatar sx={{ bgcolor: theme.palette.neutral.secondary }}><LinkedInIcon /></Avatar>
          </Stack>
        </Box>

        <Box display={'flex'} flexDirection='column' gap={2} mt={isSmallScreen && 3} >
          <Typography align='center' sx={{ fontSize: '20px', color: theme.palette.neutral.secondary }}>Get In Touch</Typography>
          <Stack direction={'row'} alignItems={'center'} spacing={3}>
            <TextField sx={{
              flexGrow: 1, '.MuiInputBase-root': {
                borderRadius: 4
              }
            }} variant='outlined' label="First Name" />
            <TextField sx={{
              flexGrow: 1, '.MuiInputBase-root': {
                borderRadius: 4
              }
            }} variant='outlined' label="Last Name" />
          </Stack>
          <TextField sx={{
            '.MuiInputBase-root': {
              borderRadius: 4
            }
          }} variant='outlined' label="Email" fullWidth />
          <TextField sx={{
            '.MuiInputBase-root': {
              borderRadius: 4
            }
          }} variant='outlined' label="Subject" fullWidth />

          <TextField
            sx={{
              '.MuiInputBase-input': {
                height: '150px',

              },
              '.MuiInputBase-root': {
                borderRadius: 4
              }
            }}
            label="Message"
          />

          <Button variant="contained" endIcon={<SendIcon />} sx={{ bgcolor: theme.palette.neutral.secondary, py: 1.2, borderRadius: 5 }}>
            Send
          </Button>

        </Box>

      </Box>
    </Box>
  )
}

export default Contact