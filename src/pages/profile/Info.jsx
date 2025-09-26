import React from 'react'
import useFetch from '../../custom-hook/useFetch'
import { Box, CircularProgress, Stack, TextField, Typography, useTheme } from '@mui/material';
import { useOutletContext } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Info() {
    const {user} = useOutletContext()
    const {t} = useTranslation();
    console.log(user)
  return (
    <Box>
        <Stack pt = {2} spacing = {3}>
            <TextField label = {t('fullName')} variant='outlined' disabled value = {user.fullName} fullWidth sx = {{'.MuiInputBase-root': {
                borderRadius: 4,
              },}} />
            <TextField label = {t('email')} variant='outlined' disabled value = {user.email} fullWidth sx = {{'.MuiInputBase-root': {
                borderRadius: 4
              },}} />
            <TextField label = {t('phone')} variant='outlined' disabled value = {user.phoneNumber} fullWidth sx = {{'.MuiInputBase-root': {
                borderRadius: 4
              },}} />
            
        </Stack>
    </Box>
  )
}

export default Info