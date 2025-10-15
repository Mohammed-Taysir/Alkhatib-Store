import { Box, Button, Card, CardContent, CardMedia, IconButton, Link, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useState } from 'react'
import StarIcon from '@mui/icons-material/Star';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import QuickView from './QuickView';
import useFetch from "../../custom-hook/useFetch"
import { useTranslation } from 'react-i18next';
function ProductCard({ product }) {
  const theme = useTheme();
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const {t} = useTranslation();




  return (
    <Box>
      {
        visible && <QuickView product={product} onClose={() => {
          setVisible(false)
        }} />
      }
      <Card sx={{
        boxShadow: '0 2px 15px rgb(0 0 0 / 10%)',
        transition: "0.3s",
        ':hover': {
          transform: 'translateY(-10px)'
        },
        ':hover .discount-rating': {
          top: 0
        },
        ':hover .view-button': {
          right: 5
        },
        ":hover .my-button" : {
          bottom: 5
        }
        ,
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 5,
        height: '377.67px'

      }}>

        <Stack className='discount-rating' direction='row' justifyContent={'space-between'} width='100%' maxWidth={'calc(100% - 15px)'} position={'absolute'} zIndex={1} py={1} top="-100%" sx={{
          left: '50%',
          transform: 'translateX(-50%)'
        }}>
          <Typography bgcolor={theme.palette.secondary.main} color="#fff" width='40px' height='30px' sx={{
            display: 'flex',
            justifyContent: "center",
            alignItems: 'center',
            borderRadius: '15px',
            transition: '0.5s'
          }}>{product.discount}%</Typography>
          <Typography bgcolor={theme.palette.neutral.main} color='#fff' width='40px' height='30px' sx={{
            display: 'flex',
            justifyContent: "center",
            alignItems: 'center',
            borderRadius: '15px',
            fontSize: '14px'
          }}><StarIcon sx={{
            color: 'gold',
            fontSize: '19px'
          }} /> {product.rate}</Typography>
        </Stack>
        <Box position={'relative'} overflow={'hidden'} >
          <CardMedia component={'img'} image={product.mainImageUrl} alt={product.name} sx={{
            objectFit: 'contained',
            maxWidth: '100%',
            height: '220px'
          }} >

          </CardMedia>

          <Box className={'view-button'} sx={{
            position: 'absolute',
           
            bottom: 2,
            display: 'flex',

            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',

            right: '-100%',
            height: 'calc(100% - 45px)',
            transition: "0.3s"

          }}>
            <IconButton sx={{
              bgcolor: '#fff',

              ".MuiButtonBase-root": {
                color: theme.palette.neutral.secondary,
              }
            }} onClick={() => {
              setVisible(true)
            }}><VisibilityOutlinedIcon sx =  {{color: `${theme.palette.neutral.main} !important`}} /></IconButton>
            <IconButton sx={{
              bgcolor: '#fff'
            }}><FavoriteBorderOutlinedIcon  sx =  {{color: `${theme.palette.neutral.main} !important`}} /></IconButton>
          </Box>

          <Button variant='contained' className='my-button' sx = {{
            bgcolor: theme.palette.neutral.secondary,
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            bottom: -100,
            borderRadius: 15,
            transition: "0.3s",
             textTransform: 'capitalize',
          }}>
            {t('view')}
          </Button>

        </Box>
        <CardContent>
          <Stack spacing={2}>
            <Typography sx={{
              fontSize: "1.3rem",
              ":hover": {
                textDecoration: 'underline',
                cursor: 'pointer'
              }
            }} onClick={() => {
              navigate(`/product/${product.id}`)
            }}>{product.name}</Typography>
            <Typography color={theme.palette.secondary.main} fontSize='15px'>${product.price}</Typography>
          </Stack>

        </CardContent>
      </Card>
    </Box>
  )
}

export default ProductCard