import { Badge, IconButton, Link, useTheme } from '@mui/material'
import React from 'react'
import LocalMallIcon from '@mui/icons-material/LocalMall';
import useFetch from '../../custom-hook/useFetch';
import { Link as RouterLink } from 'react-router-dom';
function CartIcon() {
    const theme = useTheme();
    const { data: cartItems } = useFetch('/Customer/Carts', 'cartItems', true);
    const itemsNum = cartItems?.data.items.length;
    
    console.log(itemsNum)
    return (
        <IconButton p={1}>
            <Badge badgeContent={itemsNum} color= 'secondary'>
               <Link component={RouterLink} to = '/cart'>
               <LocalMallIcon sx={{
                color: theme.palette.neutral.main,
                fontSize: '30px',
                '&:hover': {
                    color: theme.palette.primary.main
                }
            }} /></Link>
               
            </Badge>
            
        </IconButton>
    )
}

export default CartIcon