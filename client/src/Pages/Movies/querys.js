import { gql } from '@apollo/client';

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

export const KEYWORDS_QUERY = gql`
    query Keywords($keyWordInput: String, $page: Int) {
        keywords(keyWordInput: $keyWordInput, page: $page) {
            totalPages
            results {
                id
                name
            }
            totalResults
            page
        }
    }
`;

export const FILTERED_MOVIES_QUERY = gql`
    query Query($filters: MoviesFilterInput) {
        filteredMovies(filters: $filters) {
            page
            totalResults
            totalPages
            results {
                id
                title
                posterPath
                releaseDate(format: "dd.MM.yyyy")
            }
        }
    }
`;
