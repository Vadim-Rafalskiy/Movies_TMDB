import * as React from 'react';
import Card from '@mui/material/Card';
import { CardContent, CardMedia, Typography, MenuItem, Tooltip, styled } from '@mui/material';
import PropTypes from 'prop-types';
import { CardMenu } from '../index.js';
import translate from '../../utils/translate.js';

const MovieCardSelected = ({ movie, onCardDelete }) => {
    const MovieInfo = styled(CardContent)(({ theme }) => ({
        display: 'flex',
        flexDirection: 'column',
        width: '100%',

        '&:last-child': {
            paddingBottom: theme.spacing(2),
        },
    }));

    const MovieCard = styled(Card)(({ theme }) => ({
        border: '1px solid #ccc',
        boxShadow: theme.shadows[5],
        position: 'relative',
        display: 'flex',
    }));

    return (
        <Tooltip title={movie.title}>
            <MovieCard sx={{ maxWidth: '320px', minWidth: '250px' }}>
                <CardMenu>
                    <MenuItem
                        onClick={() => {
                            onCardDelete(movie);
                        }}
                    >
                        {translate('delete')}
                    </MenuItem>
                </CardMenu>
                <CardMedia
                    component="img"
                    sx={{ width: '100px' }}
                    image={movie.posterPath}
                    alt={movie.title}
                />
                <MovieInfo>
                    <Typography
                        sx={{
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                        }}
                        component="div"
                        variant="h6"
                    >
                        {movie.title}
                    </Typography>

                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {movie.releaseDate}
                    </Typography>
                </MovieInfo>
            </MovieCard>
        </Tooltip>
    );
};

MovieCardSelected.defaultProps = {
    releaseDate: 'unknown date',
};

MovieCardSelected.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired,
        releaseDate: PropTypes.string.isRequired,
        posterPath: PropTypes.string.isRequired,
    }).isRequired,
    onCardDelete: PropTypes.func.isRequired,
};

export default MovieCardSelected;
