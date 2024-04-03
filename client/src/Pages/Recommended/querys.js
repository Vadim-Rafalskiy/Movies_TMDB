import { gql } from '@apollo/client';

export const MOVIE_BY_ID_QUERY = gql`
  query MoviesByIds($ids: [Int]) {
    moviesByIds(ids: $ids) {
      id
      title
      originalTitle
      runtime
      releaseDate(format: "dd.MM.yyyy")
      posterPath
      genres {
        id
        name
      }
      overview
      popularity
      voteCount
      voteAverage
    }
  }
`;
