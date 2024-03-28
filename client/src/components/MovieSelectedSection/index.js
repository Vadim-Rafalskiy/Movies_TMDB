import { Paper, CardMedia, styled, Typography, Box } from '@mui/material';
import MovieCardSelected from '../MovieCardSelected';
import noMoviesImage from '../../assets/film.jpg';

const SelectedMovies = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  height: 'calc(100vh - 140px)',
  position: 'sticky',
  top: theme.spacing(2),
  border: '5px solid white',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}));

const MovieList = styled(Box)(({ theme }) => ({
  height: '100%',
  width: '100%',
  overflow: 'scroll',
  overflowX: 'hidden',
}));

export const MovieSelectedSection = ({ onCardDelete, selectedMovies }) => {
  const movieSelectedItems = selectedMovies.map(movie => (
    <MovieCardSelected key={movie.id} movie={movie} onCardDelete={onCardDelete} />
  ));

  if (!selectedMovies.length) {
    return (
      <SelectedMovies elevation={6}>
        <CardMedia sx={{ maxWidth: '200px' }} component="img" src={noMoviesImage} />
        <Typography variant="h5" mt={2}>
          No selected movies
        </Typography>
      </SelectedMovies>
    );
  }

  return (
    <SelectedMovies elevation={6}>
      <MovieList>{movieSelectedItems}</MovieList>
    </SelectedMovies>
  );
};
