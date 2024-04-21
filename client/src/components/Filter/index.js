import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Button,
    Checkbox,
    FormControlLabel,
    FormGroup,
    IconButton,
    InputBase,
    Paper,
    TextField,
    Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Form, Field } from 'react-final-form';
import { FormattedMessage } from 'react-intl';
import SortSelect from './SortSelect';
import FormField from './FormFild';
import { useQuery } from '@apollo/client';
import { GENRES_QUERY } from '../../Pages/Movies/querys';

const Filter = onSubmit => {
    const { loading, error, data } = useQuery(GENRES_QUERY);

    if (error) return `Error! ${error}`;

    const genres = data?.genres?.results.map(genre => (
        <FormControlLabel
            sx={{ mr: '0', color: 'text.secondary' }}
            key={genre.id}
            control={<Checkbox />}
            label={genre.name}
        />
    ));

    return (
        <Form
            onSubmit={onSubmit}
            render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <Box sx={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Box sx={{ display: 'flex', width: '450px', gap: '10px' }}>
                                <FormField
                                    name="key_word"
                                    id="filter.input_key_word"
                                    sx={{ flex: 1 }}
                                />
                                <Button
                                    type="submit"
                                    variant="contained"
                                    startIcon={<SearchIcon />}
                                >
                                    Serch
                                </Button>
                            </Box>
                            <SortSelect />
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
                                        name="primary_release_year"
                                        id="filter.input_release_year"
                                        sx={{ width: '120px' }}
                                    />
                                    <FormField
                                        name="with_runtime.gte"
                                        id="filter.input_runtime_gte"
                                        sx={{ width: '120px' }}
                                    />
                                    <FormField
                                        name="with_runtime.lte"
                                        id="filter.input_runtime_lte"
                                        sx={{ width: '120px' }}
                                    />
                                </Box>
                                {/* <Box sx={{ display: 'flex', gap: '10px', flexGrow: '1' }}> */}
                                <Box sx={{ ml: '15px', width: '100%' }}>
                                    <Typography>Genres:</Typography>
                                    <FormGroup
                                        sx={{
                                            display: 'grid',
                                            width: '100%',
                                            gridTemplateColumns:
                                                'repeat(auto-fill, minmax(150px, 1fr))',
                                            gridColumnGap: '10px',
                                        }}
                                    >
                                        {genres}
                                    </FormGroup>
                                </Box>
                            </AccordionDetails>
                        </Accordion>
                    </Box>
                </form>
            )}
        />
    );
};

export default Filter;

//with_keywords (string)

//with_genres (string) -- and(&), or(|)

//primary_release_year (number)
// with_runtime.gte (number)
// with_runtime.lte (number)
