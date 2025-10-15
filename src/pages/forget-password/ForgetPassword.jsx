import React from 'react'
import { Box, Button, Card, CardContent, CardHeader, CircularProgress, Link, TextField, Typography, useTheme } from '@mui/material'
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useState } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";

import axios from 'axios';
import { Bounce, toast } from 'react-toastify';
import SendIcon from '@mui/icons-material/Send';
import ForgetSchema from '../../validations/ForgetSchema';
import AxiosInstance from '../../api/AxiosInstance';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';

function ForgetPassword() {
    const theme = useTheme();
    const {t} = useTranslation();

    const [isLoading, setIsLoading] = useState(false);
    const [serverError, setServerError] = useState('');

    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(ForgetSchema)
    })

    const onSubmit = async (data) => {
        console.log(data)
       
        try {
            setIsLoading(true);

            const response = await AxiosInstance.post('/Identity/Account/forgot-password', data);
           

            if (response.status === 200)
                navigate('/auth/reset')
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
                        <Typography textAlign={'center'} variant='h6' color={theme.palette.text.primary}>{t("forgetPassword")}</Typography>
                        <Typography textAlign='center' mt={2}  fontSize = '14px'>{t("enterEmailResetCode")}</Typography>
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


                        {serverError && (<Typography color='error'>{serverError}</Typography>)}
                        <Button variant="contained" endIcon={<SendIcon sx = {{
                            rotate: i18n.dir() === 'rtl' && "-180deg"
                        }} />} size = 'large' sx = {{
                            bgcolor: theme.palette.neutral.secondary
                        }} disabled = {isLoading} type = 'submit'>
                            {
                                isLoading? <CircularProgress />: t('send')
                            }
                        </Button>


                    </Box>

                </CardContent>


            </Card>
        </Box>
    )
}

export default ForgetPassword