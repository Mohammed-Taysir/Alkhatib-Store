import { Alert, Box, Button, Chip, IconButton, Rating, Skeleton, Stack, Typography, useTheme } from '@mui/material'
import React, { useContext, useState } from 'react'
import Divider from '@mui/material/Divider';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { LoginContext } from '../../context/LoginContext';
import { useNavigate } from 'react-router-dom';
import { Bounce, Flip, toast } from 'react-toastify';
import axios from 'axios';
import AxiosUserInstance from '../../api/AxiosUserInstance';
import { useQueryClient } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';
function Details({ product, isLoading, isError }) {
  const theme = useTheme();

  const [onHover, setOnHover] = useState(false);
  const { isLoggedin } = useContext(LoginContext);
  const {t} = useTranslation();

  const queryClient = useQueryClient();

  const navigate = useNavigate();

  const addToCart = async () => {
    if (!isLoggedin) {
      toast.error('You must log in first', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      navigate('/auth/');
    } else {

      try {
        const response = await AxiosUserInstance.post('/Customer/Carts', { "productId": product.id });
        if(response.status === 200) {
          toast.success(response.data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Flip,
        });
        queryClient.invalidateQueries(['cartItems']);
        }
      } catch (error) {

        toast.error(error.response.data.error, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });


      }

    }
  }
  return (
    <Box sx={{ overflow: 'hidden' }} flexGrow = {1}>

      <Stack spacing={1} pb={2}>
        {!isLoading?<Typography fontSize='1.8rem'>{product.name}</Typography>: <Skeleton variant='text' fontSize = {'1.8rem'} height = {40} />}
        {!isLoading?<Stack direction={'row'} spacing={2}>
          <Rating name="disabled" value={product.rate} readOnly />
          <Typography fontSize={'14px'} color={theme.palette.neutral.main}>(3,671 {t('reviews')})</Typography>
        </Stack>: <Skeleton variant='text' fontSize ={'14px'} />}
      </Stack>
      <Divider />
      <Box pt={2} sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2
      }}>
        <Stack spacing={1}>
          {!isLoading?<Typography fontSize='1.8rem'>{t('Price')}: ${product.price}</Typography>: <Skeleton variant='text' fontSize = {'1.8rem'} height = {35}/>}
          < Typography fontSize='1.34rem' display={'flex'} gap = {2} alignItems={'center'}>{t('category')}: {!isLoading ?<Chip label={product.categoryName} variant="outlined" sx={{
            bgcolor: theme.palette.neutral.main,
            color: '#fff'
          }} />: <Skeleton variant="circular" width={40} height={30} />}</Typography>
         { !isLoading? <Typography>{product.description}</Typography>: <Skeleton variant = {'text'} fontSize = {"1.8rem"} />}
        </Stack>
        <Stack direction={'row'} spacing={3}>
          <Button variant='contained' size='large' sx={{
            bgcolor: theme.palette.text.primary,
            color: theme.palette.light.main,
            borderRadius: '30px',
            py: 1.8,
            textTransform: 'capitalize',
            flexGrow: 1
          }}
            onClick={() => {
              addToCart()
            }}
          >
            {t('addToCart')} <ShoppingCartOutlinedIcon sx={{ ml: 2,
              transform: i18n.dir() == 'rtl' && 'rotateY(-180deg)'
             }} />
          </Button>
          <IconButton sx={{
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
              !onHover ? <FavoriteBorderOutlinedIcon fontSize="25px" /> : <FavoriteIcon fontSize="25px" />
            }
          </IconButton>
        </Stack>
      </Box>
    </Box>
  )
}

export default Details