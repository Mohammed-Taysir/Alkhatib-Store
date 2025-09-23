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

  console.log(cartItems)
  return (
    <Box py={4}>
      <Box position={'relative'}>
        <Box component={'img'} src='/cart-page-background.jpg' width='100%' height='350px' borderRadius={4} />
        <Typography component={'h2'} variant='h4' sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: theme.palette.neutral.main,
          fontWeight: 'bold',

        }}>Cart Page</Typography>
      </Box>
      <Box pt={4}>
        <TableContainer sx={{ borderRadius: 4 }}>
          <Table sx={{ minWidth: 650, }} aria-label="simple table">
            <TableHead>
              <TableRow bgcolor='#eff4f7' sx={{
                '..css-1we4goh-MuiPaper-root-MuiTableContainer-root': {
                  boxShadow: 'transparent'
                }
              }}>
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
                    <TableCell ><IconButton onClick={() => {
                      removeItem(item.productId)
                    }}><DeleteIcon sx={{ color: theme.palette.neutral.main }} /></IconButton></TableCell>
                  </TableRow>
                })
              }

            </TableBody>
          </Table>
        </TableContainer>
        <Stack mt = {2} direction = 'row' alignItems = {'center'} justifyContent={'space-between'} flexWrap = {'wrap'}>
          <Link mb = {2} component={RouterLink} to = '/shop' color = {theme.palette.text.primary}>
              Continue Shopping
          </Link>
          <Stack direction = 'row' alignItems = {'center'} spacing = {3} flexWrap={'wrap'}>
              <Button variant = 'contained' size = 'large' sx = {{bgcolor: theme.palette.neutral.main}}>Clear Cart</Button>
              <Button variant = 'contained' size = 'large' color = 'secondary'>Checkout</Button>
          </Stack>
        </Stack>
      </Box>
    </Box>
  )
}

export default Cart