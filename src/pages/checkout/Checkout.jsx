import { Box, Button, CircularProgress, Divider, FormControlLabel, FormLabel, Radio, RadioGroup, Stack, Table, TableCell, TableHead, TableRow, TextField, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import useFetch from '../../custom-hook/useFetch';
import { Controller, useForm } from 'react-hook-form';
import AxiosInstance from '../../api/AxiosInstance';
import AxiosUserInstance from '../../api/AxiosUserInstance';
import PageHeading from '../../components/page-heading/PageHeading';

import image from '../../assets/checout-background.webp'
import { useTranslation } from 'react-i18next';

function Checkout() {
  const {t} = useTranslation();
  const isSmallScreen = useMediaQuery('(max-width: 900px)');
  const theme = useTheme();
  const {register, control, handleSubmit} = useForm({});
  const { data, isLoading, isError, error } = useFetch('/Customer/Carts', 'cartItems', true);
  if (isLoading)
    return <CircularProgress />

  if (isError)
    return <p>error: {error}</p>

  const onSubmit = async(formData) => {
    try {
      const response = await AxiosUserInstance.post('/Customer/CheckOut/payment', {'paymentMethod': formData.paymentMethod});
      if(response.status === 200)
        window.location.href = response.data.url
    }catch(error) {
      console.log(error)
    }
  }
  return (
    <Box py={6}>
      <PageHeading title={t('CHECKOUT')} description = {t("Checkout-message")} image = {image} left = '20%' color = '#00E5FF'/>

      <Stack mt = {3} component={'form'} direction= {isSmallScreen? 'column': 'row'} spacing={4} onSubmit={handleSubmit(onSubmit)} >
        <Stack className='checkout-from' flexGrow={1} spacing={3}>
          <Stack direction='row' spacing={2}>
            <TextField label= {t('firstName')} color={theme.palette.neutral.main} sx={{
              '.MuiInputBase-root': {
                borderRadius: 4
              },
              flexGrow: 1
            }} />
            <TextField label={t('lastName')} color={theme.palette.neutral.main} sx={{
              '.MuiInputBase-root': {
                borderRadius: 4
              },
              flexGrow: 1
            }} />
          </Stack>
          <TextField label={t('email')} sx={{
            '.MuiInputBase-root': {
              borderRadius: 4
            },
            
          }} />
          <TextField label= {t('companyName')} sx={{
            '.MuiInputBase-root': {
              borderRadius: 4
            }
          }} />
          <TextField label={t('addressInfo')} sx={{
            '.MuiInputBase-root': {
              borderRadius: 4
            }
          }} />
          
          <TextField label={t('phone')}  sx={{
            '.MuiInputBase-root': {
              borderRadius: 4
            }
          }} />
        </Stack>

        <Stack bgcolor={theme.palette.favColor.main} p={3.5} borderRadius={4} spacing={3}>
          <Box>
            <FormLabel>{t('yourOrder')}</FormLabel>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{
                    p: 0,
                    pt: 1,
                    fontSize: "15px"
                  }} align='left' >{t('Product')}</TableCell>
                  <TableCell sx={{
                    p: 0,
                    fontSize: '15px'
                  }} align='right'>{t('Total')}</TableCell>
                </TableRow>
              </TableHead>
              {
                data?.data.items.map(item => (
                  <TableRow key={item.productId}>
                    <TableCell width='250px' sx={{
                      p: 0,
                      py: 1,
                      color: theme.palette.neutral.main,
                      borderBottom: `1px solid #eee`
                    }}>{item.productName}</TableCell>
                    <TableCell sx={{
                      p: 0,
                      py: 1,
                      color: theme.palette.neutral.main,
                      borderBottom: `1px solid #eee`

                    }} align='right'>${item.price}</TableCell>

                  </TableRow>

                ))
              }
              <TableRow>
                <TableCell sx={
                  {
                    p: 0,
                    pt: 2,
                    color: theme.palette.neutral.main,
                    fontWeight: 'bold'
                  }
                } align='left'>{t('totalOrderPrice')}</TableCell>
                <TableCell sx={{ p: 0, pt: 2, color: theme.palette.neutral.main, fontWeight: 'bold' }} align='right'>${data.data.cartTotal}</TableCell>
              </TableRow>
            </Table>
          </Box>
          <Box>

            <Controller
              control={control}
              name='paymentMethod'
              defaultValue={'Visa'}
              render={({ field }) => (
                <Box>
                  <FormLabel>{t('paymentMethod')}</FormLabel>
                  <RadioGroup {...field}>
                    <FormControlLabel sx = {{
                      '.MuiTypography-root': {
                        fontSize: '14px',
                        
                      },
                      '.css-1q72ply-MuiButtonBase-root-MuiSwitchBase-root-MuiRadio-root': {
                        p: '4px',
                        ml: '8px'
                      },
                      '.css-1q72ply-MuiButtonBase-root-MuiSwitchBase-root-MuiRadio-root.Mui-checked': {
                        color: theme.palette.neutral.secondary,
                      }
                     
                    }} value = 'Visa' control={<Radio />} label = {t('visa')} />
                    <FormControlLabel sx = {{
                      '.MuiTypography-root': {
                        fontSize: '14px',
         
                      }, 
                      '.css-1q72ply-MuiButtonBase-root-MuiSwitchBase-root-MuiRadio-root': {
                        p: '4px',
                        ml: '8px'
                      },

                      '.css-1q72ply-MuiButtonBase-root-MuiSwitchBase-root-MuiRadio-root.Mui-checked': {
                        color: theme.palette.neutral.secondary,
                      }
                
                    }}  value = 'Cash' control={<Radio />} label = {t('cash')} />

                  </RadioGroup>
                </Box>
              )}

            />

          </Box>
          <Button type = 'submit' variant='contained' size = 'large' sx = {{
            bgcolor: theme.palette.neutral.secondary,
            borderRadius: 8
          }}>{t('placeOrder')}</Button>

        </Stack>

        

      </Stack>

    </Box>
  )
}

export default Checkout