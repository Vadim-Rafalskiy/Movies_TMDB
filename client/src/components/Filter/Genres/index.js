import { useQuery } from '@apollo/client';
import { GENRES_QUERY } from '../../../Pages/Movies/querys';
import { FormControlLabel, FormGroup, Typography } from '@mui/material';
import { Field } from 'react-final-form';
import { useState } from 'react';
import { FormattedMessage } from 'react-intl';


export const Genres = () => {
    const {  error, data: genres } = useQuery(GENRES_QUERY);

    const [
        chekVal,
        setChekVal = value => {
            chekVal = [...chekVal, value];
        },
    ] = useState([]);

    if (error) return `Error! ${error}`;


    return (
        <>
            <Typography><FormattedMessage id="filter.genres_name"></FormattedMessage></Typography>
            <FormGroup
                name="with_genres"
                onChange={e => {
                    setChekVal(e.target.value);
                }}
                sx={{
                    display: 'grid',
                    width: '100%',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
                    gridGap: '15px',
                }}
            >
                {genres?.genres?.results.map(({ id, name }) => (
                    <FormControlLabel
                        sx={{ m: '0', color: 'text.secondary' }}
                        key={id}
                        control={
                            <Field
                                value={id}
                                name={'with_genres'}
                                component="input"
                                type="checkbox"
                            />
                        }
                        label={name}
                    />
                ))}
            </FormGroup>
        </>
    );
};
