import * as React from 'react';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, IconButton, Menu } from '@mui/material';

const CardMenu = ({ children }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{ position: 'absolute', right: '0', marginRight: '10px', marginTop: '10px' }}>
            <IconButton
                sx={{
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.7)',
                }}
                onClick={handleClick}
            >
                <MoreVertIcon />
            </IconButton>
            <Menu
                id="long-menu"
                MenuListProps={{
                    'aria-labelledby': 'long-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                {children}
            </Menu>
        </Box>
    );
};

export default CardMenu;
