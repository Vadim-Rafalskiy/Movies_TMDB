import { useQuery } from '@apollo/client';
import { Box, Grid, Paper, Typography, styled } from '@mui/material';
import { useSearchParams } from 'react-router-dom';

import { MovieCardRecommended } from '../../components/index.js';
import { MOVIE_BY_ID_QUERY } from './querys.js';

const Recommended = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    // const [params, setParams] = useState({ ids: [], title: '' });

    const { loading, error, data } = useQuery(MOVIE_BY_ID_QUERY, {
        variables: {
            ids: searchParams
                .get('ids')
                .split(',')
                .map(id => Number(id)),
        },
    });

    const title = searchParams.get('title').split('-').join(' ');

    if (error) return `Error! ${error}`;

    let movies = [];
    if (!loading && data) {
        movies = data.moviesByIds;
    }

    const movieItems = movies.map(movie => (
        <MovieCardRecommended isLoading={loading} movie={movie} />
    ));

    const ItemBox = styled(Box)(({ theme }) => ({
        display: 'flex',
        gap: '20px',
        padding: '10px',
        justifyContent: 'center',
        flexWrap: 'wrap',
    }));

    return (
        <Box sx={{ flexGrow: 1, marginTop: 2 }}>
            <Grid container spacing={2} sx={{ position: 'relative' }}>
                <Grid item xs={12}>
                    <Paper
                        elevation={6}
                        sx={{ display: 'flex', justifyContent: 'center', padding: '10px' }}
                    >
                        <Typography variant="h4">{title}</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <ItemBox elevation={6}>
                        {loading && '...Loading'}
                        {movieItems}
                    </ItemBox>
                </Grid>
            </Grid>
        </Box>
    );
};
export default Recommended;
