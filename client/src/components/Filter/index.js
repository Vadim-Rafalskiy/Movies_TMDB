import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Button,
    Grid,
    Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Field, Form } from 'react-final-form';
import { FormattedMessage } from 'react-intl';
import React from 'react';

import { SortDirectionField } from './SortDirectionField';
import { KeyWordInput } from './KeyWordInput';
import { SortSelect } from './SortSelect';
import { ReleaseYear } from './ReleaseYear';
import { RuntimeLte } from './RuntimeLte';
import { RuntimeGte } from './RuntimeGte';
import { Genres } from './Genres';

const Filter = ({ onSubmit }) => {
    const initialValues = { sortDirection: 'asc' };

    return (
        <Form
            onSubmit={onSubmit}
            initialValues={initialValues}
            render={({ handleSubmit, form, submitting, pristine, values }) => (
                <form onSubmit={handleSubmit}>
                    <Box sx={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Grid container spacing={2} sx={{ display: 'flex', gap: '10px' }}>
                                <Grid item sm={6} md={7} lg={3.5} sx={{ width: '100%' }}>
                                    <Field
                                        name="with_keywords"
                                        component={KeyWordInput}
                                        label="Keywords Field"
                                    />{' '}
                                </Grid>
                                <Grid item md={3} lg={3} sx={{ display: 'flex', gap: '10px' }}>
                                    <Button
                                        disabled={submitting || pristine}
                                        type="submit"
                                        variant="contained"
                                        startIcon={<SearchIcon />}
                                        sx={{ minWidth: '100px' }}
                                    >
                                        <FormattedMessage id="filter.button_search"></FormattedMessage>
                                    </Button>
                                    <Button
                                        disabled={submitting || pristine}
                                        onClick={form.reset}
                                        sx={{ minWidth: '100px' }}
                                        type="reset"
                                        variant="contained"
                                    >
                                        <FormattedMessage id="filter.button_reset"></FormattedMessage>
                                    </Button>
                                </Grid>
                                <Grid item sm={6} md={7} lg={2} sx={{ width: '100%' }}>
                                    <SortSelect />
                                </Grid>
                                <Grid item>
                                    <SortDirectionField />
                                </Grid>
                            </Grid>
                        </Box>
                        <Grid container sn={12}>
                            <Accordion sx={{ width: '100%' }} disableGutters={true}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                >
                                    <Typography sx={{ color: 'text.secondary' }}>
                                        <FormattedMessage id="filter.filters_name"></FormattedMessage>
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Grid spacing={2} container sx={{ display: 'flex' }}>
                                        <Grid item xs={12} md={2} lg={1.5}>
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    flexDirection: { md: 'column' },
                                                    justifyContent: { md: 'center' },
                                                    // md: { flexDirection: 'column',justifyContent: 'center', },
                                                    gap: '10px',
                                                }}
                                            >
                                                <ReleaseYear />
                                                <RuntimeGte />
                                                <RuntimeLte />
                                            </Box>
                                        </Grid>
                                        <Grid
                                            item
                                            sm={12}
                                            md={9.5}
                                            lg={10}
                                            sx={{  width: '100%' }}
                                        >
                                            <Box>
                                                <Genres />
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                    </Box>
                    {/* <pre>{JSON.stringify(values, 0, 2)}</pre> */}
                </form>
            )}
        />
    );
};

export default Filter;
