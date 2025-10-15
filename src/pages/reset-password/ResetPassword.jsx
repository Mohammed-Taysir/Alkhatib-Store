import React from 'react'
import { Box, Button, Card, CardContent, CardHeader, CircularProgress, IconButton, Link, TextField, Typography, useTheme } from '@mui/material'
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useState } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import axios from 'axios';
import { Bounce, toast } from 'react-toastify';
import SendIcon from '@mui/icons-material/Send';
import ResetSchema from '../../validations/ResetSchema';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';


function ResetPassword() {
    const theme = useTheme();
    const [isVisible, setIsVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [serverError, setServerError] = useState('');
    const {t} = useTranslation();

    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(ResetSchema)
    })

    const onSubmit = async (data) => {

        try {
            setIsLoading(true);

            const response = await axios.patch('https://kashop1.runasp.net/api/Identity/Account/reset-password', data);

            if (response.status === 200) {
                toast.success(`Password Has Been Reset Successfully`, {
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
                navigate('/auth/')
            }
        } catch (error) {
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
                        <Typography textAlign={'center'} variant='h6' color={theme.palette.text.primary}>{t("resetPasswordTitle")}</Typography>
                        <Typography textAlign='center' mt={2} fontSize='14px'>{t("resetPasswordSubtitle")}</Typography>
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
                        <TextField {...register("code")} variant='outlined' label={t('codeLabel')} sx={{
                            width: `100%`, borderRadius: 5,
                            '.MuiInputBase-root': {
                                borderRadius: 2
                            }
                        }}
                            error={errors.code}
                            helperText={errors.code?.message} />
                        <Box position={'relative'}>
                            <TextField {...register("newPassword")} variant='outlined' label={t("newPasswordLabel")} sx={{
                                width: `100%`, borderRadius: 5,
                                '.MuiInputBase-root': {
                                    borderRadius: 2
                                }
                            }}
                                error={errors.newPassword}
                                helperText={errors.newPassword?.message} />
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



                        {serverError && (<Typography color='error'>{serverError}</Typography>)}
                        <Button variant="contained" endIcon={<SendIcon sx = {{
                            rotate: i18n.dir() ==='rtl' && "-180deg"
                        }} />} size='large' sx={{
                            bgcolor: theme.palette.neutral.secondary
                        }} disabled={isLoading} type='submit'>
                            {
                                isLoading ? <CircularProgress /> : t('send')
                            }
                        </Button>


                    </Box>

                </CardContent>


            </Card>
        </Box>
    )
}

export default ResetPassword