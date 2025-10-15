import { Box, Button, Card, CardContent, CardHeader, CircularProgress, IconButton, Link, TextField, Typography, useTheme } from '@mui/material'
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";

import axios from 'axios';
import { Bounce, toast } from 'react-toastify';
import LoginSchema from '../../validations/LoginSchema';
import { LoginContext } from '../../context/LoginContext';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';

function Login() {
  const theme = useTheme();
  const {t} = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState('');

  const [isVisible, setIsVisible] = useState(false);

  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(LoginSchema)
  })

  const { isLoggedin, setIsLoggedin } = useContext(LoginContext);

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);

      const response = await axios.post('https://kashop1.runasp.net/api/Identity/Account/Login', data);

      if (response.status === 200) {
        setIsLoggedin(true);
        localStorage.setItem('userToken', response.data.token);

        navigate('/');
      }
    } catch (error) {
      console.log(error)
      setServerError(error.response?.data?.message || "UnExpected Error!");

    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Box component='form' onSubmit={handleSubmit(onSubmit)} width='100%' display='flex' justifyContent={'center'} >
      <Card sx={{ width: { xs: '100%', sm: 450 }, borderRadius: 6 }}>
        <CardContent>
          <Box>
            <Typography textAlign={'center'} variant='h6' color={theme.palette.text.primary}>{t('login')}</Typography>
          </Box>
          <Box p={3} display={'flex'} flexDirection={'column'} gap={3} sx={{
            '.MuiBox-root': {
              borderBottomColor: theme.palette.favColor.main,
              borderWidth: 2
            }

          }}>


            <TextField {...register("email")} variant='outlined' label={t('email')} sx={{
              width: `100%`, borderRadius: 5,
              '.MuiInputBase-root': {
                borderRadius: 2
              }
            }}
              error={errors.email}
              helperText={errors.email?.message} />

            <Box position={'relative'}>
              <TextField {...register("password")} type= {isVisible? 'text': 'password'} variant='outlined' label={t('password')} sx={{
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
              }} onClick={()=> {
                setIsVisible(!isVisible)
              }}>
                {
                  !isVisible ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />
                }
              </IconButton>
            </Box>
            {serverError && (<Typography color='error'>{serverError}</Typography>)}
            <Button variant='contained' size='large' type='submit' sx={{
              bgcolor: theme.palette.neutral.secondary
            }} disabled={isLoading} >
              {isLoading ? <CircularProgress /> : t('login')}
            </Button>
            <Box sx={{
              p: '10px',
              bgcolor: theme.palette.favColor.main,
              borderRadius: "4px"
            }}>
              <Typography textAlign={'center'} fontSize='14px' color={theme.palette.neutral.main}>{t('dontHaveAnAccount')}  <Link component={RouterLink} to='/auth/register'>{t('signUp')}</Link></Typography>
            </Box>
            <Typography textAlign={'center'} fontSize='14px' color={theme.palette.neutral.main}>{t('forgetPassword')}? <Link component={RouterLink} to='/auth/forget'>{t('forgetPassword')} </Link></Typography>

          </Box>

        </CardContent>


      </Card>
    </Box>
  )
}

export default Login