import { Typography } from '@mui/material';
import PropTypes from 'prop-types';

const TextMain = ({ children, ...rest }) => {
    return (
        <Typography
            sx={{
                fontWeight: 400,
                fontSize: { xs: '0.875rem', sm: '1rem', md: '1.25rem', lg: '1.5rem' },
                lineHeight: { xs: '1.43', sm: '1.5', md: '1.6', lg: '1.334' },
                letterSpacing: { xs: '0.1071em', sm: '0.00938em', md: '0.0075em', lg: '0em' },
                textIndent: { xs: '0.8em', sm: '1em', md: '1.5em' },
            }}
            {...rest}
        >
            {children}
        </Typography>
    );
};

TextMain.propTypes = {
    children: PropTypes.node.isRequired,
    rest: PropTypes.object,
};

export default TextMain;
