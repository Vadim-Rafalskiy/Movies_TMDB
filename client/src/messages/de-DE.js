import { LOCALES } from '../const';

export default {
    [LOCALES.GERMAN]: {
        navigation: {
            settings: 'Einstellungen',
        },
        toast: {
            link_copied: 'Link kopiert!',
            err_max_movies: 'Die Liste kann nur 20 Filme enthalten',
            err_already_listed: 'Dieser Film ist bereits gelistet',
            info_add_to_list: '"{title}" wurde zur Liste hinzugefügt',
        },
        recomended_card: {
            release_date: 'Veröffentlichungsdatum:',
            runtime: 'Dauer:',
            popularity: 'Popularität:',
            vote_count: 'Anzahl der Stimmen:',
            vote_average: 'Durchschnittliche:',
        },

        empty_movies: 'Keine ausgewählten Filme',
        input_selected_section: 'Geben Sie den Listennamen ein',
        delete: 'Löschen',
        overview: 'Überblick',
    },
};
