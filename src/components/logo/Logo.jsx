import { Box } from '@mui/material'
import React, { useContext } from 'react'

import logo from '../../assets/logo.png'
import darkLogo from '../../assets/darklogo.png'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../../context/ThemeContext'


function Logo({isDark = false}) {
    const {mode} = useContext(ThemeContext);
  return (
    <Box>
        <Link to = '/'><Box component={'img'} src = {mode == 'light' && !isDark?logo: darkLogo}  width = {mode ==='light' && !isDark? 130: 200} /></Link>
    </Box>
  )
}

export default Logo