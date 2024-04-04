import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Box, Container, CssBaseline } from '@mui/material';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
} from '@apollo/client';

import { Navigation } from './components';
import { AppContext } from './Context/AppContext';
import { Home, Settings, Recommended } from './Pages';

import 'react-toastify/dist/ReactToastify.css';

function App() {
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
