import { Box, CircularProgress, Stack, Typography, useTheme } from '@mui/material'
import WindowIcon from '@mui/icons-material/Window';
import React, { useState } from 'react'
import useFetch from '../../custom-hook/useFetch';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';




function CategoriesMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();
  const { data: categories, isLoading, isError, error } = useFetch('/Customer/Categories', 'categories', false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setIsOpen(prev => !prev);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setIsOpen(prev => !prev)
  };

  return (
    <Stack direction='row' spacing={3} position={'relative'}>
      <Stack id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}

         direction='row' alignItems={'center'} spacing={4} p={1} border= {`1px solid ${theme.palette.neutral.main}`} sx={{
          cursor: 'pointer',
          borderRadius: 5
        }} >
        <Stack direction='row' alignItems={'center'} spacing={1}>
          <WindowIcon sx={{
            color: theme.palette.neutral.main
          }} />
          <Typography color={theme.palette.neutral.main}>Categories</Typography>
        </Stack>
        <ArrowForwardIosIcon fontSize='10px' sx={{
          
          rotate: isOpen && '90deg',
          transition: '0.3s rotate'
        }} />
      </Stack >

      <Menu

        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        PaperProps={{
          sx: {
            width: anchorEl ? anchorEl.offsetWidth : undefined,
          },
        }}
      >
        {
          isLoading ? <CircularProgress /> : categories.data.map(category => (<MenuItem key={category.id}>
            <ListItemIcon>
              <ArrowRightAltIcon fontSize='small' />
            </ListItemIcon>
            <ListItemText>{category.name}</ListItemText>

          </MenuItem>))
        }
      </Menu>
    </Stack>
  )
}

export default CategoriesMenu