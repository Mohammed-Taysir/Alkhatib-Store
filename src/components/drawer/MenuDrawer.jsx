import { Box, IconButton, Link, useTheme } from '@mui/material'
import { useState } from 'react'


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
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
function MenuDrawer({links}) {
    const theme = useTheme();
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box role="presentation" onClick={toggleDrawer(false)} pt = {3} >
            
            <List >
                {links.map((link, index) => {
                    const Icon = link.icon;
                    return <ListItem key={link.page} sx = {{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <ListItemButton>
                            <ListItemIcon>
                               <Icon fontSize = 'large' sx = {{color: theme.palette.neutral.main}} />
                            </ListItemIcon>
                        
                            <Link component = {RouterLink} to = {link.path} sx = {{
                                textDecoration: 'none',
                                color: theme.palette.text.primary,
                                textTransform: 'capitalize',
                
                            }}><ListItemText sx = {{
                                '.MuiTypography-root': {
                                    fontSize: '1.3rem'
                                }
                            }} primary={link.page} /></Link>
                        </ListItemButton>
                    </ListItem>
                })}
            </List>
            
        </Box>
    );

    return (
        <Box >
            
            <IconButton onClick={toggleDrawer(true)}>
                <MenuIcon fontSize='large' />
            </IconButton>
            <Drawer open={open} onClose={toggleDrawer(false)} sx = {{
            '.MuiPaper-root': {
                bgcolor: theme.palette.favColor.main,
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
            }
        }}>
            <IconButton sx = {{position: 'absolute', right: 0, top: '5px'}} onClick = {toggleDrawer(false)}>
                <CloseIcon fontSize='large' sx = {{
                    ":hover": {
                        rotate: '180deg',
                        transition: '0.5s'
                    }
                }} />
            </IconButton>
                {DrawerList}
            </Drawer>
        </Box>
    )
}

export default MenuDrawer