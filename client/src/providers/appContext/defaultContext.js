import { useSearchParams } from 'react-router-dom';
import { LOCALES, LOCALES_STORAGE_KEY } from '../../const';
import { getFromStorage } from '../../utils/localStorage';

export const useDefaultContext = () => {
    const [searchParams] = useSearchParams();

    return {
        locale:
            getFromStorage(LOCALES_STORAGE_KEY) || searchParams.get('locale') || LOCALES.ENGLISH,
        pageLocation: '/',
    };
};
