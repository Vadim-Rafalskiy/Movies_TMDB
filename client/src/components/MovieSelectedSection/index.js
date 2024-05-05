import { Paper, CardMedia, styled, Typography, Box } from '@mui/material';
import noMoviesImage from '../../assets/film.jpg';
import { MovieCardSelectedForm, ConfirmModal, MovieCardSelected } from '../../components';
import { useState } from 'react';
import translate from '../../utils/translate';

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
}));

const MovieList = styled(Box)(({ theme }) => ({
    height: '100%',
    width: '100%',
    overflowY: 'auto',
    overflowX: 'hidden',
    scrollbarWidth: 'thin',
}));

const MovieSelectedSection = ({ onCardDelete, selectedMovies }) => {
    const [link, setLink] = useState('');
    const [ListName, setListName] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    const handleModalOpen = () => {
        setIsModalOpen(true);
    };

    const onSubmit = ({ listName }) => {
        setListName(listName);
        const listNameSlug = listName.trim().split(' ').join('-');

        const listIds = movieSelectedItems.map(({ key }) => key);

        setLink(`${window.location.host}/recommended?title=${listNameSlug}&ids=${listIds.join()}`);

        handleModalOpen();
    };

    const movieSelectedItems = selectedMovies.map(movie => (
        <MovieCardSelected
            sx={{ marginRight: '5px', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
            key={movie.id}
            movie={movie}
            onCardDelete={onCardDelete}
        />
    ));

    if (!selectedMovies.length) {
        return (
            <SelectedMovies elevation={6}>
                <CardMedia sx={{ maxWidth: '250px', margin:"0 auto" }}  component="img" src={noMoviesImage} />
                <Typography variant="h5" mt={2} alignSelf="center">
                    {translate('empty_movies')}
                </Typography>
            </SelectedMovies>
        );
    }

    return (
        <>
            <SelectedMovies elevation={6}>
                <MovieList>
                    <Box
                        sx={{
                            display: 'grid',
                            width: '100%',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                            gridGap: '5px',
                        }}
                    >
                        {movieSelectedItems}
                    </Box>
                </MovieList>
                <MovieCardSelectedForm onSubmit={onSubmit} />
            </SelectedMovies>
            <ConfirmModal
                title={ListName}
                link={link}
                onOpen={isModalOpen}
                handleModalClose={handleModalClose}
            />
        </>
    );
};

export default MovieSelectedSection;
