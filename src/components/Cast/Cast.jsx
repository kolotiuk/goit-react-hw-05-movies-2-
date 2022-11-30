import React, { useEffect, useState } from 'react';
import { getInfoAboutActors } from 'services/theMovieDbApi';
import { useParams, useLocation } from 'react-router-dom';

const Cast = () => {
  const [info, setInfo] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();
  console.log('location', location);

  const noImg =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/200px-No_image_available.svg.png';

  useEffect(() => {
    getInfoAboutActors(movieId).then(setInfo);
  }, [movieId]);

  return (
    <ul>
      {info.length > 0 ? (
        info.map(({ id, profile_path, name, character }) => {
          // console.log(profile_path === null);
          return (
            <li key={id || name}>
              <img
                src={`https://image.tmdb.org/t/p/w200/${profile_path}`}
                alt=""
              />
              <p>{name}</p>
              <p>{character}</p>
            </li>
          );
        })
      ) : (
        <p>Loading...</p>
      )}
    </ul>
  );
};

export default Cast;
