import { LOCALES } from '../const';

export default {
    [LOCALES.POLISH]: {
        navigation: {
            settings: 'Ustawienia',
        },
        toast: {
            link_copied: 'Link skopiowany!',
            err_max_movies: 'Lista może zawierać tylko 20 filmów',
            err_already_listed: 'Ten film jest już na liście',
            info_add_to_list: '"{title}" został dodany do listy',
        },
        recomended_card: {
            release_date: 'Data wydania:',
            runtime: 'Czas trwania:',
            popularity: 'Popularność:',
            vote_count: 'Liczba głosów:',
            vote_average: 'Średni wynik:',
        },

        empty_movies: 'Brak wybranych filmów',
        input_selected_section: 'Wpisz nazwę listy',
        delete: 'Usunąć',
        overview: 'Przegląd',
    },
};
