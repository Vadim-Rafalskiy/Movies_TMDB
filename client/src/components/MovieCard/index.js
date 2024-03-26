import * as React from 'react';
import PropTypes from 'prop-types';
import { CardMenu } from '../index.js';
import MenuItem from '@mui/material/MenuItem';
import { Card, CardMedia, CardContent, Typography, styled } from '@mui/material';

const MovieCard = ({ movie, onCardSelect }) => {
  const CardInfo = styled(CardContent)(({ theme }) => ({
    '&:last-child': {
      paddingBottom: theme.spacing(2),
    },
  }));

  return (
    <Card sx={{ maxWidth: 250, borderRadius: 2, position: 'relative' }}>
      <CardMenu>
        <MenuItem onClick={() => onCardSelect(movie)}>Select</MenuItem>
      </CardMenu>

      <CardMedia component="img" height="350" image={movie.posterPath} alt={movie.title} />

      <CardInfo>
        <Typography variant="h6" color="text.secondary">
          {movie.title}
        </Typography>

        <Typography variant="subtitle1" color="text.secondary">
          {movie.releaseDate}
        </Typography>
      </CardInfo>
    </Card>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    posterPath: PropTypes.string.isRequired,
  }).isRequired,
  onCardSelect: PropTypes.func.isRequired,
};

export default MovieCard;
