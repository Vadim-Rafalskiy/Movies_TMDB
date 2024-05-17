import * as React from 'react';
import { useState } from 'react';
import { AppBar, Toolbar, IconButton, Box, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LanguageButton from './LanguageButton';
import { AppContext } from '../../providers/appContext';

import Menu from './Menu';

const Navigation = () => {
    const [isDrowerOpen, setDrowerOpen] = useState(false);

    const { dispatch } = React.useContext(AppContext);

    const currentPageLocation = window.location.pathname;

    React.useEffect(() => {
        if (currentPageLocation) {
            dispatch({ type: 'setPageLocation', pageLocation: currentPageLocation });
        }
    }, [dispatch, currentPageLocation]);

    return (
        <Box>
            <AppBar position="static" sx={{ backgroundColor: '#68ae03' }}>
                <Toolbar
                    sx={{
                        maxWidth: 'calc(100vw - 2%)',
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                    <IconButton
                        onClick={() => setDrowerOpen(true)}
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2, display: { xs: 'block', sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu tabsProp={{ display: { xs: 'none', sm: 'block' } }} />

                    <LanguageButton />
                </Toolbar>
            </AppBar>
            <Drawer anchor="left" open={isDrowerOpen} onClose={() => setDrowerOpen(false)}>
                <Menu
                    orientation="vertical"
                    tabs={{ width: 200, display: { xs: 'block', sm: 'none' } }}
                    tabItem={{ padding: '0 15px', height: '48px', justifyContent: 'left' }}
                />
            </Drawer>
        </Box>
    );
};

export default Navigation;
