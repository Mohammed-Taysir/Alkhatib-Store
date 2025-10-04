import { Box, CircularProgress, Divider, Stack, Typography, FormControlLabel, FormLabel, Radio, RadioGroup, useTheme, TextField, Pagination, PaginationItem, Button, useMediaQuery, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
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




function valuetext(value) {
  return `${value}°C`;
}

function Shop() {
  const isSmallScreen = useMediaQuery('(max-width: 900px)');

  

  

  const theme = useTheme();
  const { data: categories, isLoading: catLoading, isError: catIsError, error: catError } = useFetch('/Customer/Categories', 'categories');
  const { data: products, isLoading: productsLoading, isError: proIsError, error: proError } = useFetch('/Customer/Products', 'products');
  const [filteredProducts, setFilteredProducts] = useState([]);


  

  useEffect(()=> {
    if(!productsLoading && !proIsError)
      setFilteredProducts(products?.data);
  }, [productsLoading, proIsError, products]);

  if (catLoading)
    return <CircularProgress />

  if (catIsError)
    return <Typography color='error'>Error: {catError}</Typography>


  return (
    <Box py={4}>
      <FilterDrawer categories={categories.data} products = {filteredProducts} onFilter = {setFilteredProducts}  />
      <Stack direction="row" spacing={5} >

        {
          !isSmallScreen && <Side products = {filteredProducts} onFilter = {setFilteredProducts}/>
        }

        <Box flexGrow={1}>
          {
            productsLoading ? <Box minHeight={'100vh'} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}><CircularProgress /></Box> :
              <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 3 }}>
                {
                  filteredProducts.map(product => (<ProductCard key={product.id} product={product} />))
                }
              </Box>

          }
          <Box pt={4} display={'flex'} justifyContent={'center'} slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}>
            <Stack spacing={2}>
              <Pagination
                count={10}
                size='large'
                color='secondary'
                renderItem={(item) => (
                  <PaginationItem
                    slots={{ previous: ArrowForwardIcon, next: ArrowBackIcon }}
                    {...item}
                  />
                )}
              />
            </Stack>
          </Box>
        </Box>
      </Stack>
    </Box>
  )
}

export default Shop