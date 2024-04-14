export const saveToStorage = (localStorageKey, value) => {
    window.localStorage.setItem(localStorageKey, JSON.stringify(value));
};

export const getFromStorage = localStorageKey => {
    if (!window || !window.localStorage) {
        return null;
    }
    try {
        const locale = window.localStorage.getItem(localStorageKey);
        return JSON.parse(locale);
    } catch (error) {
        console.error(error);
        return null;
    }
};
