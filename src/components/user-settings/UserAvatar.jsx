import React from 'react'
import AxiosUserInstance from '../../api/AxiosUserInstance'
import { useQuery } from '@tanstack/react-query';
import { Box, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import useFetch from '../../custom-hook/useFetch';

function UserAvatar() {
    const theme = useTheme();

    const {data: user} = useFetch('/Users/profile', 'user', true)
    // const fetchUser = async () => {
    //     const response = await AxiosUserInstance.get('/Users/profile');
    //     return response;
    // }


    // const {data: user} = useQuery({
    //     queryKey: ['user'],
    //     queryFn: fetchUser,
    //     staleTime: 1000 * 60 * 5
    // })

    console.log(user)

    const userFullName = user?.data.fullName;

    console.log(userFullName)
    return (
        <Stack direction = 'row' alignItems={'center'} spacing = {1}>
            <Box sx = {{
                width: '45px',
                height: '45px',
                borderRadius: '50%',
                bgcolor: theme.palette.neutral.main,
                fontWeight: 400,
                color: '#fff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '18px'
                
            }}>{userFullName?.at(0).toUpperCase()}</Box>

            {useMediaQuery('(min-width:1000px)') && <Typography color= {theme.palette.text.primary} textTransform={'capitalize'}>{userFullName}</Typography>}
        </Stack>
    )
}

export default UserAvatar