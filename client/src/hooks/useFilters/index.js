import { useCallback, useState } from 'react';

export const useFilters = () => {
    const initialState = {
        page: 1,
        with_keywords: '',
        sortDirection: 'asc',
    };

    const [filters, setFilterNormalize] = useState(initialState);

    const setPage = useCallback(
        page => {
            setFilterNormalize({
                ...filters,
                page: page,
            });
        },
        [filters]
    );

    const setFilter = useCallback(
        filterFilds => {
            setFilterNormalize({
                ...filters,
                ...filterFilds,
                with_keywords: filterFilds.with_keywords?.map(item => item.id).join('|'),
                with_genres: filterFilds.with_genres?.length
                    ? filterFilds.with_genres.join(',')
                    : '',
                with_runtime_gte: Number(filterFilds.with_runtime_gte),
                with_runtime_lte: Number(filterFilds.with_runtime_lte),
                primary_release_year: Number(filterFilds.primary_release_year),
            });
        },
        [filters]
    );

    return { setPage, filters, setFilter };
};
