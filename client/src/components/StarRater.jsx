import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const StarRater = (props) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);


  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          // eslint-disable-next-line jsx-a11y/label-has-associated-control
          <label key={i + 1}>
            <input
              type="radio"
              name="rating"
              onClick={() => setRating(ratingValue)}
              value={ratingValue}
            />
            <FaStar
              className="star"
              size={30}
              color={ratingValue <= (hover || rating) ? 'rgb(0, 113, 141)' : '#e4e5e9'}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRater;
