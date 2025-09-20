import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import LocalMallIcon from '@mui/icons-material/LocalMall';


import logo from '../../assets/logo.png'
import {Stack, useTheme } from '@mui/material';
import CustomLink from '../link/CustomLink';
import User from '../user-settings/User';




const pages = [{
  page: 'home',
  path: '/'
}, {
  page: 'Products',
  path: '/shop'
}, {
  page: 'contact',
  path: '/contact'
},
{
  page: 'blog',
  path: '/blog'
}, {
  page: "About",
  path: '/about'
} ,
{
  page: 'blog',
  path: '/blog'
}];
const settings = ['Profile', 'Account', 'Logout'];

function MidBar() {
  const theme = useTheme()
  
  return (
    <Box>
      <Container maxWidth = 'lg'>
        <Stack direction={'row'} alignItems = 'center' justifyContent={'space-between'}>
          <Box component ='img' src = {logo} sx = {{width: 135}}>
          </Box>

          <Stack direction={'row'} spacing = {5} alignItems = 'center'>
            {
              pages.map(page => (
                <CustomLink page = {page.page} path = {page.path} />
              ))
            }
          </Stack>
            <User />
        </Stack>
      </Container>
    </Box>
  )
}

export default MidBar