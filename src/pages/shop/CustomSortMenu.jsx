import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useTheme } from '@emotion/react';
import { useQueryClient } from '@tanstack/react-query';



function CustomSortMenu({options, title,  onSet}) {
    const queryClient = useQueryClient();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const open = Boolean(anchorEl);
    const handleClickListItem = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setAnchorEl(null);
        onSet(options[index]);
      
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const theme = useTheme();


    return (
        <div>
            <List
                component="nav"
                aria-label="Device settings"
                sx={{ border: `1px solid ${theme.palette.neutral.secondary}`, borderRadius: 12, p: 0 }}
            >
                <ListItemButton
                    id="lock-button"
                    aria-haspopup="listbox"
                    aria-controls="lock-menu"
                    aria-label="when device is locked"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClickListItem}
                    sx={{
                        px: 5,
                        py: 0.2,
                        ':hover': {
                            backgroundColor: 'unset'
                        }
                    }}
                >
                    <ListItemText
                        primary={title}
                        sx={{

                        }}
                        secondary={options[selectedIndex]}
                    />
                </ListItemButton>
            </List>
            <Menu
                id="lock-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                slotProps={{
                    list: {
                        'aria-labelledby': 'lock-button',
                        role: 'listbox',
                    },
                }}
            >
                {options.map((option, index) => (
                    <MenuItem
                        key={option}

                        selected={index === selectedIndex}
                        onClick={(event) => handleMenuItemClick(event, index)}
                    >
                        {option}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    )
}

export default CustomSortMenu