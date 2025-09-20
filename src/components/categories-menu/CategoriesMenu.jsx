import { Box, Stack, Typography } from '@mui/material'
import WindowIcon from '@mui/icons-material/Window';
import React from 'react'
import useFetch from '../../custom-hook/useFetch';



function CategoriesMenu() {
  
  return (
    <Stack direction = 'row' alignItems={'center'} spacing = {1}>
      <WindowIcon color = 'secondary' /> 
      <Typography>Categories</Typography>
    </Stack >
  )
}

export default CategoriesMenu