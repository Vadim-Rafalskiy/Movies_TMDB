import { LOCALES } from '../const';

const uk = {
    [LOCALES.UKRAINIAN]: {
        home:{
            welcome:"Привіт",
            text:"Дивіться фільми разом з нами!",
            button:"Дивитись",
        },
        navigation: {
            home: 'Головна',
            movies: 'Фільми',
            about: 'Про проект',
        },
        toast: {
            link_copied: 'Посилання скопійовано!',
            err_max_movies: 'Список може містити лише 20 фільмів',
            err_already_listed: 'Цей фільм уже є в списку',
            info_add_to_list: '"{title}" додано до списку',
        },
        recomended_card: {
            release_date: 'Дата виходу:',
            runtime: 'Тривалість:',
            popularity: 'Популярність:',
            vote_count: 'Кількість голосів:',
            vote_average: 'Середня оцінка:',
        },
        filter: {
            keyWords_label: 'Ключові слова (eng)',
            filters_name: 'Фільтри',
            button_search: 'Пошук',
            genres_name: 'Жанри:',
            button_reset: 'Скинути',
            sort_by: 'Сортувати за:',
            input_release_year: 'Рік релізу',
            input_runtime_gte: 'Тривалість >=',
            input_runtime_lte: 'Тривалість <=',
            sort: {
                sort_direction: 'Напрямок сортування: ',
                popularity: 'Популярність',
                release_date: 'Дата релізу',
                revenue: 'Дохід',
                primary_release_date: 'Дата первинного релізу',
                original_title: 'Оригінальна назва',
                vote_average: 'Середня оцінка',
                vote_count: 'Кількість голосів',
            },
        },
        empty_movies: 'Немає вибраних фільмів',
        input_selected_section: 'Введіть назуву списку',
        delete: 'Видалити',
        overview: 'Огляд',
    },
};

export default uk;
