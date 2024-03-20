import Grid from "@mui/material/Grid";
import { Box, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import { MovieCard } from "../../components";
import { movies } from "../../stories/stub.js";
import {MovieCardSelected} from "../../components";

const SelectedMovies = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  height: "calc(100vh - 140px)",
  position: "sticky",
  top: theme.spacing(2),
}));

const Home = () => {
  const onCardSelect = () => {};
  const onCardDelete = () => {};
  const movieItems = movies.map((movie) => (
    <Grid
      key={movie._id}
      item
      xs={12}
      sm={6}
      md={4}
      xl={3}
      sx={{ display: "flex", justifyContent: "center" }}
    >
      {MovieCard(movie, onCardSelect)}
    </Grid>
  ));

  const movieSelectedItems=movies.map((movie) => (
    <MovieCardSelected movie={movie} onCardSelect={onCardDelete}/>
  ))

  return (
    <Box sx={{ flexGrow: 1, marginTop: 2 }}>
      <Grid container spacing={2} sx={{ position: "relative" }}>
        <Grid item xs={12}>
          <Paper elevation={6}>Filters section</Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper elevation={6}>
            <Box sx={{ flexGrow: 1, padding: 1 }}>
              <Grid container spacing={2}>
                {movieItems}
              </Grid>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} sx={{ position: "sticky" }}>
          <SelectedMovies elevation={6}>
            Selected movies
            {movieSelectedItems}
          </SelectedMovies>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
