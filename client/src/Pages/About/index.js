import { Box } from '@mui/material';
import translate from '../../utils/translate';
import { FormattedMessage } from 'react-intl';
import { TittleMain, TextMain } from '../../components/CustomTypography';


const About = () => {
    return (
        <Box sx={{ bgcolor: 'background.paper', p: 8, minHeight: 'calc(100vh - 79px)' }}>
            <Box sx={{ maxWidth: '1000px', mx: 'auto' }}>
                <TittleMain align="center" color="text.secondary">
                    <FormattedMessage id="about.tittle"></FormattedMessage>
                </TittleMain>
                <TextMain color="text.secondary" align="justify" paragraph>
                    {translate('about.text_1', {
                        social: <b>email, telegram, facebook, viber, whatsapp</b>,
                    })}
                </TextMain>
                <TextMain color="text.secondary" align="justify" paragraph>
                    <FormattedMessage id="about.text_2"></FormattedMessage>
                </TextMain>
                <TextMain color="text.secondary" align="justify" paragraph>
                    <FormattedMessage id="about.text_3"></FormattedMessage>
                </TextMain>
                <TextMain color="text.secondary" align="justify">
                    <FormattedMessage id="about.text_4"></FormattedMessage>
                </TextMain>
                <TextMain color="text.secondary" align="justify" paragraph>
                    <b>
                        The Movie Database (TMDB), GraphQL, Apollo Client, React Router, Material
                        UI, React Final Form, React Intl, React Toastify.
                    </b>
                </TextMain>
                <TextMain color="text.secondary" align="justify">
                    <FormattedMessage id="about.text_5"></FormattedMessage>
                </TextMain>
                <TextMain color="text.secondary" align="justify">
                    <b> GraphQL, Apollo Server, Axios.</b>
                </TextMain>
            </Box>
        </Box>
    );
};

export default About;
