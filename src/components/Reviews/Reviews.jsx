import React, { useEffect, useState } from 'react';
import { getReview } from './../../services/theMovieDbApi';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [author, setAuthor] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getReview(movieId).then(setAuthor);
  }, [movieId]);

  return (
    <ul>
      {author.length ? (
        author.map(({ id, author, content }) => (
          <li key={id}>
            <p>{author}</p>
            <p>{content}</p>
          </li>
        ))
      ) : (
        <p>We dont have any reviews for this movie</p>
      )}
    </ul>
  );
};

export default Reviews;
