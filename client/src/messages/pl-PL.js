import { LOCALES } from '../const';

const pl = {
    [LOCALES.POLISH]: {
        home:{
            welcome:"Witamy",
            text:"Przeglądaj filmy już dziś razem z nami!",
            button:"Zacząć",
        },
        navigation: {
            home:"Strona główna",
            movies:"Kino",
            about:"O projekcie",
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
        filter: {
            keyWords_label:"Słowa kluczowe (eng)",
            filters_name:'Filtry',
            button_search:'Szukaj',
            genres_name:'Gatunki:',
            button_reset:'Resetowanie',
            sort_by: 'sortować:',
            input_release_year: 'Rok premiery',
            input_runtime_gte: 'Czas trwania >=',
            input_runtime_lte: 'Czas trwania <=',
            sort: {
                sort_direction: 'Kierunek sortowania: ',
                popularity: 'Popularność',
                release_date: 'Data wydania',
                revenue: 'Przychód',
                primary_release_date: 'Podstawowa data wydania',
                original_title: 'Oryginalny tytuł',
                vote_average: 'Średni wynik',
                vote_count: 'Liczba głosów',
            },
        },
        empty_movies: 'Brak wybranych filmów',
        input_selected_section: 'Wpisz nazwę listy',
        delete: 'Usunąć',
        overview: 'Przegląd',
    },
};

export default pl;
