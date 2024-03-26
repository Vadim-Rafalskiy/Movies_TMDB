import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { CardContent, CardMedia, Typography, MenuItem, styled } from '@mui/material';
// import  from '@mui/material/Typography';
import PropTypes from 'prop-types';
import { CardMenu } from '../index.js';
// import  from '@mui/material/MenuItem';

// import IconButton from '@mui/material/IconButton';
// import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import SkipNextIcon from '@mui/icons-material/SkipNext';

// import { runtime } from 'webpack';

const MovieCardSelected = ({ movie, onCardDelete }) => {
  // const theme = useTheme();
  // const onClick = () => {};
  const CardInfo = styled(CardContent)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    '&:last-child': {
      paddingBottom: theme.spacing(2),
    },
  }));
  return (
    <Card sx={{ position: 'relative', display: 'flex', margin: '10px' }}>
      <CardMenu>
        <MenuItem
          onClick={() => {
            onCardDelete(movie);
          }}
        >
          Delete
        </MenuItem>
      </CardMenu>
      <CardMedia
        component="img"
        sx={{ width: 100, height: 120 }}
        image={movie.posterPath}
        alt={movie.title}
      />
      <CardInfo>
        {/* <CardContent sx={{ flex: '1 0 auto', padding: 2 }}> */}
        <Typography component="div" variant="h6">
          {movie.title}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" component="div">
          {movie.releaseDate}
        </Typography>
        {movie.genres?.length ? (
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Genre: {movie.genres[0].name}
          </Typography>
        ) : null}
        <Typography variant="subtitle1" color="text.secondary" component="div">
          Length: {movie.runtime}
        </Typography>
        {/* </CardContent> */}
      </CardInfo>
    </Card>
  );
};

MovieCardSelected.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    posterPath: PropTypes.string.isRequired,
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
