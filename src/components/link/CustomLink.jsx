import { Box } from '@mui/material'
import React from 'react'
import {Link, useTheme} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function CustomLink({page, path}) {
  const theme = useTheme();
  return (
    <Link component = {RouterLink}  sx = {{
      color: theme.palette.text.primary, 
      textTransform: 'capitalize',
      fontWeight: 'bold',
      textDecoration: 'none',
      '&:hover': {
        color: theme.palette.neutral.main
      }

    }} to = {path}>{page}</Link>
  )
}

export default CustomLink;