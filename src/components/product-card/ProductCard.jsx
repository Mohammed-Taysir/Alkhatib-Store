import { Box, Button, Card, CardContent, CardMedia, Link, Stack, Typography, useTheme } from '@mui/material'
import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import { Link as RouterLink } from 'react-router-dom';

function ProductCard({ product }) {
  const theme = useTheme();
  return (
    <Card  sx={{
      boxShadow: '0 2px 15px rgb(0 0 0 / 10%)',
      transition: "0.3s",
      ':hover': {
        transform: 'translateY(-10px)'
      },
      ':hover .discount-rating': {
        top: 0
      },
      ':hover .view-button': {
        bottom: '15px'
      }
      ,
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 5
      
    }}>
      <Stack className = 'discount-rating'  direction = 'row' justifyContent={'space-between'} width = '100%' position={'absolute'} zIndex={1} p = {2} top = "-100%">
        <Typography bgcolor= {theme.palette.secondary.main} color = "#fff" width = '40px' height = '30px' sx = {{
          display: 'flex',
          justifyContent:"center",
          alignItems: 'center',
          borderRadius: '15px',
          transition: '0.5s'
        }}>{product.discount}%</Typography>
        <Typography bgcolor = {theme.palette.neutral.main} color = '#fff' width = '40px' height = '30px' sx = {{
          display: 'flex',
          justifyContent:"center",
          alignItems: 'center',
          borderRadius: '15px',
          fontSize: '14px'
        }}><StarIcon sx = {{
          color: 'gold',
          fontSize: '19px'
        }} /> {product.rate}</Typography>
      </Stack>
      <Box position={'relative'} sx = {{
        overflow: 'hidden'
      }}>
        <CardMedia component={'img'} image={product.mainImageUrl} alt = {product.name} sx={{
        objectFit: 'contained',
        maxWidth: '100%',
        height: '220px'
      }} >
        
      </CardMedia>
      <Button className='view-button' variant='contained' sx = {{
        bgcolor: theme.palette.neutral.main,

        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        bottom: "-100%",
        boxShadow: '0 0 12px rgba(0, 0, 0, .2)',
        transition: '0.5s',
        px: 2,
        py: 1
        
      }}><Link component={RouterLink} to = {`/product/${product.id}`} sx = {{
        color: '#fff',
        fontSize: '1rem',
        textTransform: 'capitalize'

      }}>view</Link></Button>
      </Box>
      <CardContent>
        <Stack spacing = {2}>
          <Typography sx={{
            fontSize: { xs: '1.5rem', md: '1.1rem' },
            ":hover": {
              textDecoration: 'underline',
              cursor: 'pointer'
            }
          }}>{product.name}</Typography>
          <Typography color = {theme.palette.secondary.main} fontSize = '15px'>${product.price}</Typography>
        </Stack>

      </CardContent>
    </Card>
  )
}

export default ProductCard