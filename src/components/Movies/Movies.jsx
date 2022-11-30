import SearchBox from 'components/SearchBox/SearchBox';
import { useEffect, useState } from 'react';
import { getSearchMovie } from './../../services/theMovieDbApi';
import { Link, useSearchParams, useLocation } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const filterParams = searchParams.get('filter') ?? '';
  const location = useLocation();

  useEffect(() => {
    if (filterParams) {
      getSearchMovie(filterParams).then(setMovies);
    }
  }, [filterParams]);

  const changeFilter = value => {
    setSearchParams(value !== '' ? { filter: value } : {});
  };

  return (
    <main>
      <SearchBox onSubmit={changeFilter} />

      {movies.length > 0 && (
        <ul>
          {movies.map(({ id, original_title, title }) => (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {original_title || title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
};

export default Movies;
