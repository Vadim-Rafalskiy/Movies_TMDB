import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from "prop-types"

import { Tab, Tabs } from '@mui/material';
import SlideshowOutlinedIcon from '@mui/icons-material/SlideshowOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import RecommendOutlinedIcon from '@mui/icons-material/RecommendOutlined';

import { AppContext } from '../../../providers/appContext';
import translate from '../../../utils/translate';

const Menu = props => {
    const { tabsProp, tabItem, orientation } = props;
    const { state, dispatch } = React.useContext(AppContext);

    const handleChange = (event, newValue) => {
        dispatch({ type: 'setPageLocation', pageLocation: newValue });
    };

    return (
        <Tabs
            sx={{
                borderTop: 1,
                borderColor: 'divider',
                flexGrow: '1',
                ...tabsProp,
            }}
            orientation={orientation}
            onChange={handleChange}
            value={state.pageLocation}
            component={'nav'}
            textColor="inherit"
            indicatorColor="inherit"
        >
            <Tab
                sx={{ ...tabItem }}
                label={translate('navigation.home')}
                value="/"
                icon={<HomeOutlinedIcon />}
                iconPosition="start"
                to="/"
                component={RouterLink}
            />
            <Tab
                sx={{ ...tabItem }}
                label={translate('navigation.movies')}
                value="/movies"
                icon={<SlideshowOutlinedIcon />}
                iconPosition="start"
                to="/movies"
                component={RouterLink}
            />
            <Tab
                sx={{ ...tabItem }}
                label={translate('navigation.about')}
                value="/about"
                icon={<InfoOutlinedIcon />}
                iconPosition="start"
                to="/about"
                component={RouterLink}
            />
            {state.pageLocation === '/recommended' && (
                <Tab
                    sx={{ ...tabItem }}
                    label={translate('navigation.recommended')}
                    value="/recommended"
                    icon={<RecommendOutlinedIcon />}
                    iconPosition="start"
                    to="/recommended"
                    component={RouterLink}
                />
            )}
        </Tabs>
    );
};

Menu.propTypes={
    tabsProp: PropTypes.object,
    tabItem: PropTypes.object,
    orientation: PropTypes.string,
}

export default Menu;
