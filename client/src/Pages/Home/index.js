import Grid from '@mui/material/Grid';
import { Box, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { MovieCard } from '../../components';
import Pagination from '@mui/material/Pagination';
import { MovieCardSelected } from '../../components';
import { useQuery } from '@apollo/client';
import { useMovies } from '../../hooks/index.js';
import { MOVIES_QUERY } from './querys.js';
import { useState } from 'react';

const SelectedMovies = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  height: 'calc(100vh - 140px)',
  position: 'sticky',
  top: theme.spacing(2),
}));

const Home = () => {
  const [page, setPage] = useState(1);
  const { loading, error, data } = useQuery(MOVIES_QUERY, { variables: { page } });
  const { onCardDelete, onCardSelect, selectedMovies, setSelektedMovies } = useMovies();

  if (error) return `Error! ${error}`;

  const paginationHandler = (event, page) => {
    setPage(page);
  };

  const movies = data ? data.movies.results : [];

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
      <MovieCard movie={movie} onCardSelect={onCardSelect} />
    </Grid>
  ));

  const movieSelectedItems = selectedMovies.map(movie => (
    <MovieCardSelected key={movie.id} movie={movie} onCardDelete={onCardDelete} />
  ));

  return (
    <Box sx={{ flexGrow: 1, marginTop: 2 }}>
      <Grid container spacing={2} sx={{ position: 'relative' }}>
        <Grid item xs={12}>
          <Paper elevation={6}>Filters section</Paper>
        </Grid>
        <Grid item xs={12} md={9}>
          <Paper elevation={6}>
            <Box sx={{ flexGrow: 1, padding: 1 }}>
              {loading && '...Loading'}
              {data && (
                <Grid container spacing={2}>
                  {movieItems}
                </Grid>
              )}
              <Box sx={{ flexGrow: 1, padding: 1, display: 'flex', justifyContent: 'center' }}>
                <Pagination
                  onChange={paginationHandler}
                  page={page}
                  size="large"
                  count={data?.movies?.totalPages > 500 ? 500 : data?.movies?.totalPages}
                  variant="outlined"
                  color="primary"
                />
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3} sx={{ position: 'sticky' }}>
          <SelectedMovies elevation={6}>
            Selected movies
            {movieSelectedItems}
          </SelectedMovies>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
