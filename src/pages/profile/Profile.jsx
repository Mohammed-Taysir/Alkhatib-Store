import { CircularProgress, Stack, Typography, useTheme } from '@mui/material'
import React from 'react'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import { Link, Outlet } from 'react-router-dom';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';

import personal from '../../assets/personalimg.jpg'
import useFetch from '../../custom-hook/useFetch';
function Profile() {
    const theme = useTheme();
    const {data, isLoading, isError, error} = useFetch('/Users/profile', 'user', true);

    if(isLoading)
        return <CircularProgress />

    if(isError)
        return <Typography>Error: {error.message}</Typography>

    const user = data?.data;
    return (
        <Stack direction='row'  spacing={4} py = {4}>
            
            <Stack  bgcolor = {theme.palette.favColor.main} p = {3} borderRadius={4}>
                 <Box sx = {{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    gap: 2
                 }} >
                    <Box component={'img'} src = {personal} sx = {{
                        width: '110px',
                        height: '110px',
                        borderRadius: '50%'
                    }} />
                    <Typography>{user.fullName}</Typography>
                 </Box>
                 <Divider />
                <Box sx={{ width: '100%', maxWidth: 360, borderRadius: 4 , height: '100%'}}>
                   
                    <nav aria-label="main mailbox folders">
                        <List>
                            <ListItem disablePadding>
                                <ListItemButton component = {Link} to = '/profile'>
                                    <ListItemIcon>
                                        <AccountCircleOutlinedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Info" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton component = {Link} to = "orders">
                                    <ListItemIcon>
                                        <AddShoppingCartOutlinedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Orders" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton component = {Link} to = 'settings'>
                                    <ListItemIcon>
                                        <SettingsSuggestOutlinedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Settings" />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </nav>
            
                    
                </Box>
            </Stack>
            <Box flexGrow={1}>
                <Typography component={'h2'} variant='h5'>My Profile</Typography>
                <Outlet context = {{user}} />
            </Box>
        </Stack>
    )
}

export default Profile