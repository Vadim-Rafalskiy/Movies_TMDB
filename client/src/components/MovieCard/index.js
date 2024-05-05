import * as React from 'react';
import PropTypes from 'prop-types';
import { Card, CardMedia, CardContent, Typography, Tooltip, styled, Paper } from '@mui/material';
import { CardBackdrop } from '../';

import noImage from "../../assets/cinema_500px-750px.jpg"

const MovieCard = ({ movie, onCardSelect }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const CardInfo = styled(CardContent)(({ theme }) => ({
        '&:last-child': {
            padding: theme.spacing(1, 2),
        },
    }));

    const CardBox = styled(Card)(({ theme }) => ({
        maxWidth: 233,
        borderRadius: 5,
        boxShadow: theme.shadows[5],
    }));

    return (
        <Paper padding={2}>
            <CardBox onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
                <CardBackdrop open={isOpen} onClick={() => onCardSelect(movie)}>
                    <CardMedia
                        component="img"
                        height="350"
                        image={movie.posterPath?movie.posterPath:noImage}
                        alt={movie.title}
                    />
                </CardBackdrop>

                <CardInfo sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Tooltip title={movie.title}>
                        <Typography
                            sx={{
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap',
                            }}
                            variant="h6"
                            color="text.secondary"
                        >
                            {movie.title}
                        </Typography>
                    </Tooltip>

                    <Typography variant="subtitle1" color="text.secondary">
                        {movie.releaseDate}
                    </Typography>
                </CardInfo>
            </CardBox>
        </Paper>
    );
};

MovieCard.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired,
        releaseDate: PropTypes.string.isRequired,
        posterPath: PropTypes.string,
    }).isRequired,
    onCardSelect: PropTypes.func.isRequired,
};

export default MovieCard;
