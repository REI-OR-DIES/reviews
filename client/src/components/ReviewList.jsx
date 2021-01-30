import React from 'react';
import { useState} from 'react';
import ReviewEntry from './ReviewEntry';


const ReviewList = (props) => {
  const [sort, setSort] = useState(null); 

  let { reviews } = props;

  if (sort === "helpfulYes") {
    props.reviews.sort((a, b) => b.helpfulYes - a.helpfulYes);
  }
  if (sort === "ratingLow") {
    props.reviews.sort((a, b) => a.rating - b.rating);
  }
  if (sort === "ratingHigh") {
    props.reviews.sort((a, b) => b.rating - a.rating);
  }
  if (sort === "createdAt") {
    props.reviews.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }

  return (
    <div>
      <div className="sortDiv">
        <select onChange={(e) => setSort(e.target.value)}>
          <option value="Select">Sort By</option>
          <option value="helpfulYes">Most Helpful</option>
          <option value="ratingHigh">Highest to Lowest Rating</option>
          <option value="ratingLow">Lowest to Highest Rating</option>
          <option value="createdAt">Most Recent</option>
        </select>
      </div>
      <div>
        {reviews.map((review) =>(<ReviewEntry key={review._id} review={review} onNoClick={props.onNoClick} onNoClicked={props.onNoClicked} onYesClick={props.onYesClick} onYesClicked={props.onYesClicked} onInappropriate={props.onInappropriate}/>))}
      </div>
    </div>
  );
};

export default ReviewList;
