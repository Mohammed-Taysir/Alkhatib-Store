import { useState } from 'react';
import { useEffect } from 'react';
import i18n from '../../i18n';
import { useTranslation } from 'react-i18next';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

const options = [
  'AR',
  'EN'
];

function ToggleLanguage() {
  
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(1);
    const open = Boolean(anchorEl);
  
  
    
  
   useEffect(() => {
     i18n.changeLanguage(options[selectedIndex].toLocaleLowerCase());
    document.body.dir  = i18n.dir();
   }, [selectedIndex])
    const handleClickListItem = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleMenuItemClick = (event, index) => {
      setSelectedIndex(index);
      setAnchorEl(null);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
      <div>
        <List component="nav" aria-label="Device settings" sx={{ bgcolor: 'none', p: 0, color: '#fff', fontSize: '12px'}}>
          <ListItemButton
            id="lock-button"
            aria-haspopup="listbox"
            aria-controls="lock-menu"
            aria-label="when device is locked"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClickListItem}
          >
           <ListItemText sx = {{'.css-rizt0-MuiTypography-root': {
            fontSize: '14px',
            fontWeight: 'bold'
           }}} primary={options[selectedIndex]} />
  
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
    );
  }

  export default ToggleLanguage;