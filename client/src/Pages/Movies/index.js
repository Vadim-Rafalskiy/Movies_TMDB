import { useQuery } from '@apollo/client';

import { Grid, Box, Paper, LinearProgress } from '@mui/material';
import { ToastContainer } from 'react-toastify';

import { Filter, MovieCard, MovieSelectedSection, PagePagination } from '../../components';
import { useMovies } from '../../hooks/useMovies';
import { FILTERED_MOVIES_QUERY } from './querys.js';
import { useFilters } from '../../hooks/useFilters/index.js';

const Movies = () => {
    const { setPage, filters, setFilter }=useFilters()
    const { onCardDelete, onCardSelect, selectedMovies } = useMovies();

    const { loading, error, data } = useQuery(FILTERED_MOVIES_QUERY, {
        variables: { filters },
    });

    

    if (error) return `Error! ${error}`;

    const paginationHandler = (event, page) => {
        setPage(page);
    };

    const movies = data ? data.filteredMovies?.results : [];

    const pageCount = data?.filteredMovies?.totalPages > 500 ? 500 : data?.filteredMovies?.totalPages;

    const movieItems = movies.map(movie => (
        <Grid
            item
            key={movie.id}
            xs={12}
            sm={6}
            md={4}
            xl={3}
            sx={{ display: 'flex', justifyContent: 'center' }}
        >
            <MovieCard isLoading={loading} movie={movie} onCardSelect={onCardSelect} />
        </Grid>
    ));

    const handleFilterSubmit = data => {
        setFilter(data);
    };

    return (
        <Box sx={{ flexGrow: 1, marginTop: 2 }}>
            <Grid container spacing={2} sx={{ position: 'relative' }}>
                <Grid item xs={12}>
                    <Paper elevation={6} sx={{ padding: '10px' }}>
                        {/* ---------------------FILTERS----------------------------------------------------- */}
                        <Filter onSubmit={handleFilterSubmit}  />
                        {/* ---------------------FILTERS----------------------------------------------------- */}
                    </Paper>
                </Grid>
                <Grid item xs={12} lg={9}>
                    <Box sx={{ flexGrow: 1, padding: 1 }}>
                        {loading && <LinearProgress />}
                        {data && (
                            <Grid container spacing={2}>
                                {movieItems}
                            </Grid>
                        )}

                        <PagePagination
                            paginationHandler={paginationHandler}
                            page={filters.page}
                            pageCount={pageCount}
                        />
                    </Box>
                </Grid>
                <Grid item  xs={12} lg={3} sx={{ position: 'sticky' }}>
                    <MovieSelectedSection 
                        onCardDelete={onCardDelete}
                        selectedMovies={selectedMovies}
                        sx={{ maxWidth: '320px' }}
                    />
                </Grid>
            </Grid>
            <ToastContainer
                position="bottom-left"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                stacked
            />
        </Box>
    );
};
export default Movies;
