import { Box, CardContent, CardMedia, Grid, Paper, Typography, styled } from '@mui/material';

const CardInfo = styled(CardContent)(({ theme }) => ({
  '&:last-child': {
    padding: theme.spacing(1, 2),
  },
}));

const GanresPlate = styled(Box)(({ theme }) => ({
  borderStyle: 'solid',
  borderWidth: '1px',
  borderColor: theme.palette.primary.dark,
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
    <ItemBox sx={{}}>
      <Grid container spacing={1} m={0}>
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
            <Typography variant="h6" color="text.secondary">
              {title}
            </Typography>

            <Typography variant="subtitle1" color="text.secondary">
              ReleaseDate: {releaseDate}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Runtime: {runtime}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Popularity: {popularity}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              VoteCount: {voteCount}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              VoteAverage: {voteAverage}
            </Typography>
          </CardInfo>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ padding: '5px', margin: '0px' }}>
            {genres && (
              <Box padding={1} sx={{ display: 'flex', gap: '5px', flexWrap: 'wrap' }}>
                {genresList}
              </Box>
            )}
            <Typography variant="h6" color="text.secondary">
              Overview
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" sx={{ paddingRight: '5px' }}>
              {overview}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </ItemBox>
  );
};

export default MovieCardRecommended;
