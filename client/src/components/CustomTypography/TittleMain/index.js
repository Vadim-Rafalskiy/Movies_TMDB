import { Typography } from '@mui/material';
import PropTypes from 'prop-types'

const TittleMain = ({ children, ...rest }) => {
    return (
        <Typography
            sx={{
                mb: { xs: '10px', md: '20px' },
                fontWeight: { xs: 400 },
                fontSize: { xs: '1.5rem', md: '2.125rem', lg: '3rem' },
                lineHeight: { xs: '1.334', md: '1.235', lg: '1.167' },
                letterSpacing: { xs: '0em', md: '0.00735em', lg: '0em' },
            }}
            {...rest}
        >
            {children}
        </Typography>
    );
};

TittleMain.propTypes={
    children: PropTypes.node.isRequired,
    rest:PropTypes.object
}

export default TittleMain;
