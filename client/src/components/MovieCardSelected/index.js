import * as React from 'react';
import Card from '@mui/material/Card';
import {
    CardContent,
    CardMedia,
    Typography,
    IconButton,
    MenuItem,
    Tooltip,
    styled,
    ListItem,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import PropTypes from 'prop-types';
import { CardMenu } from '../index.js';

const MovieCardSelected = ({ movie, onCardDelete }) => {
    const MovieInfo = styled(CardContent)(({ theme }) => ({
        display: 'flex',
        flexDirection: 'column',

        '&:last-child': {
            paddingBottom: theme.spacing(2),
        },
    }));

    const MoovieCard = styled(Card)(({ theme }) => ({
        boxShadow: theme.shadows[5],
        position: 'relative',
        display: 'flex',
        '&:not(:last-child)': {
            marginBottom: theme.spacing(1),
        },
    }));

    return (
        <Tooltip title={movie.title}>
            <MoovieCard>
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
                    sx={{ width: '100px' /*, height: '120px'*/ }}
                    image={movie.posterPath}
                    alt={movie.title}
                />
                <MovieInfo>
                    <Typography
                        sx={{
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
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
            </MoovieCard>
        </Tooltip>
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
