import { Box } from '@mui/material'
import React, { useContext } from 'react'
import CustomSortMenu from './CustomSortMenu';
import { OrderTypeContext } from '../../context/OrderTypeContext';
import { OrderContext } from '../../context/OrderContext';





function Sorts() {
 
    const type = [
        'Price', 
        'Name'
    ];
    
    const orders = [
        'desc',
        'inc'
    ];

    const {orderType, setOrderType} = useContext(OrderTypeContext);
    const {order, setOrder} = useContext(OrderContext);

    console.log(orderType)


    return (
        <Box py = {2} display={'flex'} justifyContent={'flex-end'} gap = {2}>
            <CustomSortMenu options={type} title = {'Sort By'} onSet = {setOrderType} />
            <CustomSortMenu options={orders} title = {'Order'} onSet = {setOrder} />
        </Box>  
    )
        
}

export default Sorts