import { Box } from '@mui/material'
import React, { useContext } from 'react'
import { LoginContext } from '../context/LoginContext'
import { Bounce, toast } from 'react-toastify';
import { Navigate } from 'react-router-dom';

function ProtectRouter({ children }) {
    const { isLoggedin } = useContext(LoginContext);
    if (!isLoggedin) {
        toast.error('You must log in first', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return <Navigate to ='/auth/' replace/>
    }
    return (
        <Box>
            {children}
        </Box>
    )
}

export default ProtectRouter