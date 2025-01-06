import { useState, useContext, useCallback } from 'react';
import { IconButton, MenuItem, Menu, Typography, Box } from '@mui/material';
import TranslateIcon from '@mui/icons-material/Translate';

import { AppContext } from '../../../providers/appContext/index.js';
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

    const open = Boolean(anchorEl);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClickLang = e => {
        setLanguage(LOCALES[e.target.id]);
        setAnchorEl(null);
    };

    const languageButtonLabel = state.locale.split('-')[1];

    return (
        <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Typography>
                    {languageButtonLabel === 'US' ? 'ENG' : languageButtonLabel}
                </Typography>
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
            </Menu>
        </Box>
    );
};

export default LanguageButton;
