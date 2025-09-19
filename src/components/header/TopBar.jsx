import { Box, Container, IconButton, Stack, Typography } from '@mui/material'

import DarkModeIcon from '@mui/icons-material/DarkMode';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';


import LightModeIcon from '@mui/icons-material/LightMode';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const options = [
  'AR',
  'EN'
];


function SimpleListMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const open = Boolean(anchorEl);

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <List component="nav" aria-label="Device settings" sx={{ bgcolor: 'none', p: 0, color: '#fff', fontSize: '12px'}}>
        <ListItemButton
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-label="when device is locked"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClickListItem}
        >
         <ListItemText sx = {{'.css-rizt0-MuiTypography-root': {
          fontSize: '14px',
          fontWeight: 'bold'
         }}} primary={options[selectedIndex]} />

        </ListItemButton>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            'aria-labelledby': 'lock-button',
            role: 'listbox',
          },
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}


  function TopBar() {
    const {mode, toggleMode} = useContext(ThemeContext)
    return (
      <Box sx={{
        bgcolor: '#2b3445',

      }}>
        <Container maxWidth='lg'>
          <Stack direction='row' alignItems="center" py={1}>
            <Typography variant='body2' sx={{
              mr: 2,
              p: '3px 10px',
              bgcolor: "#d23f57",
              fontSize: '10px',
              fontWeight: "bold",
              color: '#fff',
              borderRadius: '12px'
            }}>HOT</Typography>
            <Typography sx={{
              fontSize: '12px',
              fontWeight: 300,
              color: '#fff'

            }}>
              Free Shipping...
            </Typography>
            <Box flexGrow={1} />
            <Stack direction='row' alignItems={'center'} spacing={2}>
              <IconButton onClick={toggleMode}>
                {
                  mode === 'light'? <DarkModeIcon fontSize = 'small' sx = {{color: 'white'}} />: <LightModeIcon fontSize = 'small' sx = {{color: 'white'}} />
                }
              </IconButton>

              <SimpleListMenu />
              
              <FacebookIcon sx={{
                color: '#fff'
              }} fontSize='small' />

              <InstagramIcon sx={{
                color: '#fff'
              }} fontSize='small' />

              <LinkedInIcon sx={{
                color: '#fff'
              }} fontSize='small' />


            </Stack>
          </Stack>
        </Container>
      </Box>
    )
  }

  export default TopBar