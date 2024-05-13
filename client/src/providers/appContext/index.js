import React, { useReducer, createContext } from 'react';
import { saveToStorage } from '../../utils/localStorage';
import { LOCALES_STORAGE_KEY } from '../../const';
import { useDefaultContext } from './defaultContext';

const AppContext = createContext();

let reducer = (state, action) => {

    
    switch (action.type) {
        case 'setLocale':
            saveToStorage(LOCALES_STORAGE_KEY, action.locale);

            return { ...state, locale: action.locale };
        case 'setPageLocation':

            return { ...state, pageLocation: action.pageLocation };
        default:
            return state;
    }
};

const AppContextProvider = ({ children }) => {
    const defaultContext = useDefaultContext();

    const [state, dispatch] = useReducer(reducer, defaultContext);

    const value = { state, dispatch };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContext, AppContextProvider };
