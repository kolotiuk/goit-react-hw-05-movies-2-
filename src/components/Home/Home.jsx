import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'services/theMovieDbApi';
import { Link, useLocation } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getTrendingMovies().then(res => setMovies(res));
  }, []);

  if (!movies.length) {
    return;
  }

  return (
    <div>
      <h1>Trending today</h1>
      <ul
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          gap: '20px',
          listStyle: 'none',
          margin: '0',
          padding: '0',
        }}
      >
        {movies.map(({ title, name, id, poster_path }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {/* {title || name} */}
              <img
                src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
                alt=""
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
