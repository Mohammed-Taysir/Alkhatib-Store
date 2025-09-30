import React from 'react'
import { Box, CircularProgress, Divider, Stack, Typography, FormControlLabel, FormLabel, Radio, RadioGroup, useTheme, TextField, Pagination, PaginationItem, Button, useMediaQuery, IconButton } from '@mui/material'
import { useState } from 'react'
import useFetch from '../../custom-hook/useFetch';
import Slider from '@mui/material/Slider';
import FormControl from '@mui/material/FormControl';

function Side() {
    const isSmallScreen = useMediaQuery('(max-width: 900px)');
    const [category, setCategory] = useState('All');
    const [value, setValue] = useState([1000, 0]);

    const handleChange = (event, newValue) => {
        setValue([newValue[1], newValue[0]]);
    };
    const theme = useTheme();
    const { data: categories, isLoading: catLoading, isError: catIsError, error: catError } = useFetch('/Customer/Categories', 'categories');
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
            bgcolor: theme.palette.favColor.main,
            p: 3,
            borderRadius: 4,
            width: isSmallScreen? "100%": 300
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
                    defaultValue="All"
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

                        
                    />
                </Box>

                <Button variant='contained' size='large' sx={{
                    bgcolor: theme.palette.neutral.main
                }}>Apply Filter</Button>
            </Stack>





        </Box>
    )
}

export default Side