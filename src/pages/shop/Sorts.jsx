import { Box } from '@mui/material'
import React, { useContext } from 'react'
import CustomSortMenu from './CustomSortMenu';
import { OrderTypeContext } from '../../context/OrderTypeContext';
import { OrderContext } from '../../context/OrderContext';

import { useTranslation } from 'react-i18next';



function Sorts() {

    const {t} = useTranslation();

    const type = [
        [
            t('Price'),
            t('name')
        ],
        [
            'price',
            'name'
        ]
    ];

    const orders = [
        [
            t("Descending"),
            t("Increasing")
            
        ],
        [
            'desc',
            'inc'    
        ]
    ];

    const { orderType, setOrderType } = useContext(OrderTypeContext);
    const { order, setOrder } = useContext(OrderContext);

    console.log(orderType)


    return (
        <Box py={2} display={'flex'} justifyContent={'flex-end'} gap={2}>
            <CustomSortMenu options={type} title={t('sortBy')} onSet={setOrderType} />
            <CustomSortMenu options={orders} title={t('order')} onSet={setOrder} />
        </Box>
    )

}

export default Sorts