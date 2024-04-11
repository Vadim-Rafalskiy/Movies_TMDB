import { useState, useContext, useCallback } from 'react';
import { IconButton, MenuItem, Menu, Typography, Box } from '@mui/material';
import TranslateIcon from '@mui/icons-material/Translate';

import { AppContext } from '../../../Context/AppContext';
import { LOCALES } from '../../../const.js';

const LanguageButton = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const { state, dispatch } = useContext(AppContext);

    const setLanguage = useCallback(
        locale => {
            dispatch({ type: 'setLocale', locale });
        },
        [dispatch]
    );

    console.log('state: ', state);

    const open = Boolean(anchorEl);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClickLang = e => {
        setLanguage(LOCALES[e.target.id]);
        setAnchorEl(null);
    };

    return (
        <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Typography>{state.locale.split('-')[1]}</Typography>
                <IconButton
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    <TranslateIcon />
                </IconButton>
            </Box>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={() => setAnchorEl(null)}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem
                    id="ENGLISH"
                    onClick={handleClickLang}
                    selected={state.locale === LOCALES.ENGLISH}
                >
                    English
                </MenuItem>
                <MenuItem
                    id="UKRAINIAN"
                    onClick={handleClickLang}
                    selected={state.locale === LOCALES.UKRAINIAN}
                >
                    Українська
                </MenuItem>
                <MenuItem
                    id="POLISH"
                    onClick={handleClickLang}
                    selected={state.locale === LOCALES.POLISH}
                >
                    Polski
                </MenuItem>
                <MenuItem
                    id="GERMAN"
                    onClick={handleClickLang}
                    selected={state.locale === LOCALES.GERMAN}
                >
                    Deutsch
                </MenuItem>
            </Menu>
        </Box>
    );
};

export default LanguageButton;
