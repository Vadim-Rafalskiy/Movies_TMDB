import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { FormattedMessage } from 'react-intl';
import { Link as RouterLink } from 'react-router-dom';
import React from 'react';

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            Copyright © The Movies DB {new Date().getFullYear()}
        </Typography>
    );
}

const Home = () => {
    return (
        <Box
            sx={{
                bgcolor: 'background.paper',
                pt: 8,
                pb: 8,
                minHeight: 'calc(100vh - 79px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
            }}
        >
            <Container maxWidth="sm">
                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="text.primary"
                    gutterBottom
                >
                    <FormattedMessage id="home.welcome"></FormattedMessage>
                </Typography>
                <Typography
                    component="p"
                    variant="h5"
                    align="center"
                    color="text.secondary"
                    paragraph
                >
                    <FormattedMessage id="home.text"></FormattedMessage>
                </Typography>
                <Stack sx={{ pt: 4 }} direction="row" spacing={2} justifyContent="center">
                    <Button
                        component={RouterLink}
                        to="/movies"
                        variant="contained"
                        color="secondary"
                    >
                        <FormattedMessage id="home.button"></FormattedMessage>
                    </Button>
                </Stack>
                <Box mt={10} p={2} sx={{border: theme => `2px solid ${theme.palette.error.light}`, borderRadius:'5px'}}>
                    <Typography
                        component="p"
                        variant="h6"
                        align="center"
                        color="text.secondary"
                        paragraph
                        m={0}
                    >
                        <FormattedMessage id="home.warning"></FormattedMessage>
                    </Typography>
                </Box>
            </Container>
            <Container
                maxWidth="md"
                component="footer"
                sx={{
                    borderTop: theme => `1px solid ${theme.palette.divider}`,
                    mt: 4,
                    py: [3, 1],
                }}
            >
                <Copyright />
            </Container>
        </Box>
    );
};

export default Home;
