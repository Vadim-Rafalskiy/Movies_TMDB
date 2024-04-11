import { useState } from 'react';
import { useQuery } from '@apollo/client';

import { Grid, Box, Paper, LinearProgress } from '@mui/material';
import { ToastContainer } from 'react-toastify';

import { MovieCard, MovieSelectedSection, PagePagination } from '../../components';
import { useMovies } from '../../hooks/useMovies';
import { MOVIES_QUERY } from './querys.js';

const Home = () => {
    const [page, setPage] = useState(1);
    const { loading, error, data } = useQuery(MOVIES_QUERY, { variables: { page } });
    const { onCardDelete, onCardSelect, selectedMovies } = useMovies();

    if (error) return `Error! ${error}`;

    const paginationHandler = (event, page) => {
        setPage(page);
    };

    const movies = data ? data.movies.results : [];
    const pageCount = data?.movies?.totalPages > 500 ? 500 : data?.movies?.totalPages;
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
    return (
        <Box sx={{ flexGrow: 1, marginTop: 2 }}>
            <Grid container spacing={2} sx={{ position: 'relative' }}>
                <Grid item xs={12}>
                    <Paper elevation={6}>Filters section</Paper>
                </Grid>
                <Grid item xs={12} md={9}>
                    {/* <Paper elevation={6}> */}
                    <Box sx={{ flexGrow: 1, padding: 1 }}>
                        {loading && <LinearProgress />}
                        {data && (
                            <Grid container spacing={2}>
                                {movieItems}
                            </Grid>
                        )}

                        <PagePagination
                            paginationHandler={paginationHandler}
                            page={page}
                            pageCount={pageCount}
                        />
                    </Box>
                    {/* </Paper> */}
                </Grid>
                <Grid item xs={12} md={3} sx={{ position: 'sticky' }}>
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
export default Home;
