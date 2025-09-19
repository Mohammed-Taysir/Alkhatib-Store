import { Box, Button, Card, CardContent, CardHeader, CircularProgress, Link, TextField, Typography, useTheme } from '@mui/material'
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import RegisterSchema from '../../validations/RegisterSchema';
import axios from 'axios';
import { Bounce, toast } from 'react-toastify';

function Register() {
  const theme = useTheme();

  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState('');

  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(RegisterSchema)
  })

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);

      const response = await axios.post('https://kashop1.runasp.net/api/Identity/Account/Register', data);
      
      if (response.status === 200) {
        toast.success(`Your account has been created successfully.  
Please check your email to confirm your registration.`, {
          position: "top-right",
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
      }
    } catch (error) {
      if (error.response)
        setServerError(error.response.data.message);
      else
        setServerError("An un expected error")

      toast.error(serverError, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Box component='form' onSubmit={handleSubmit(onSubmit)} width='100%' display='flex' justifyContent={'center'} >
      <Card sx={{ width: { xs: '100%', sm: 450 }, borderRadius: 6 }}>
        <CardContent>
          <Box>
            <Typography textAlign={'center'} variant='h6' color={theme.palette.text.primary}>Sign Up</Typography>
          </Box>
          <Box p={3} display={'flex'} flexDirection={'column'} gap={3} sx={{
            '.MuiBox-root': {
              borderBottomColor: theme.palette.favColor.main,
              borderWidth: 2
            }

          }}>
            <TextField {...register("fullName")} variant='outlined' label='Full Name' sx={{
              width: `100%`, borderRadius: 5,
              '.MuiInputBase-root': {
                borderRadius: 2
              }
            }}

              error={errors.fullName}
              helperText={errors.fullName?.message} />
            <TextField {...register("userName")} variant='outlined' label='User Name' sx={{
              width: `100%`, borderRadius: 5,
              '.MuiInputBase-root': {
                borderRadius: 2
              }
            }}
              error={errors.userName}
              helperText={errors.userName?.message} />
            <TextField {...register("email")} variant='outlined' label='Email' sx={{
              width: `100%`, borderRadius: 5,
              '.MuiInputBase-root': {
                borderRadius: 2
              }
            }}
              error={errors.email}
              helperText={errors.email?.message} />
            <TextField {...register("phoneNumber")} variant='outlined' label='Phone Number' sx={{
              width: `100%`, borderRadius: 5,
              '.MuiInputBase-root': {
                borderRadius: 2
              }
            }}
              error={errors.phoneNumber}
              helperText={errors.phoneNumber?.message}
            />
            <TextField {...register("password")} variant='outlined' label='Password' sx={{
              width: `100%`, borderRadius: 5,
              '.MuiInputBase-root': {
                borderRadius: 2
              }
            }}
              error={errors.password}
              helperText={errors.password?.message} />
            <Button variant='contained' size='large' type='submit' disabled = {isLoading} >
              {isLoading? <CircularProgress />: 'Sign Up'}
            </Button>
            <Typography textAlign={'center'} fontSize='14px' color={theme.palette.neutral.main}>Already Have An Account <Link component={RouterLink} to='/auth/'>Login</Link></Typography>

          </Box>

        </CardContent>


      </Card>
    </Box>
  )
}

export default Register