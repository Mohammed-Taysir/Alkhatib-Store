import { Box, Button, Card, CardContent, CardHeader, CircularProgress, IconButton, Link, TextField, Typography, useTheme } from '@mui/material'
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import RegisterSchema from '../../validations/RegisterSchema';
import axios from 'axios';
import { Bounce, toast } from 'react-toastify';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useTranslation } from 'react-i18next';

function Register() {
  const theme = useTheme();

  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const {t} = useTranslation();

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

      setServerError(error.response?.data?.message || "UnExpected Error!");

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
    <Box component='form' onSubmit={handleSubmit(onSubmit)} width='100%' display='flex' justifyContent={'center'} bgcolor = {theme.palette.favColor.main} pb = {4} >
      <Card sx={{ width: { xs: '100%', sm: 450 }, borderRadius: 6 }}>
        <CardContent>
          <Box>
            <Typography textAlign={'center'} variant='h6' color={theme.palette.text.primary}>{t('signUp')}</Typography>
          </Box>
          <Box p={3} display={'flex'} flexDirection={'column'} gap={3} sx={{
            '.MuiBox-root': {
              borderBottomColor: theme.palette.favColor.main,
              borderWidth: 2
            }

          }}>
            <TextField {...register("fullName")} variant='outlined' label={t('fullName')} sx={{
              width: `100%`, borderRadius: 5,
              '.MuiInputBase-root': {
                borderRadius: 2
              }
            }}

              error={errors.fullName}
              helperText={errors.fullName?.message} />
            <TextField {...register("userName")} variant='outlined' label={t('userName')} sx={{
              width: `100%`, borderRadius: 5,
              '.MuiInputBase-root': {
                borderRadius: 2
              }
            }}
              error={errors.userName}
              helperText={errors.userName?.message} />
            <TextField {...register("email")} variant='outlined' label={t('email')} sx={{
              width: `100%`, borderRadius: 5,
              '.MuiInputBase-root': {
                borderRadius: 2
              }
            }}
              error={errors.email}
              helperText={errors.email?.message} />
            <TextField {...register("phoneNumber")} variant='outlined' label={t('phone')} sx={{
              width: `100%`, borderRadius: 5,
              '.MuiInputBase-root': {
                borderRadius: 2
              }
            }}
              error={errors.phoneNumber}
              helperText={errors.phoneNumber?.message}
            />
            <Box position={'relative'}>
              <TextField {...register("password")} type={isVisible ? 'text' : 'password'} variant='outlined' label={t('password')} sx={{
                width: `100%`, borderRadius: 5,
                '.MuiInputBase-root': {
                  borderRadius: 2
                }
              }}
                error={errors.password}
                helperText={errors.password?.message} />
              <IconButton sx={{
                position: "absolute",
                top: '50%',
                transform: 'translateY(-50%)',
                right: 6,
              }} onClick={() => {
                setIsVisible(!isVisible)
              }}>
                {
                  !isVisible ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />
                }
              </IconButton>
            </Box>
            <Button variant='contained' size='large' type='submit' sx={{
              bgcolor: theme.palette.neutral.secondary
            }} disabled={isLoading} >
              {isLoading ? <CircularProgress /> : t('signUp')}
            </Button>
            <Typography textAlign={'center'} fontSize='14px' color={theme.palette.neutral.main}>{t('Already Have An Account')} <Link component={RouterLink} to='/auth/'>{t('login')}</Link></Typography>

          </Box>

        </CardContent>


      </Card>
    </Box>
  )
}

export default Register