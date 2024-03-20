import * as React from "react";
import PropTypes from "prop-types";
import CardMenu from "./Menu";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  styled,
} from "@mui/material";
import { formatDate } from "../../utils/formatDate";


const MovieCard = (movie, onCardSelect) => {
  const CardInfo = styled(CardContent)(({ theme }) => ({
    "&:last-child": {
      paddingBottom: theme.spacing(2),
    },
  }));


  return (
    <Card sx={{ maxWidth: 250, borderRadius: 2, position: "relative" }}>
      <CardMenu onCardSelect={onCardSelect} />

      <CardMedia
        component="img"
        height="350"
        image={movie.image}
        alt={movie.title}
      />
      <CardInfo>
        <Typography variant="h5" color="text.secondary">
          {movie.title}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {formatDate(movie.releaseDate)}
        </Typography>
      </CardInfo>
    </Card>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  onCardSelect: PropTypes.func.isRequired,
};

export default MovieCard;
