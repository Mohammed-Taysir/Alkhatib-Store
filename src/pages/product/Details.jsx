import { Box, Button, Chip, IconButton, Rating, Stack, Typography, useTheme } from '@mui/material'
import React, { useState } from 'react'
import Divider from '@mui/material/Divider';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
function Details({ product }) {
  const theme = useTheme();
  const [onHover, setOnHover] = useState(false);
  
  return (
    <Box sx = {{overflow: 'hidden'}}>
      <Stack spacing={1} pb={2}>
        <Typography fontSize='1.9rem'>{product.name}</Typography>
        <Stack direction={'row'} spacing={2}>
          <Rating name="disabled" value={product.rate} readOnly />
          <Typography fontSize={'14px'} color={theme.palette.neutral.main}>(3,671 reviews)</Typography>
        </Stack>
      </Stack>
      <Divider />
      <Box pt={2} sx = {{
        display: 'flex',
        flexDirection: 'column',
        gap: 2
      }}>
        <Stack spacing={1}>
          <Typography fontSize='1.9rem'>Price: ${product.price}</Typography>
          <Typography fontSize='1.34rem'>Category: <Chip label={product.categoryName} variant="outlined" sx={{
            bgcolor: theme.palette.neutral.main,
            color: '#fff'
          }} /></Typography>
          <Typography>{product.description}</Typography>
        </Stack>
        <Stack direction={'row'} spacing={3}>
          <Button variant='contained' size = 'large' sx = {{
            bgcolor: theme.palette.text.primary,
            color: theme.palette.light.main,
            borderRadius: '30px',
            py: 1.8,
            textTransform: 'capitalize',
            flexGrow: 1
          }}>
            Add To Cart <ShoppingCartOutlinedIcon sx = {{ml: 2}} />
          </Button>
          <IconButton  sx = {{
            px: 2,
            py: 2,
            fontSize: '30px',
            border: '1px solid #eee'
          }} onMouseEnter={() => {
            setOnHover(true)
          }}
          onMouseLeave={() => {
            setOnHover(false)
          }}>
            {
              !onHover? <FavoriteBorderOutlinedIcon fontSize = "25px" />: <FavoriteIcon  fontSize = "25px" />  
            }
          </IconButton>
        </Stack>
      </Box>
    </Box>
  )
}

export default Details