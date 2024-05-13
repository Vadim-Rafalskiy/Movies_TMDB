import { LOCALES } from '../const';

const uk = {
    [LOCALES.UKRAINIAN]: {
        home: {
            welcome: 'Вітаю!',
            text: 'Дивіться фільми разом з нами!',
            button: 'Дивитись',
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
        about: {
            tittle: 'Це мій тренувальний проект!',
            text_1: 'Цей React-додаток який надає можливість створти список фільмів та надіслати посилання на нього своїм друзям чи знайомим за допомогою: {social}, або скопіювати посилання і скористатися іншим зручним для вас способом.',
            text_2: 'Додаток надає можливість фільтрувати фільми за ключовими фразами, тривалістю, роком випуску або жанром. Також є можливість відсортувати фільми.',
            text_3: 'Для створення цього додатку було використано:',
            text_4: 'Зі сторони клієнта:',
            text_5: 'Зі сторони сервера:',
        },
        empty_movies: 'Немає вибраних фільмів',
        input_selected_section: 'Введіть назуву списку',
        delete: 'Видалити',
        overview: 'Огляд',
    },
};

export default uk;
