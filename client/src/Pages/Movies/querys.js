import { gql } from '@apollo/client';

export const MOVIES_QUERY = gql`
    query Movies($page: Int) {
        movies(page: $page) {
            page
            totalPages
            totalResults
            results {
                id
                title
                posterPath
                releaseDate(format: "dd.MM.yyyy")
            }
        }
    }
`;

export const GENRES_QUERY = gql`
    query Genres {
        genres {
            results {
                name
                id
            }
        }
    }
`;
