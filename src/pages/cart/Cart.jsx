import { Box, Button, CircularProgress, IconButton, Link, Stack, Typography, useTheme } from '@mui/material'
import React from 'react'
import useFetch from '../../custom-hook/useFetch';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import AxiosUserInstance from '../../api/AxiosUserInstance';
import { useQueryClient } from '@tanstack/react-query';
import { Axios } from 'axios';
import { Link as RouterLink} from 'react-router-dom';

import image from '../../assets/cart-page-background.jpg'
import PageHeading from '../../components/page-heading/PageHeading';


function Cart() {
  const theme = useTheme();
  const queryClient = useQueryClient();
  const { data, isLoading, isError, error } = useFetch('/Customer/Carts', 'cartItems', true);
  if (isLoading)
    return <CircularProgress />

  if (isError)
    return <p>Error: {error.message}</p>

  const cartItems = data?.data.items;

  const increaseQuantity = async(id) => {
    try {
      const response = await AxiosUserInstance.post(`/Customer/Carts/increment/${id}`, {});
      if(response.status === 200) 
        queryClient.invalidateQueries(['cartItems']);
    }catch(error) {
      console.log(error)
    }
  }

  const decreaseQuantity = async(id) => {
    try {
      const response = await AxiosUserInstance.post(`/Customer/Carts/decrement/${id}`)
      if(response.status === 200)
        queryClient.invalidateQueries(['cartItems'])
    }catch(error) {
      console.log(error)
    }
  }

  const removeItem = async(id) => {
    try {
      const response = await AxiosUserInstance.delete(`/Customer/Carts/${id}`, {});
      if(response.status === 200) 
        queryClient.invalidateQueries(['cartItems'])
    }catch(error) {
      console.log(error)
    }
  }

  const clearCart = async() => {
    try {
      const response = await AxiosUserInstance.delete('/Customer/Carts/clear', {});
      if(response.status === 200)
        queryClient.invalidateQueries(['cartItems']);
    }catch(error) {
      console.log(error)
    }
  }

  console.log(data)
  return (
    <Box py={4}>
      <PageHeading title = 'All Your Picks in One Place' description = 'Review, update, and checkout easily.' image = {image} color = {theme.palette.neutral.secondary} left = '40%' />
      
      <Box pt={4}>
        <TableContainer sx={{ borderRadius: 4 }}>
          <Table sx={{ minWidth: 650, }} aria-label="simple table">
            <TableHead>
              <TableRow bgcolor='#eff4f7'>
                <TableCell color={theme.palette.neutral.main}>Product</TableCell>
                <TableCell color={theme.palette.neutral.main} align="center">Price</TableCell>
                <TableCell color={theme.palette.neutral.main} align="center">Quantity</TableCell>
                <TableCell color={theme.palette.neutral.main} align="center">Total</TableCell>
                <TableCell color={theme.palette.neutral.main} align="center"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                cartItems.map(item => {
                  return <TableRow key={item.productId}  >
                    <TableCell sx={{ py: 4 }}>{item.productName}</TableCell>
                    <TableCell align='center'>${item.price}</TableCell>
                    <TableCell align='center'>
                      <Stack direction = 'row' alignItems={'center'} justifyContent={'space-between'} border = '1px solid #eee' py = {1} borderRadius={4}>
                        <KeyboardArrowLeftOutlinedIcon sx= {{cursor: 'pointer'}} onClick = {() => {
                          decreaseQuantity(item.productId)
                        }} />
                        <Typography>{item.count}</Typography>
                        <KeyboardArrowRightOutlinedIcon sx= {{cursor: 'pointer'}} onClick = {() => {
                          increaseQuantity(item.productId)
                        }} />
                      </Stack>
                    </TableCell>
                    <TableCell align='center'>${item.totalPrice}</TableCell>
                    <TableCell align = 'center'><IconButton onClick={() => {
                      removeItem(item.productId)
                    }}><DeleteIcon sx={{ color: theme.palette.neutral.main }} /></IconButton></TableCell>
                  </TableRow>
                })
              }
            <TableRow>
              <TableCell sx = {{
                fontSize: '18px',
                fontWeight: 'bold',
                color: theme.palette.neutral.main
                
            }} colSpan={3}>Total Cart Price</TableCell>
              <TableCell align = 'center'>
                ${data.data.cartTotal}
              </TableCell>
              <TableCell align = 'center'><Button variant = 'contained' size = 'large' sx = {{bgcolor: theme.palette.neutral.main}} onClick={() => {
                clearCart();
              }}>Clear Cart</Button></TableCell>
            </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Stack mt = {2} direction = 'row' alignItems = {'center'} justifyContent={'space-between'} flexWrap = {'wrap'}>
          <Link mb = {2} component={RouterLink} to = '/shop' color = {theme.palette.text.primary}>
              Continue Shopping
          </Link>
          <Stack direction = 'row' alignItems = {'center'} spacing = {3} flexWrap={'wrap'}>
              
              <Button variant = 'contained' size = 'large' color = 'secondary' component = {RouterLink} to = '/checkout'>Checkout</Button>
          </Stack>
        </Stack>
      </Box>
    </Box>
  )
}

export default Cart