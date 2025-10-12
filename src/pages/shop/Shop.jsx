import { Box, CircularProgress, Divider, Stack, Typography, FormControlLabel, FormLabel, Radio, RadioGroup, useTheme, TextField, Pagination, PaginationItem, Button, useMediaQuery, IconButton } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import useFetch from '../../custom-hook/useFetch';
import Slider from '@mui/material/Slider';
import FormControl from '@mui/material/FormControl';
import ProductsSection from '../../components/main/products-section/ProductsSection';
import ProductCard from '../../components/product-card/ProductCard';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import FilterDrawer from './FilterDrawer';
import Side from './Side';
import  { OrderTypeContext } from '../../context/OrderTypeContext';
import Sorts from './Sorts';
import { OrderContext } from '../../context/OrderContext';
import { useNavigate, useParams } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import ProductSkeleton from '../../components/skeleton/ProductSkeleton';
import { motion } from 'framer-motion';





function valuetext(value) {
  return `${value}°C`;
}

function Shop() {
  const isSmallScreen = useMediaQuery('(max-width: 900px)');
  const {orderType, setOrderType} = useContext(OrderTypeContext);
  const {order, setOrder} = useContext(OrderContext);
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const {page} = useParams();
  const [animationOn, setAnimationOn] = useState(false);

  useEffect(() => {
    setAnimationOn(true);
  }, []);

 

  const limit = 9;
  const skip = (parseInt(page) - 1) * limit;


  
  const theme = useTheme();
  const { data: categories, isLoading: catLoading, isError: catIsError, error: catError } = useFetch('/Customer/Categories', 'categories');
  const { data: products, isLoading: productsLoading, isError: proIsError, error: proError } = useFetch(`/Customer/products?limit=${limit}&skip=${skip}&sortBy=${orderType}&sortOrder=${order}`, 'shop');
  const [filteredProducts, setFilteredProducts] = useState([]);

  const totalProducts = products?.data.totalCount;

  const numOfPages = Math.ceil(totalProducts / limit);

  const loadingArray = Array.from({'length': 10});
  const MotionSide = motion(Box);
  const MotionProducts = motion(Box);

  
  useEffect(()=> {
    queryClient.invalidateQueries(['shop']);
  }, [ order, orderType]);

  useEffect(()=> {
    if(!productsLoading && !proIsError)
      setFilteredProducts(products?.data.data);
  }, [productsLoading, proIsError, products]);

  

  if (catIsError)
    return <Typography color='error'>Error: {catError}</Typography>

  const handleChange = (event, value) => {
      navigate(`/shop/${value}`);
    
  }

  return (
    <Box py={4}>
      <FilterDrawer categories={categories?.data} products = {filteredProducts} onFilter = {setFilteredProducts} isLoading={catLoading} />
      <Sorts />

      <Stack direction="row" spacing={5} overflow={'hidden'}>

        {
          !isSmallScreen && <motion.dev initial = {{opacity: 0, x: -100}}  animate={animationOn ? {opacity: 1, x: 0}: {}} viewport={{once: true}} transition = {{duration: 1, ease: 'easeOut'}} ><Side products = {filteredProducts} onFilter = {setFilteredProducts} isLoading={catLoading} /></motion.dev>
        }

  
        <motion.dev style = {{flexGrow: 1}} initial = {{opacity: 0, x: 100}} animate = {{opacity: 1, x: 0}} viewport={{once: true}} transition={{duration: 1, ease: 'easeOut'}}  flexGrow={1}>
          {
            
              <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 3, width: '100%' }}>
                {
                  productsLoading && loadingArray.map((item, index) => <ProductSkeleton key = {index} />)
                }
                {
                 filteredProducts.length > 0 && filteredProducts.map(product => (<ProductCard key={product.id} product={product} />))
                }
              </Box>

          }
          <Box pt={4} display={'flex'} justifyContent={'center'} slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}>
            <Stack spacing={2}>
              <Pagination
                count={numOfPages}
                size='large'
                color='secondary'
                onChange={handleChange}
                renderItem={(item) => (
                  <PaginationItem
                    slots={{ previous: ArrowForwardIcon, next: ArrowBackIcon }}
                    {...item}
                  />
                )}
              />
            </Stack>
          </Box>
        </motion.dev>

      </Stack>
    </Box>
  )
}

export default Shop