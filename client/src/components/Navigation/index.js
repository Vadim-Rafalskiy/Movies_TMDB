import * as React from 'react';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    IconButton,
    Box,
    Link,
    Tabs,
    Tab,
    Drawer,
    ListItem,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import SlideshowOutlinedIcon from '@mui/icons-material/SlideshowOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import LanguageButton from './LanguageButton';
import translate from '../../utils/translate';

const NavLink = ({ to, children }) => {
    return (
        <Link
            component={RouterLink}
            to={to}
            variant="button"
            color="inherit"
            sx={{ my: 1, mx: 2, textDecoration: 'none' }}
        >
            {children}
        </Link>
    );
};

const Navigation = () => {
    const [isDrowerOpen, setDrowerOpen] = useState(false);

    const [value, setValue] = useState(window.location.pathname);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const menu = () => (
        <Box sx={{ width: 200 }} role="presentation">
            <Tabs
                sx={{
                    borderTop: 1,
                    borderColor: 'divider',
                    flexGrow: '1',
                }}
                orientation="vertical"
                onChange={handleChange}
                value={value}
                component={'nav'}
                textColor="inherit"
                indicatorColor="inherit"
            >
                <Tab
                    sx={{ padding: '0 15px', height: '48px', justifyContent: 'left' }}
                    label={translate('navigation.home')}
                    value="/"
                    icon={<HomeOutlinedIcon />}
                    iconPosition="start"
                    to="/"
                    component={RouterLink}
                />
                <Tab
                    sx={{ padding: '0 15px', height: '48px', justifyContent: 'left' }}
                    label={translate('navigation.movies')}
                    value="/movies"
                    icon={<SlideshowOutlinedIcon />}
                    iconPosition="start"
                    to="/movies"
                    component={RouterLink}
                />
                <Tab
                    sx={{ padding: '0 15px', height: '48px', justifyContent: 'left' }}
                    label={translate('navigation.about')}
                    value="/about"
                    icon={<InfoOutlinedIcon />}
                    iconPosition="start"
                    to="/about"
                    component={RouterLink}
                />
            </Tabs>
        </Box>
    );
    // const list = () => (
    //     <Box sx={{ width: 250 }} role="presentation">
    //         <List>
    //             <Link component={RouterLink} to="settings">
    //                 <ListItem disablePadding>
    //                     <ListItemButton>
    //                         {/* <ListItemIcon>
    //                             <SettingsTwoToneIcon />
    //                         </ListItemIcon> */}
    //                         <ListItemText primary="Settings" />
    //                     </ListItemButton>
    //                 </ListItem>
    //             </Link>
    //         </List>
    //     </Box>
    // );

    // const qw = window.location.pathname;
    // console.log('00000000', qw);

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
                    <Tabs
                        sx={{
                            borderTop: 1,
                            borderColor: 'divider',
                            flexGrow: '1',
                            display: { xs: 'none', sm: 'block' },
                        }}
                        onChange={handleChange}
                        value={value}
                        component={'nav'}
                        textColor="inherit"
                        indicatorColor="inherit"
                    >
                        <Tab
                            label={translate('navigation.home')}
                            value="/"
                            icon={<HomeOutlinedIcon />}
                            iconPosition="start"
                            to="/"
                            component={RouterLink}
                        />
                        <Tab
                            label={translate('navigation.movies')}
                            value="/movies"
                            icon={<SlideshowOutlinedIcon />}
                            iconPosition="start"
                            to="/movies"
                            component={RouterLink}
                        />
                        <Tab
                            label={translate('navigation.about')}
                            value="/about"
                            icon={<InfoOutlinedIcon />}
                            iconPosition="start"
                            to="/about"
                            component={RouterLink}
                        />
                    </Tabs>
                    <LanguageButton />
                </Toolbar>
            </AppBar>
            <Drawer anchor="left" open={isDrowerOpen} onClose={() => setDrowerOpen(false)}>
                {menu()}
            </Drawer>
        </Box>
    );
};

export default Navigation;
