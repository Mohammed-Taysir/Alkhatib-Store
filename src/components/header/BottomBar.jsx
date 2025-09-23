import { Box, Container, IconButton, Stack, useMediaQuery } from '@mui/material'
import React from 'react'
import CategoriesMenu from '../categories-menu/CategoriesMenu'
import { styled, alpha, useTheme } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

import LocalMallIcon from '@mui/icons-material/LocalMall';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CartIcon from '../cart-icon/CartIcon';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

function BottomBar() {
  const theme = useTheme();
  return (
    <Box>
      <Container maxWidth='lg' >
        <Stack direction='row' alignItems={'center'} spacing = {2}>
          <Box>
            <CategoriesMenu />


          </Box>
          
          {
            useMediaQuery('(max-width: 500px)') ? <IconButton><SearchIcon fontSize='large' sx = {{color: theme.palette.neutral.main,
             ':hover': {
              color: theme.palette.primary.main
             }
            }} /></IconButton> : <Search sx={{
            flexGrow: 1,
            bgcolor: theme.palette.favColor.main,
            py: '3px',
            position: 'relative'
            
          }}>
            <SearchIconWrapper >
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          }

          <Stack direction = 'row'>
            <CartIcon />
            <IconButton p = {1}>
              <FavoriteBorderOutlinedIcon  sx = {{
                color: theme.palette.neutral.main,
                fontSize: '30px',
                "&:hover": {
                  color: theme.palette.primary.main
                }
              }} />
            </IconButton>


          </Stack>

        </Stack>
      </Container>
    </Box>
  )
}

export default BottomBar