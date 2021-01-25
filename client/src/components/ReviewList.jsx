import React from 'react';
import ReviewEntry from './ReviewEntry';

const ReviewList = (props) => {
  return (
    <div>
      {props.reviews.map((review) =>(<ReviewEntry key={review._id} review={review} onNoClick={props.onNoClick} onNoClicked={props.onNoClicked} onYesClick={props.onYesClick} onYesClicked={props.onYesClicked} onInappropriate={props.onInappropriate}/>))}
    </div>
  );
};

export default ReviewList;
