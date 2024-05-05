import { Autocomplete, TextField, debounce } from '@mui/material';
import { useMemo, useState } from 'react';
import { KEYWORDS_QUERY } from '../../../Pages/Movies/querys';
import { useQuery } from '@apollo/client';
import translate from '../../../utils/translate'

export const KeyWordInput = ({ input: { onChange, value }, label, ...rest }) => {
    const [word, setWord] = useState('');


    const { loading, error, data } = useQuery(KEYWORDS_QUERY, {
        variables: {
            keyWordInput: word,
            page: 1,
        },
    });

    const keywordsOptions = data ? data.keywords.results : [];


    const debouncedFetchKeywordsOptions = useMemo(
        () =>
            debounce(query => {
                setWord(query);
            }, 1000),
        []
    );

    // if (error) return `Error! ${error}`;

    return (
        <Autocomplete
            sx={{ minWidth: '200px' }}
            {...rest}
            multiple
            loading={false}
            disablePortal
            options={keywordsOptions}
            filterOptions={x => x}
            getOptionLabel={option => option?.name}
            onChange={(_, newValue) => onChange(newValue)}
            value={value ? value : []}
            isOptionEqualToValue={(option, value) => option.id === value.id}
            onInputChange={(_, value) => debouncedFetchKeywordsOptions(value)}
            renderInput={params => <TextField {...params} label={translate('filter.keyWords_label')} />}
        />
    );
};
