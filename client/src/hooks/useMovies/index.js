import { useCallback, useState } from 'react';
import { toast } from 'react-toastify';

const MAX_MOVIES = 20;

export const useMovies = () => {
  const [selectedMovies, setSelektedMovies] = useState([]);

  const onCardSelect = useCallback(
    movie => {
      const length = selectedMovies.length;

      const isSelected = !selectedMovies.find(({ id }) => id === movie.id);

      if (isSelected && length < MAX_MOVIES) {
        setSelektedMovies([movie, ...selectedMovies]);
        toast.info(`"${movie.title}" has been added to  list`);
      }
      if (length === MAX_MOVIES) {
        toast.error('the list can contain only 20 moviest');
      }
      if (!isSelected) {
        toast.error('this movie is already listed');
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
