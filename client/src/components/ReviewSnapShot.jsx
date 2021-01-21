import React from 'React';
import ReviewCounts from './ReviewCounts.jsx';
import StarRating from './StarRating.jsx';

function ReviewSnapShot() {
  return (
    <div className="ReviewSnapShot">
      <div className="actionBox">
        <h2>Reviews</h2>
        <button className="button button1" type="submit">Write a Review</button>
      </div>
      <div>
        <ReviewCounts />
      </div>
      <div>
        <StarRating />
      </div>
    </div>
  );
}

export default ReviewSnapShot;
