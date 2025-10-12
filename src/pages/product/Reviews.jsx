import * as React from 'react';


import Box from '@mui/material/Box';
import { Avatar, Button, CircularProgress, Rating, Skeleton, Stack, TextField, Typography, useTheme } from '@mui/material';
import { useState } from 'react';
import { LoginContext } from '../../context/LoginContext';
import { useNavigate } from 'react-router-dom';
import AxiosUserInstance from '../../api/AxiosUserInstance';
import { toast, Zoom } from 'react-toastify';
import { useQueryClient } from '@tanstack/react-query';







function Reviews({ product, isLoading }) {
  const queryClient = useQueryClient();
  const { isLoggedin, setIsLoggedin } = React.useContext(LoginContext);
  const [customRate, setCustomRate] = useState(0);
  const [comment, setComment] = useState("");
  const theme = useTheme();
  const navigate = useNavigate();
  const handleReview = async () => {
    if (!isLoggedin) {
      navigate('/auth/');
    } else {
      try {
        const response = await AxiosUserInstance.post(`/Customer/Reviews`, { "productId": product.id, "comment": comment, "rate": customRate });

       
          toast.success('Review Added Successfully', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Zoom,
          });

          queryClient.invalidateQueries(['product']);

      }catch(error) {
        toast.error(error?.response?.data?.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Zoom,
          });
        
      }
    }

  }
  return (
    <Box >
      {!isLoading?<Typography fontWeight='bold' fontSize='1.4rem'>{product?.reviews.length} {product?.reviews.length > 1 || product?.reviews.length == 0 ? "Reviews" : "Review"} for {product.name}</Typography>: <Skeleton variant ={'text'} />}
      <Stack>
        {isLoading? <Box height = {'250px'} display={'flex'} justifyContent={'center'} alignItems = {'center'}>
          <CircularProgress />
        </Box> :product?.reviews?.map(review => (
          <Box key={review.id} display='flex' gap={3} borderBottom={`1px solid #eee`} py={3}>
            <Avatar>{review.fullName[0].toUpperCase()}</Avatar>
            <Stack spacing={1}>
              <Rating name="disabled" value={review.rate} readOnly />
              <Typography fontSize = "0.9rem" color={theme.palette.neutral.main}>{review.fullName}</Typography>
              <Typography>{review.comment}</Typography>
            </Stack>
          </Box>
        ))}
      </Stack>

      <Box pt={4} display={'flex'} flexDirection={'column'} gap={1.3}>
        <Typography fontSize="1.4rem" fontWeight='bold'>Add A Review</Typography>
        <Box display={'flex'} flexDirection={'column'} gap={0.5} py={2}>
          <Typography>Your Rating*</Typography>
          <Rating
            name="simple-controlled"
            value={customRate}
            onChange={(event, newValue) => {
              setCustomRate(newValue);
            }}
          />


        </Box>
        <Box>
          <TextField value={comment} onChange={(e) => {
            setComment(e.target.value)
          }} fullWidth label="review" height='250px' sx={{
            '.MuiInputBase-input': {
              height: '150px',

            },
            '.MuiInputBase-root': {
              borderRadius: 6
            }
          }} />
        </Box>
        <Button onClick={handleReview} variant='contained' size='large' sx={{
          bgcolor: theme.palette.neutral.secondary,
          py: 2,
          fontWeight: 'bold',
          borderRadius: 6
        }}>{isLoggedin ? 'Add Review' : 'Login/Register to add review'}</Button>
      </Box>

    </Box>
  );

}

export default Reviews