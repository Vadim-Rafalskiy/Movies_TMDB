import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppContextProvider } from './Context/AppContext';
import reportWebVitals from './reportWebVitals';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <AppContextProvider>
            <App />
        </AppContextProvider>
    </React.StrictMode>
);

reportWebVitals();
