import { useContext } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Box, Container, CssBaseline } from '@mui/material';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    HttpLink,
    ApolloLink,
    from,
} from '@apollo/client';

import { Navigation } from './components';
import { AppContext } from './Context/AppContext';
import { Home, Settings, Recommended } from './Pages';

import 'react-toastify/dist/ReactToastify.css';

function App() {
    const { state } = useContext(AppContext);

    const httpLink = new HttpLink({ uri: 'http://localhost:4000/' });

    const localeMidlware = new ApolloLink((operation, forward) => {
        operation.setContext(({ headers = {} }) => ({
            headers: {
                ...headers,
                locale: state.locale,
            },
        }));

        return forward(operation);
    });

    const client = new ApolloClient({
        link: from([localeMidlware, httpLink]),
        cache: new InMemoryCache(),
        connectToDevTools: true,
    });

    return (
        <ApolloProvider client={client}>
            <CssBaseline />
            <BrowserRouter>
                <Navigation />
                <Box
                    sx={{
                        backgroundColor: theme => theme.palette.grey[300],
                    }}
                >
                    <Container maxWidth="xl">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="settings" element={<Settings />} />
                            <Route path="recommended" element={<Recommended />} />
                        </Routes>
                    </Container>
                </Box>
            </BrowserRouter>
        </ApolloProvider>
    );
}

export default App;
