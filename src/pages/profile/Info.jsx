import React from 'react'
import useFetch from '../../custom-hook/useFetch'
import { Box, CircularProgress, Stack, TextField, Typography, useTheme } from '@mui/material';
import { useOutletContext } from 'react-router-dom';

function Info() {
    const {user} = useOutletContext()
    console.log(user)
  return (
    <Box>
        <Stack pt = {2} spacing = {3}>
            <TextField label = 'Full Name' variant='outlined' disabled value = {user.fullName} fullWidth sx = {{'.MuiInputBase-root': {
                borderRadius: 4
              },}} />
            <TextField label = 'Email' variant='outlined' disabled value = {user.email} fullWidth sx = {{'.MuiInputBase-root': {
                borderRadius: 4
              },}} />
            <TextField label = 'Phone Number' variant='outlined' disabled value = {user.phoneNumber} fullWidth sx = {{'.MuiInputBase-root': {
                borderRadius: 4
              },}} />
            
        </Stack>
    </Box>
  )
}

export default Info