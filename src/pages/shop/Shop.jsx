import { Box, CircularProgress, Divider, Stack, Typography, FormControlLabel, FormLabel, Radio, RadioGroup, useTheme, TextField, Pagination, PaginationItem, Button, useMediaQuery, IconButton } from '@mui/material'
import React, { useState } from 'react'
import useFetch from '../../custom-hook/useFetch';
import Slider from '@mui/material/Slider';
import FormControl from '@mui/material/FormControl';
import ProductsSection from '../../components/main/products-section/ProductsSection';
import ProductCard from '../../components/product-card/ProductCard';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';




function valuetext(value) {
  return `${value}°C`;
}

function Shop() {
  const isSmallScreen = useMediaQuery('(max-width: 900px)');

  const [value, setValue] = useState([1000, 0]);

  const handleChange = (event, newValue) => {
    setValue([newValue[1], newValue[0]]);
  };

  const [category, setCategory] = useState('male');

  const theme = useTheme();
  const { data: categories, isLoading: catLoading, isError: catIsError, error: catError } = useFetch('/Customer/Categories', 'categories');
  const { data: products, isLoading: productsLoading, isError: proIsError, error: proError } = useFetch('/Customer/Products', 'products');



  if (catLoading)
    return <CircularProgress />

  if (catIsError)
    return <Typography color='error'>Error: {catError}</Typography>
  return (
    <Box py={4}>
      {
        isSmallScreen && <IconButton sx = {{
          p: 1.5,
          bgcolor: theme.palette.neutral.main,
          color: "#fff",
          mb: 2
        }}>
          <FilterListOutlinedIcon fontSize='large' />
          </IconButton>
      }
      <Stack direction="row" spacing={5} >
        <Box sx={{
          display:isSmallScreen? "none": 'flex',
          flexDirection: 'column',
          gap: 3,
          bgcolor: theme.palette.favColor.main,
          p: 3,
          borderRadius: 4,
          width: 300
        }}>




          <FormControl sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1.2,
            alignItems: 'center'
          }}>
            <FormLabel id="demo-radio-buttons-group-label" sx={{
              fontSize: '23px',
              color: theme.palette.neutral.secondary,
              pb: 2,
              borderBottom: `1px solid ${theme.palette.neutral.main}`,
              "&.Mui-focused": {
                color: theme.palette.neutral.main
              }
              ,
              width: '100%',
              textAlign: 'center'

            }}>Categories</FormLabel>

            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="category"
              onChange={(e) => {
                setCategory(e.target.value);
              }}

              value={category}

            >

              <FormControlLabel sx={{
                '.muiltr-1q72ply-MuiButtonBase-root-MuiSwitchBase-root-MuiRadio-root.Mui-checked': {
                  color: 'usnset'
                },
                '.Mui-checked': {
                  color: theme.palette.neutral.secondary
                }
              }} value="All" control={<Radio />} label="All" />
              {
                categories?.data.map((item) => (
                  <FormControlLabel sx={{
                    '.muiltr-1q72ply-MuiButtonBase-root-MuiSwitchBase-root-MuiRadio-root.Mui-checked': {
                      color: 'usnset'
                    },
                    '.Mui-checked': {
                      color: theme.palette.neutral.secondary
                    }
                  }} key={item.id} value={item.name} control={<Radio />} label={item.name} />
                ))
              }

            </RadioGroup>
          </FormControl>

          <Stack>
            <Typography sx={{
              color: theme.palette.neutral.secondary,
              fontSize: "23px",
              textAlign: 'center',
              borderBottom: `1px solid ${theme.palette.neutral.main}`,
              pb: 2
            }}>Filter</Typography>

            <Stack mt={2} direction='row' alignItems='center' spacing={2}>
              <TextField disabled value={value[0]} sx={{

                '.muiltr-1lmg4yq-MuiInputBase-input-MuiOutlinedInput-input': {
                  height: '10px',
                  border: `2px solid ${theme.palette.neutral.secondary}`,
                  fontSize: '15px',
                  borderRadius: '40px'
                },
                ".Mui-disabled": {
                  WebkitTextFillColor: theme.palette.neutral.secondary
                },
                '& fieldset': {
                  border: 'unset',
                  WebkitTextFillColor: theme.palette.neutral.secondary
                },
                ".MuiInputBase-input": {
                  textAlign: "center",
                },
                '.MuiInputBase-input.Mui-disabled': {
                  WebkitTextFillColor: 'unset'
                }

              }} />
              <TextField disabled value={value[1]} sx={{
                '.muiltr-1lmg4yq-MuiInputBase-input-MuiOutlinedInput-input': {
                  height: '10px',
                  border: `2px solid ${theme.palette.neutral.secondary}`,
                  fontSize: '15px',


                  borderRadius: '40px'

                },
                ".Mui-disabled": {
                  WebkitTextFillColor: theme.palette.neutral.secondary
                },

                '& fieldset': {
                  border: 'unset',
                  WebkitTextFillColor: theme.palette.neutral.secondary
                },

                ".MuiInputBase-input": {
                  textAlign: 'center'
                },
                '.MuiInputBase-input.Mui-disabled': {
                  WebkitTextFillColor: 'unset'
                }

              }} />
            </Stack>

            <Box px={2} mb={2}>
              <Slider
                sx={{
                  mt: 2,
                  '.muiltr-xvk2i-MuiSlider-track': {
                    color: theme.palette.neutral.main
                  },
                  '.muiltr-1xcmt9q-MuiSlider-thumb': {
                    color: theme.palette.neutral.main
                  },


                }}
                getAriaLabel={() => 'Price Filter'}
                value={value}
                min={0}
                max={1000}
                onChange={handleChange}

                getAriaValueText={valuetext}
              />
            </Box>

            <Button variant='contained' size='large' sx={{
              bgcolor: theme.palette.neutral.main
            }}>Apply Filter</Button>
          </Stack>





        </Box>

        <Box flexGrow={1}>
          {
            productsLoading ? <Box minHeight={'100vh'} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}><CircularProgress /></Box> :
              <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 3 }}>
                {
                  products?.data.map(product => (<ProductCard key={product.id} product={product} />))
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