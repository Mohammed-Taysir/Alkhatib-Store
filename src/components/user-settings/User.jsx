import { Box, Button, Link, Stack, useTheme } from '@mui/material'
import React, { useContext } from 'react'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { LoginContext } from '../../context/LoginContext';
import UserAvatar from './UserAvatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link as RouterLink } from 'react-router-dom';


function User() {
  const { isLoggedin, setIsLoggedin } = useContext(LoginContext);
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleLogout = () => {
    localStorage.removeItem('userToken');
    setIsLoggedin(false);
  }
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  console.log(localStorage.getItem('userToken'))
  return (

    <Box position={'relative'}>
      <Stack justifyContent={'center'} height='100%'>

        <Button sx={{ px: 2 }}
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}

          onClick={handleClick}
        >
          {
            isLoggedin ? <UserAvatar /> : <PersonOutlineIcon />
          }
        </Button>



      </Stack>
      <Menu
        id="basic-menu"
        open={open}
        onClose={handleClose}
        anchorEl={anchorEl}
        slotProps={{
          list: {
            'aria-labelledby': 'basic-button',
          },
        }}
      >
        {
          isLoggedin ?
            <>
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>Settings</MenuItem>
              <MenuItem onClick={() => {
                handleClose();
                handleLogout()
              }}>Logout</MenuItem>
            </>
            :
            <>
              <MenuItem onClick={handleClose}>
                <Link component={RouterLink} sx={{
                  color: theme.palette.text.primary,
                  textDecoration: 'none'
                }} to='/auth/register'>Sign up</Link></MenuItem>
              <MenuItem onClick={handleClose}>
                <Link component={RouterLink} sx={{
                  color: theme.palette.text.primary,
                  textDecoration: 'none'
                }} to='/auth/'>Sign in</Link>
              </MenuItem>

            </>


        }
      </Menu>

    </Box>
  )
}

export default User