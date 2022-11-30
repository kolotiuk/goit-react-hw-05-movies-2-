import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';
import { useEffect, useState } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { getMovieDetails } from 'services/theMovieDbApi';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState(null);
  const location = useLocation();

  useEffect(() => {
    getMovieDetails(movieId).then(data => setDetails(data));
  }, [movieId]);

  if (!details) {
    return;
  }

  const { id, backdrop_path, original_title, release_date, overview, genres } =
    details;

  return (
    <div>
      <div className="content">
        <Link to={location.state?.from}>BACK</Link>
        <div className="content-img">
          <img
            src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
            alt=""
          />
        </div>
        <h2 className="content-title">
          {original_title} ({new Date(release_date).getFullYear() || null})
        </h2>

        <h3>Overview</h3>
        <p>{overview}</p>

        <h3>Genres</h3>
        {genres.length > 0 &&
          genres.map(({ id, name }) => <span key={id}>{name}</span>)}
      </div>
      <ul className="info">
        <li key={id}>
          <Link to="cast">Cast</Link>
        </li>
        {/* <li>
          <Link to="reviews" state={{ from: location }}>
            Reviews
          </Link>
        </li> */}
        <Outlet />
      </ul>
    </div>
  );
};

export default MovieDetails;
