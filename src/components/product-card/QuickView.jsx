import { Box, IconButton } from '@mui/material'
import React from 'react'
import ReactDOM from 'react-dom';
import ProductHead from '../../pages/product/ProductHead';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useFetch from '../../custom-hook/useFetch';

function QuickView({ product, onClose }) {
  const [scroll, setScroll] = React.useState('paper');
  const {data, isLoading, isError, error} = useFetch(`/Customer/Products/${product.id}`, 'product', false, product.id)

  const productDetails = data?.data;
  return ReactDOM.createPortal(
    <Box sx={{
      position: 'fixed',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,

      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      zIndex: 99999,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      p: 4,
      py: 4

    }}>

      <Box bgcolor="#fff" p={4} position={'relative'} borderRadius = {4} maxHeight={'calc(100% - 10px)'} overflow = {'auto'}>
        <IconButton sx = {{
          position: 'absolute',
          top: 5,
          right: 5
        }} onClick = {onClose}>
          <CloseIcon />
        </IconButton>
        <ProductHead product={productDetails} isLoading = {isLoading} isError = {isError} error = {error} />
      </Box>

    </Box>,
    document.body
  )
}

export default QuickView