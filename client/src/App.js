import { useContext, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, CssBaseline } from '@mui/material';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    HttpLink,
    ApolloLink,
    from,
} from '@apollo/client';

import { Navigation } from './components';
import { AppContext } from './providers/appContext';
import I18nProvider from './providers/i18n';

import 'react-toastify/dist/ReactToastify.css';
import { getFromStorage } from './utils/localStorage';
import { LOCALES_STORAGE_KEY } from './const';

function App() {
    const { state, dispatch } = useContext(AppContext);

    const currentLocale = getFromStorage(LOCALES_STORAGE_KEY);

    useEffect(() => {
        if (currentLocale) {
            dispatch({ type: 'setLocale', locale: currentLocale });
        }
    }, [dispatch, currentLocale]);

    const httpLink = new HttpLink({ uri: `${window.location.origin}/graphql` });
    // const httpLink = new HttpLink({ uri: 'http://localhost:4000/graphql' });


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
            <I18nProvider locale={state.locale}>
                <Navigation />
                <Container
                    maxWidth="xl"
                    sx={{
                        backgroundColor: theme => theme.palette.grey[200],
                    }}
                >
                    <main>
                        <Outlet />
                    </main>
                </Container>
            </I18nProvider>
        </ApolloProvider>
    );
}

export default App;
