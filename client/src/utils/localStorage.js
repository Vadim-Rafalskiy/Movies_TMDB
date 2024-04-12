export const saveToStorage = (localStorageKey, value) => {
    window.localStorage.setItem(localStorageKey, JSON.stringify(value));
};

export const getFromStorage = localStorageKey => {
    if (!window || !window.localStorage) {
        return null;
    }
    try {
        const loc = window.localStorage.getItem(localStorageKey);
        return JSON.parse(loc);
    } catch (error) {
        console.error(error);
        return null;
    }
};
