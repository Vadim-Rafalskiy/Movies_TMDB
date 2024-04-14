import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    CardContent,
    CardMedia,
    Grid,
    List,
    ListItem,
    Paper,
    Typography,
    styled,
} from '@mui/material';
import translate from '../../utils/tranlate';

const CardInfo = styled(CardContent)(({ theme }) => ({
    '&:last-child': {
        padding: theme.spacing(1, 2),
    },
}));

const GanresPlate = styled(ListItem)(({ theme }) => ({
    width: 'auto',
    border: `1px solid ${theme.palette.primary.dark}`,
    borderRadius: '5px',
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
    padding: '5px 10px',
}));

const MovieCardRecommended = ({ movie }) => {
    const { title, overview, runtime, releaseDate, genres, popularity, voteCount, voteAverage } =
        movie;

    const genresList = genres.map(({ name }) => {
        return <GanresPlate>{name}</GanresPlate>;
    });

    const ItemBox = styled(Paper)(({ theme }) => ({
        maxWidth: '450px',
        boxShadow: theme.shadows[5],
    }));

    return (
        <ItemBox sx={{ width: '100%', padding: '10px' }}>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Typography fontWeight={600} variant="h5" color="text.secondary">
                        {title}
                    </Typography>
                </Grid>
                <Grid item xs={12} lg={4}>
                    <CardMedia
                        sx={{ borderRadius: '5px' }}
                        component="img"
                        width="250"
                        image={movie.posterPath}
                        alt={movie.title}
                    />
                </Grid>
                <Grid item xs={12} lg={8} sx={{ padding: '0px' }}>
                    <CardInfo>
                        <Box display={'flex'} gap={'10px'}>
                            <Typography variant="subtitle1" color="text.secondary">
                                {translate('recomended_card.release_date')}
                            </Typography>
                            <Typography fontWeight={600} variant="subtitle1" color="text.secondary">
                                {releaseDate}
                            </Typography>
                        </Box>
                        <Box display={'flex'} gap={'10px'}>
                            <Typography variant="subtitle1" color="text.secondary">
                                {translate('recomended_card.runtime')}
                            </Typography>
                            <Typography fontWeight={600} variant="subtitle1" color="text.secondary">
                                {runtime}
                            </Typography>
                        </Box>
                        <Box display={'flex'} gap={'10px'}>
                            <Typography variant="subtitle1" color="text.secondary">
                                {translate('recomended_card.popularity')}
                            </Typography>
                            <Typography fontWeight={600} variant="subtitle1" color="text.secondary">
                                {popularity}
                            </Typography>
                        </Box>
                        <Box display={'flex'} gap={'10px'}>
                            <Typography variant="subtitle1" color="text.secondary">
                                {translate('recomended_card.vote_count')}
                            </Typography>
                            <Typography fontWeight={600} variant="subtitle1" color="text.secondary">
                                {voteCount}
                            </Typography>
                        </Box>

                        <Box display={'flex'} gap={'10px'}>
                            <Typography variant="subtitle1" color="text.secondary">
                                {translate('recomended_card.vote_average')}
                            </Typography>
                            <Typography fontWeight={600} variant="subtitle1" color="text.secondary">
                                {voteAverage}
                            </Typography>
                        </Box>
                    </CardInfo>
                </Grid>
                <Grid item xs={12}>
                    <Accordion sx={{ border: '1px solid #e1dddd' }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2-content"
                            id="panel2-header"
                        >
                            {translate('overview')}
                        </AccordionSummary>
                        <AccordionDetails>{overview}</AccordionDetails>
                    </Accordion>
                    {genres && (
                        <List
                            sx={{
                                display: 'flex',
                                gap: '5px',
                                flexWrap: 'wrap',
                            }}
                        >
                            {genresList}
                        </List>
                    )}
                </Grid>
            </Grid>
        </ItemBox>
    );
};

export default MovieCardRecommended;
