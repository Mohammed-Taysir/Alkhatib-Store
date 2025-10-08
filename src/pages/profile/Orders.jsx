import { Box, Button, Typography, useTheme } from '@mui/material'
import React from 'react'

function Orders() {
  const theme = useTheme();
  return (
    <Box>
      <Box display={'flex'} justifyContent={'space-between'} flexWrap = "wrap" alignItems={'center'} py = {3} px = {3} border = {`1px solid ${theme.palette.neutral.main}`} borderRadius={3}>
        <Typography>No order has been made yet. </Typography>
        <Button variant = 'contained' sx = {{
          bgcolor: theme.palette.neutral.secondary, 
          textTransform: 'capitalize',
          borderRadius: 6
        }}>Browse Products</Button>
      </Box>
    </Box>
  )
}

export default Orders