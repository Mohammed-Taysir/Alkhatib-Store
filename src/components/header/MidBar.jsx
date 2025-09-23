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
import { Stack, useMediaQuery, useTheme } from '@mui/material';
import CustomLink from '../link/CustomLink';
import User from '../user-settings/User';
import MenuDrawer from '../drawer/MenuDrawer';
import HomeIcon from '@mui/icons-material/Home';
import StoreIcon from '@mui/icons-material/Store';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import InfoIcon from '@mui/icons-material/Info';
import BookIcon from '@mui/icons-material/Book';

const pages = [{
  page: 'home',
  path: '/',
  icon: HomeIcon
}, {
  page: 'Products',
  path: '/shop',
  icon: StoreIcon
}, {
  page: 'contact',
  path: '/contact',
  icon: ConnectWithoutContactIcon
},
{
  page: "About",
  path: '/about',
  icon: InfoIcon
},
{
  page: 'blog',
  path: '/blog',
  icon: BookIcon
}];
const settings = ['Profile', 'Account', 'Logout'];

function MidBar() {
  const theme = useTheme()

  return (
    <Box>
      <Container maxWidth='lg'>
        <Stack direction={'row'} alignItems='center' justifyContent={'space-between'}>
          {
            useMediaQuery('(max-width: 990px)') && (<MenuDrawer links = {pages} />)
          }
          <Box component='img' src={logo} sx={{ width: 135, height: 120 }}>
          </Box>

          {
            useMediaQuery('(min-width: 990px)') && <Stack direction={'row'} spacing={5} alignItems='center'>
              {
                pages.map(page => (
                  <CustomLink page={page.page} path={page.path} key={page.page} />
                ))
              }
            </Stack>

          }
          <User />
        </Stack>
      </Container>
    </Box>
  )
}

export default MidBar