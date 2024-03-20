import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import { CardMenu } from '../index.js';

// import IconButton from '@mui/material/IconButton';
// import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import SkipNextIcon from '@mui/icons-material/SkipNext';

import { formatDate } from '../../utils/formatDate';
// import { runtime } from 'webpack';

const MovieCardSelected = ({ movie, onCardDelete }) => {
  // const theme = useTheme();

  const onClick = () => {};
  const optionCardMenu = ['Delete'];
  return (
    <Card sx={{ position: 'relative', display: 'flex', margin: '10px' }}>
      <CardMenu onClick={onClick} optionCardMenu={optionCardMenu} />
      <CardMedia component="img" sx={{ width: 100 }} image={movie.image} alt={movie.title} />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {movie.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {formatDate(movie.releaseDate)}
          </Typography>
          {movie.genres?.length ? (
            <Typography variant="subtitle1" color="text.secondary" component="div">
              Genre: {movie.genres[0].name}
            </Typography>
          ) : null}
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Length: {movie.runtime}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

MovieCardSelected.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
      })
    ),
    runtime: PropTypes.number,
  }).isRequired,
  onCardDelete: PropTypes.func.isRequired,
};

export default MovieCardSelected;
