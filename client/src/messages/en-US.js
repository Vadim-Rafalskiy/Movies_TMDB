import { LOCALES } from '../const';

const en = {
    [LOCALES.ENGLISH]: {
        home:{
            welcome:"Welcome",
            text:"Explore movies today with us!",
            button:"Explore",
        },
        navigation: {
            home:"Home",
            movies:"Movies",
            about:"About",
        },
        toast: {
            link_copied: 'Link copied!',
            err_max_movies: 'The list can contain only 20 moviest',
            err_already_listed: 'This movie is already listed',
            info_add_to_list: '"{title}" has been added to list',
        },
        recomended_card: {
            release_date: 'Release date:',
            runtime: 'Runtime:',
            popularity: 'Popularity:',
            vote_count: 'Vote count:',
            vote_average: 'Vote average:',
        },
        filter: {
            keyWords_label:"Keywords",
            filters_name:'Filters',
            button_search:'Search',
            genres_name:'Genres:',
            button_reset:'Reset',
            sort_by: 'Sort by:',
            input_release_year: 'Release year',
            input_runtime_gte: 'Runtime >=',
            input_runtime_lte: 'Runtime <=',
            sort: {
                sort_direction: 'Sort direction: ',
                popularity: 'Popularity',
                release_date: 'Release date',
                revenue: 'Revenue',
                primary_release_date: 'Primary release date',
                original_title: 'Original title',
                vote_average: 'Vote average',
                vote_count: 'Vote count',
            },
        },
        empty_movies: 'No selected movies',
        input_selected_section: 'Put the list name',
        delete: 'Delete',
        overview: 'Overview',
    },
};

export default en;
