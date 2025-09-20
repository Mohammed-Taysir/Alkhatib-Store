import { Box, Button, Stack } from '@mui/material'
import React, { useContext } from 'react'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { LoginContext } from '../../context/LoginContext';
import UserAvatar from './UserAvatar';

function User() {
  const { isLoggedin } = useContext(LoginContext);
  return (

    <Box>
      <Stack justifyContent={'center'} height='100%'>

        <Button>
          {
            isLoggedin ? <UserAvatar /> : <PersonOutlineIcon />
          }
        </Button>

      </Stack>

    </Box>
  )
}

export default User