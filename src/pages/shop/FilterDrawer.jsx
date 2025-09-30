
import React from 'react'

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { IconButton, useMediaQuery, useTheme } from '@mui/material';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import CloseIcon from '@mui/icons-material/Close';
import Side from './Side';


function FilterDrawer({categories}) {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery('(max-width: 900px)');
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box sx={{ width: 250, bgcolor: theme.palette.favColor.main, height: '100%'}} role="presentation">
            <Side />
        </Box>
    );

    return (
        <div >
            {
                isSmallScreen && <IconButton onClick = {toggleDrawer(true)} sx={{
                    p: 1.5,
                    bgcolor: theme.palette.neutral.main,
                    color: "#fff",
                    mb: 2
                }}>
                    <FilterListOutlinedIcon fontSize='large' />
                </IconButton>
            }
            <Drawer open={open}  sx = {{position: 'relative'}}>
            <IconButton sx = {{position: 'absolute', right: 0, top: '5px'}} onClick={toggleDrawer(false)}>
                <CloseIcon fontSize='large' sx = {{
                    ":hover": {
                        rotate: '180deg',
                        transition: '0.5s'
                    }
                }} />
            </IconButton>
                {DrawerList}
            </Drawer>
        </div>
    );
}

export default FilterDrawer