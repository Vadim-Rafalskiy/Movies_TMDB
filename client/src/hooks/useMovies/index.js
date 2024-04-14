import { useCallback, useState } from 'react';
import { toast } from 'react-toastify';
import translate from '../../utils/tranlate';
import { MAX_SELECTED_MOVIES } from '../../const';

export const useMovies = () => {
    const [selectedMovies, setSelektedMovies] = useState([]);

    const onCardSelect = useCallback(
        movie => {
            const length = selectedMovies.length;

            const isSelected = !selectedMovies.find(({ id }) => id === movie.id);

            if (isSelected && length < MAX_SELECTED_MOVIES) {
                setSelektedMovies([movie, ...selectedMovies]);
                toast.info(translate('toast.info_add_to_list', { title: movie.title }));
            }
            if (length === MAX_SELECTED_MOVIES) {
                toast.error(translate('toast.err_max_movies'));
            }
            if (!isSelected) {
                toast.error(translate('toast.err_already_listed'));
            }
        },
        [selectedMovies]
    );
    const onCardDelete = useCallback(
        movie => {
            setSelektedMovies(selectedMovies.filter(m => m.id !== movie.id));
            toast.warning(`"${movie.title}" removed from recomended list`);
        },
        [selectedMovies]
    );

    return { selectedMovies, setSelektedMovies, onCardSelect, onCardDelete };
};
