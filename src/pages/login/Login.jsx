import { Box, Button, Card, CardContent, Link, TextField, Typography, useTheme } from '@mui/material'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom';

function Login() {
  const theme = useTheme();
  return (
    <Box component='form' width='100%' display='flex' justifyContent={'center'} >
      <Card sx={{ width: { xs: '100%', sm: 450 }, borderRadius: 6,}}>
        <CardContent>
          <Box>
            <Typography textAlign={'center'} variant='h6' color={theme.palette.text.primary}>Login</Typography>
          </Box>
          <Box p={3} display={'flex'} flexDirection={'column'}  gap = {3} sx = {{ '.MuiBox-root': {
            borderBottomColor: theme.palette.favColor.main,
            borderWidth: 2
          }
            
          }}>
            
            <TextField variant='outlined' label='Email' sx={{
              width: `100%`, borderRadius: 5,
              '.MuiInputBase-root': {
                borderRadius: 2
              }
            }} />
            
            <TextField variant='outlined' label='Password' sx={{
              width: `100%`, borderRadius: 5,
              '.MuiInputBase-root': {
                borderRadius: 2
              }
            }} />
            <Button variant='contained' size = 'large' type = 'submit' >Sign Up</Button>
            <Typography textAlign={'center'} fontSize = '14px' color = {theme.palette.neutral.main}>Forget Password <Link component={RouterLink} to = '/auth/'>reset password</Link></Typography>

          </Box>

        </CardContent>


      </Card>
    </Box>
  )
}

export default Login