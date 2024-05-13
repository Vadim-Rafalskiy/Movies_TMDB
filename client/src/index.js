import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home, Recommended } from './Pages';

import { AppContextProvider } from './providers/appContext';
import reportWebVitals from './reportWebVitals';

import { ErrorBoundary } from './components';
import App from './App';
import Movies from './Pages/Movies';
import About from './Pages/About';

function AppEntrypoint() {
    return (
        <AppContextProvider>
            <ErrorBoundary>
                <App />
            </ErrorBoundary>
        </AppContextProvider>
    );
}

const router = createBrowserRouter([
    {
        path: '/',
        element: <AppEntrypoint />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: 'movies',
                element: <Movies />,
            },
            {
                path: 'about',
                element: <About />,
            },
            {
                path: 'recommended',
                element: <Recommended />,
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

reportWebVitals();
