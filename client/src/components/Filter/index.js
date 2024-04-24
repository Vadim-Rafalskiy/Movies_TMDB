import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Button,
    FormControlLabel,
    FormGroup,
    Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Field, Form } from 'react-final-form';
import { FormattedMessage } from 'react-intl';
import SortSelect from './SortSelect';
import FormField from './FormFild';
import { useQuery } from '@apollo/client';
import { GENRES_QUERY } from '../../Pages/Movies/querys';
import React from 'react';
import { SortDirectionField } from './SortDirectionField';

const Filter = ({ onSubmit }) => {
    const { loading, error, data } = useQuery(GENRES_QUERY);

    if (error) return `Error! ${error}`;

    const genres = data?.genres?.results.map(({ id, name }) => (
        <FormControlLabel
            sx={{ m: '0', color: 'text.secondary' }}
            key={id}
            control={<Field name={`with_genres.${name}`} component="input" type="checkbox" />}
            label={name}
        />
    ));

    return (
        <Form
            onSubmit={onSubmit}
            render={({ handleSubmit, form, submitting, pristine, values }) => (
                <form onSubmit={handleSubmit}>
                    <Box sx={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Box sx={{ display: 'flex', width: '450px', gap: '10px' }}>
                                <FormField
                                    name="with_keywords"
                                    id="filter.input_key_word"
                                    sx={{ flex: 1 }}
                                />
                                <Button
                                    disabled={submitting || pristine}
                                    type="submit"
                                    variant="contained"
                                    startIcon={<SearchIcon />}
                                    size="small"
                                >
                                    Serch
                                </Button>
                                <Button
                                    disabled={submitting || pristine}
                                    onClick={form.reset}
                                    size="small"
                                    type="reset"
                                    variant="contained"
                                >
                                    Reset
                                </Button>
                            </Box>
                            <Box sx={{ display: 'flex', minWidth: 320 }}>
                                <SortSelect />
                                <SortDirectionField />
                            </Box>
                        </Box>
                        <Accordion disableGutters="true">
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                <Typography sx={{ color: 'text.secondary' }}>Filters</Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{ display: 'flex', padding: '10px' }}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '10px',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <FormField
                                        inputProps={{
                                            type: 'text',
                                            inputmode: 'numeric',
                                            pattern: '[0-9]*',
                                        }}
                                        name="primary_release_year"
                                        id="filter.input_release_year"
                                        sx={{ width: '140px' }}
                                    />
                                    <FormField
                                        inputProps={{
                                            type: 'text',
                                            inputmode: 'numeric',
                                            pattern: '[0-9]*',
                                        }}
                                        name="with_runtime_gte"
                                        id="filter.input_runtime_gte"
                                        sx={{ width: '140px' }}
                                    />
                                    <FormField
                                        inputProps={{
                                            type: 'text',
                                            inputmode: 'numeric',
                                            pattern: '[0-9]*',
                                        }}
                                        name="with_runtime_lte"
                                        id="filter.input_runtime_lte"
                                        sx={{ width: '140px' }}
                                    />
                                </Box>
                                {/* <Box sx={{ display: 'flex', gap: '10px', flexGrow: '1' }}> */}
                                <Box sx={{ ml: '15px', width: '100%' }}>
                                    <Typography>Genres:</Typography>
                                    <FormGroup
                                        name="with_genres"
                                        sx={{
                                            // margin
                                            display: 'grid',
                                            width: '100%',
                                            gridTemplateColumns:
                                                'repeat(auto-fill, minmax(150px, 1fr))',
                                            gridGap: '15px',
                                        }}
                                    >
                                        {genres}
                                    </FormGroup>
                                </Box>
                            </AccordionDetails>
                        </Accordion>
                    </Box>
                    <pre>{JSON.stringify(values, 0, 2)}</pre>
                </form>
            )}
        />
    );
};

export default Filter;

//with_keywords (string)
// sort_by (string)

//with_genres (string) -- and(&), or(|)

//primary_release_year (number)
// with_runtime.gte (number)
// with_runtime.lte (number)
