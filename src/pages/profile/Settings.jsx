import { Box, Button, Stack, useTheme } from '@mui/material'
import React from 'react'
import Info from './Info'

function Settings() {
  const theme = useTheme();
  return (

    <Box>
      <Info />
      <Stack direction={'row'} alignItems={'center'} spacing = {2} mt = {3} justifyContent={'flex-end'}>
        <Button variant = 'contained' sx = {{
          bgcolor: theme.palette.neutral.secondary,
          borderRadius: 3
        }} >Save</Button>
        <Button variant = 'contained' sx = {{
          bgcolor: theme.palette.neutral.secondary,
          borderRadius: 3
        }}  >Change</Button>
      </Stack>
    </Box>
  )
}

export default Settings