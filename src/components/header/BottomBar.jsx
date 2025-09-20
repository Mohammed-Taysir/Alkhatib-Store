import { Box, Stack } from '@mui/material'
import React from 'react'
import CategoriesMenu from '../categories-menu/CategoriesMenu'

function BottomBar() {
  return (
    <Stack direction = 'row' alignItems={'center'}>
      <Box>
        <CategoriesMenu />  
      </Box>

    </Stack>
  )
}

export default BottomBar