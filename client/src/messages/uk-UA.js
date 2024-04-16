import { LOCALES } from '../const';

const uk = {
    [LOCALES.UKRAINIAN]: {
        navigation: {
            settings: 'Налаштування',
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

        empty_movies: 'Немає вибраних фільмів',
        input_selected_section: 'Введіть назуву списку',
        delete: 'Видалити',
        overview: 'Огляд',
    },
};

export default uk;
