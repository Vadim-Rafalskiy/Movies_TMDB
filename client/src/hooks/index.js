import { useCallback, useState } from 'react';

const MAX_MOVIES = 20;

export const useMovies = () => {
  const [selectedMovies, setSelektedMovies] = useState([]);

  const onCardSelect = useCallback(
    movie => {
      const length = selectedMovies.length;

      const isSelected = !selectedMovies.find(({ id }) => id === movie.id);

      if (isSelected && length < MAX_MOVIES) {
        setSelektedMovies([movie, ...selectedMovies]);
      }
    },
    [selectedMovies]
  );
  const onCardDelete = useCallback(
    movie => {
      setSelektedMovies(selectedMovies.filter(m => m.id !== movie.id));
    },
    [selectedMovies]
  );

  return { selectedMovies, setSelektedMovies, onCardSelect, onCardDelete };
};
