import { Card, Skeleton } from '@mui/material'
import React from 'react'

function ProductSkeleton() {
  return (
    <Card sx={{
        boxShadow: '0 2px 15px rgb(0 0 0 / 10%)',
        transition: "0.3s",
        ':hover': {
          transform: 'translateY(-10px)'
        },
        ':hover .discount-rating': {
          top: 0
        },
        ':hover .view-button': {
          bottom: '15px'
        }
        ,
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 5,
        height: '377.67px'
        
      }}>
        <Skeleton variant='rectangle' width = {335.41} height = {220}/>
        <Skeleton variant='text' fontSize = "1.5rem" />
        <Skeleton variant='text' fontSize = '15px' />
    </Card>
  )
}

export default ProductSkeleton