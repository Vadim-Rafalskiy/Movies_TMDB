import * as React from 'react';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    IconButton,
    Box,
    Typography,
    Button,
    Drawer,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    ListItemButton,
    Link,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';

import LanguageButton from './LanguageButton';
import translate from '../../utils/translate';

const Navigation = () => {
    const [isDrowerOpen, setDrowerOpen] = useState(false);
    const list = () => (
        <Box sx={{ width: 250 }} role="presentation">
            <List>
                <Link component={RouterLink} to="settings">
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <SettingsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Settings" />
                        </ListItemButton>
                    </ListItem>
                </Link>
            </List>
        </Box>
    );

    return (
        <Box>
            <AppBar position="static">
                <Toolbar sx={{ maxWidth: 'calc(100vw - 2%)' }}>
                    <IconButton
                        onClick={() => setDrowerOpen(true)}
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2, display: { xs: 'block', md: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Link component={RouterLink} to="/" sx={{ color: 'white', flexGrow: 1 }}>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Recomendation films
                        </Typography>
                    </Link>
                    <LanguageButton />
                    <Box
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                        }}
                    >
                        <Button component={RouterLink} to="settings" sx={{ my: 2, color: 'white' }}>
                            {translate('navigation.settings')}
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer anchor="left" open={isDrowerOpen} onClose={() => setDrowerOpen(false)}>
                {list()}
            </Drawer>
        </Box>
    );
};

export default Navigation;
