import React from 'react';
import moment from 'moment'
import { FaStar } from 'react-icons/fa';


function ReviewEntry(props) {
  
  const recommendValue = props.review.recommend;
  const inappropriateValue = props.review.inappropriate;
  let yesClickedValue = props.review.yesClicked;
  let onNoClickedValue = props.review.noClicked;
  let ratingValue = props.review.rating;

  let recommend;
  let inappropriate;
  let yesClicked;
  let noClicked;
  let ratingComponent;

  if (recommendValue === true) {
    recommend = (
      <ul className="ageRecommendUl">
        <li className="ageRecommendLi">
          <span className="checkSpan"><a title="Icon Check Mark #74531"><img src="https://icon-library.net//images/icon-check-mark/icon-check-mark-12.jpg" width="19px" /></a></span>
          <span className="ageRecommendSpan">Yes,   </span>
        </li>
        <li className="ageRecommendLi">I recommend this Product</li>
      </ul>
    );
  } else {
    recommend = (
      <ul className="ageRecommendUl">
        <li className="ageRecommendLi">
          <span className="checkSpan"><a title="No Icon #178878"><img src="https://icon-library.net//images/no-icon/no-icon-12.jpg" width="17px" /></a></span>
          <span className="ageRecommendSpan">No,   </span>
        </li>
        <li className="ageRecommendLi">I do not recommend this Product</li>
      </ul>
    );
  }
  if (inappropriateValue === false) {
    inappropriate = (
      <button type="button" className="reportBtn" onClick={() => props.onInappropriate(props.review._id)}>Report as Inappropriate</button>
    );
  } else {
    inappropriate = (
      <button type="button" className="reportBtnClicked">Reported</button>
    );
  }
  if (yesClickedValue === false) {
    yesClicked = (
      <button type="button" disabled={false} className="btnYes" onClick={() => {props.onYesClick(props.review._id); props.onYesClicked(props.review._id)}}>
        Yes-
        <span className="yesText">{props.review.helpfulYes}</span>
      </button>
    );
  } else {
    yesClicked = (
      <button type="button" disabled={true} className="btnYes">
        Yes-
        <span className="yesText">{props.review.helpfulYes}</span>
      </button>
    );
  }
  if (onNoClickedValue === false) {
    noClicked = (
      <button type="button" disabled={false } className="btnNo" onClick={() => {props.onNoClick(props.review._id); props.onNoClicked(props.review._id)}}>
        No-
        <span className="noText">{props.review.helpfulNo}</span>
      </button>
    );
  } else {
    noClicked = (
      <button type="button" disabled = { true } className="btnNo">
        No-
        <span className="noText">{props.review.helpfulNo}</span>
      </button>
    );
  }
  if (ratingValue === 0) {
    ratingComponent = (
      <span>
        <FaStar size={15} color="rgb(201,201,201)" />
        <FaStar size={15} color="rgb(201,201,201)" />
        <FaStar size={15} color="rgb(201,201,201)" />
        <FaStar size={15} color="rgb(201,201,201)" />
        <FaStar size={15} color="rgb(201,201,201)" />
      </span>
    );
  } if (ratingValue === 1) {
    ratingComponent = (
      <span>
        <FaStar size={15} color="rgb(0, 113, 141)" />
        <FaStar size={15} color="rgb(0, 113, 141)" />
        <FaStar size={15} color="rgb(0, 113, 141)" />
        <FaStar size={15} color="rgb(0, 113, 141)" />
        <FaStar size={15} color="rgb(0, 113, 141)" />
      </span>
    );
  } if (ratingValue === 2) {
    ratingComponent = (
      <span>
        <FaStar size={15} color="rgb(0, 113, 141)" />
        <FaStar size={15} color="rgb(0, 113, 141)" />
        <FaStar size={15} color="rgb(201,201,201)" />
        <FaStar size={15} color="rgb(201,201,201)" />
        <FaStar size={15} color="rgb(201,201,201)" />
      </span>
    );
  } if (ratingValue === 3) {
    ratingComponent = (
      <span>
        <FaStar size={15} color="rgb(0, 113, 141)" />
        <FaStar size={15} color="rgb(0, 113, 141)" />
        <FaStar size={15} color="rgb(0, 113, 141)" />
        <FaStar size={15} color="rgb(201,201,201)" />
        <FaStar size={15} color="rgb(201,201,201)" />
      </span>
    );
  } if (ratingValue === 4) {
    ratingComponent = (
      <span>
        <FaStar size={15} color="rgb(0, 113, 141)" />
        <FaStar size={15} color="rgb(0, 113, 141)" />
        <FaStar size={15} color="rgb(0, 113, 141)" />
        <FaStar size={15} color="rgb(0, 113, 141)" />
        <FaStar size={15} color="rgb(201,201,201)" />
      </span>
    );
  } if (ratingValue === 5) {
    ratingComponent = (
      <span>
        <FaStar size={15} color="rgb(0, 113, 141)" />
        <FaStar size={15} color="rgb(0, 113, 141)" />
        <FaStar size={15} color="rgb(0, 113, 141)" />
        <FaStar size={15} color="rgb(0, 113, 141)" />
        <FaStar size={15} color="rgb(201,201,201)" />
      </span>
    );
  }

  return (
    <div className="reviewEntryContainer">
      <div className="authorProfile">
        <ul>
          <li className="author"><span className="usernameSpan">{props.review.userName}</span></li>
          <li className="author"><span className="locationSpan">{props.review.location}</span></li>
        </ul>
      </div>
      <div className="reviewDiv">
        <div className="reviewHeader">
          <div className="reviewStarDateContainer">
            <span className="starRatingSpan">{ratingComponent}</span>
            <div className="dateDiv">{moment(props.review.createdAt).fromNow()}</div>
          </div>
          <div className="reviewTitleDiv">
            <h3 className="reviewTitle">{props.review.title}</h3>
          </div>
        </div>
        <div className="reviewSummary">
          <p className="reviewContent">{props.review.body}</p>
          <div className="ageRecommendContainer">
            <ul className="ageRecommendUl">
              <li className="ageRecommendLi">
                <span className="ageRecommendSpan">Age</span>
              </li>
              <li className="ageRecommendLi">{props.review.age}</li>
            </ul>
            {recommend}
          </div>
          <div className="reviewInputsContainer">
            <div>
              <div className="helpfulDiv">
                <p className="helpfulText">Helpful?</p>
              </div>
              <div className="helpfulBtnDiv">
                {yesClicked}
                {noClicked}
              </div>
              <div className="reportDiv">
                {inappropriate}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewEntry;
