import * as React from 'react';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    IconButton,
    Box,
    Button,
    Drawer,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    ListItemButton,
    Link,
    Tabs,
    Tab,
} from '@mui/material';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import SlideshowOutlinedIcon from '@mui/icons-material/SlideshowOutlined';
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

    const list = () => (
        <Box sx={{ width: 250 }} role="presentation">
            <List>
                <Link component={RouterLink} to="settings">
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <SettingsTwoToneIcon />
                            </ListItemIcon>
                            <ListItemText primary="Settings" />
                        </ListItemButton>
                    </ListItem>
                </Link>
            </List>
        </Box>
    );

    const [value, setValue] = useState('one');

    const handleChange = (event, newValue) => {
        console.log('newValue--', newValue);
        console.log('event--', event);
        setValue(newValue);
    };

    return (
        <Box>
            <AppBar position="static" sx={{ backgroundColor: '#68ae03' }}>
                <Toolbar
                    sx={{
                        maxWidth: 'calc(100vw - 2%)',
                        display: 'flex',
                    }}
                >
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
                    <Tabs
                        sx={{ borderTop: 1, borderColor: 'divider', flexGrow: '1' }}
                        onChange={handleChange}
                        value={value}
                        component={'nav'}
                        textColor="inherit"
                        indicatorColor="inherit"
                    >
                        <Tab
                            label="Home"
                            value="one"
                            icon={<HomeOutlinedIcon />}
                            iconPosition="start"
                            to="/"
                            component={RouterLink}
                        />
                        <Tab
                            label="Movies"
                            value="two"
                            icon={<SlideshowOutlinedIcon />}
                            iconPosition="start"
                            to="/movies"
                            component={RouterLink}
                        />
                        <Tab label="About" value="three" to="/about" component={RouterLink} />
                    </Tabs>
                    <Box
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                        }}
                    >
                        <LanguageButton />
                        <Button component={RouterLink} to="settings" sx={{ color: 'white' }}>
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

//--------------------------------------------------

// import * as React from 'react';
// import PropTypes from 'prop-types';
// import Box from '@mui/material/Box';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
// import { MemoryRouter, Route, Routes, Link, matchPath, useLocation } from 'react-router-dom';
// import { StaticRouter } from 'react-router-dom/server';

// function Router(props) {
//     const { children } = props;
//     if (typeof window === 'undefined') {
//         return <StaticRouter location="/drafts">{children}</StaticRouter>;
//     }

//     return (
//         <MemoryRouter initialEntries={['/drafts']} initialIndex={0}>
//             {children}
//         </MemoryRouter>
//     );
// }

// Router.propTypes = {
//     children: PropTypes.node,
// };

// function useRouteMatch(patterns) {
//     const { pathname } = useLocation();

//     for (let i = 0; i < patterns.length; i += 1) {
//         const pattern = patterns[i];
//         const possibleMatch = matchPath(pattern, pathname);
//         if (possibleMatch !== null) {
//             return possibleMatch;
//         }
//     }

//     return null;
// }

// function MyTabs() {
//     // You need to provide the routes in descendant order.
//     // This means that if you have nested routes like:
//     // users, users/new, users/edit.
//     // Then the order should be ['users/add', 'users/edit', 'users'].
//     const routeMatch = useRouteMatch(['/inbox/:id', '/drafts', '/trash']);
//     const currentTab = routeMatch?.pattern?.path;

//     return (
//         <Tabs value={currentTab}>
//             <Tab label="Inbox" value="/inbox/:id" to="/inbox/1" component={Link} />
//             <Tab label="Drafts" value="/drafts" to="/drafts" component={Link} />
//             <Tab label="Trash" value="/trash" to="/trash" component={Link} />
//         </Tabs>
//     );
// }

// function CurrentRoute() {
//     const location = useLocation();

//     return (
//         <Typography variant="body2" sx={{ pb: 2 }} color="text.secondary">
//             Current route: {location.pathname}
//         </Typography>
//     );
// }

// const Navigation = () => {
//     return (

//             <Box sx={{ width: '100%' }}>
//                 <Routes>
//                     <Route path="*" element={<CurrentRoute />} />
//                 </Routes>
//                 <MyTabs />
//             </Box>

//     );
// };

// export default Navigation;

//------**************************************************************************

// import * as React from 'react';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Box from '@mui/material/Box';

// export default function Navigation() {
//     const [value, setValue] = React.useState(0);

//     const handleChange = (event, newValue) => {
//         setValue(newValue);
//     };

//     return (
//         <Box sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: 'background.paper' }}>
//             <Tabs
//                 value={value}
//                 onChange={handleChange}
//                 variant="scrollable"
//                 scrollButtons="auto"
//                 aria-label="scrollable auto tabs example"
//             >
//                 <Tab label="Item One" />
//                 <Tab label="Item Two" />
//                 <Tab label="Item Three" />
//                 <Tab label="Item Four" />
//                 <Tab label="Item Five" />
//                 <Tab label="Item Six" />
//                 <Tab label="Item Seven" />
//             </Tabs>
//         </Box>
//     );
// }
