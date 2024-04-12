import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppContextProvider } from './providers/appContext';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <AppContextProvider>
                <App />
            </AppContextProvider>
        </BrowserRouter>
    </React.StrictMode>
);

reportWebVitals();
