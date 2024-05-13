import { Box, Typography } from '@mui/material';
import translate from '../../utils/translate';
import { FormattedMessage } from 'react-intl';

const Tittle = ({ children, ...props }) => {
    return (
        <Typography
            sx={{
                mb: { xs: '10px', md: '20px' },
                fontWeight: { xs: 400 },
                fontSize: {  xs: '1.5rem', md: '2.125rem', lg: '3rem' },
                lineHeight: { xs: '1.334', md: '1.235', lg: '1.167' },
                letterSpacing: {  xs: '0em', md: '0.00735em', lg: '0em' },
            }}
            {...props}
        >
            {children}
        </Typography>
    );
};
const Text = ({ children, ...props }) => {
    return (
        <Typography
            sx={{
                fontWeight: 400,
                fontSize: { xs: '0.875rem', sm: '1rem', md: '1.25rem', lg: '1.5rem' },
                lineHeight: { xs: '1.43', sm: '1.5', md: '1.6', lg: '1.334' },
                letterSpacing: { xs: '0.1071em', sm: '0.00938em', md: '0.0075em', lg: '0em' },
                textIndent: { xs: '0.8em', sm: '1em', md: '1.5em' },
            }}
            {...props}
        >
            {children}
        </Typography>
    );
};

const About = () => {
    return (
        <Box sx={{ bgcolor: 'background.paper', p: 8, minHeight: 'calc(100vh - 79px)' }}>
            <Box sx={{ maxWidth: '1000px', mx: 'auto' }}>
                <Tittle align="center" color="text.secondary">
                    <FormattedMessage id="about.tittle"></FormattedMessage>
                </Tittle>
                <Text color="text.secondary" align="justify" paragraph>
                    {translate('about.text_1', {
                        social: <b>email, telegram, facebook, viber, whatsapp</b>,
                    })}
                </Text>
                <Text color="text.secondary" align="justify" paragraph>
                    <FormattedMessage id="about.text_2"></FormattedMessage>
                </Text>
                <Text color="text.secondary" align="justify" paragraph>
                    <FormattedMessage id="about.text_3"></FormattedMessage>
                </Text>
                <Text color="text.secondary" align="justify">
                    <FormattedMessage id="about.text_4"></FormattedMessage>
                </Text>
                <Text color="text.secondary" align="justify" paragraph>
                    <b>
                        The Movie Database (TMDB), GraphQL, Apollo Client, React Router, Material UI,
                        React Final Form, React Intl, React Toastify.
                    </b>
                </Text>
                <Text color="text.secondary" align="justify">
                    <FormattedMessage id="about.text_5"></FormattedMessage>
                </Text>
                <Text color="text.secondary" align="justify">
                    <b> GraphQL, Apollo Server, Axios.</b>
                </Text>
            </Box>
        </Box>
    );
};

export default About;
