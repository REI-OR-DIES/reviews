import React from 'react';

function ReviewEntry() {
  return (
    <div className="reviewEntryContainer">
      <div className="authorProfile">
        <div className="usernameContainer">
          <div className="usernameDiv">
            <span className="usernameSpan">Yamhillfarm</span>
          </div>
        </div>
        <div className="locationCountContainer">
          <div className="locationDiv">
            <span className="locationSpan">Portland, OR</span>
          </div>
          <div className="countDiv">
            <span className="countTitleSpan">Reviews</span>
            <span className="countSpan">  3</span>
          </div>
        </div>
      </div>
      <div className="reviewDiv">
        <div className="reviewHeader">
          <div className="reviewStarDateContainer">
            <span className="starRatingSpan">aaaa</span>
            <div className="dateDiv">Time</div>
          </div>
          <div className="reviewTitleDiv">
            <h3 className="reviewTitle">Cozy</h3>
          </div>
        </div>
        <div className="reviewSummary">
          <p className="reviewContent">Exactly what I wanted - warm, sturdy, snug to my ears.</p>
          <div className="ageRecommendContainer">
            <ul className="ageRecommendUl">
              <li className="ageRecommendLi">
                <span className="ageRecommendSpan">Age</span>
              </li>
              <li className="ageRecommendLi">25 to 34</li>
            </ul>
            <ul className="ageRecommendUl">
              <li className="ageRecommendLi">
                <span className="checkSpan"><a href="https://icon-library.net/icon/icon-check-mark-12.html" title="Icon Check Mark #74531"><img src="https://icon-library.net//images/icon-check-mark/icon-check-mark-12.jpg" width="19px" /></a></span>
                <span className="ageRecommendSpan">Yes,   </span>
              </li>
              <li className="ageRecommendLi">I recommend this Product</li>
            </ul>
          </div>
          <div className="reviewInputsContainer">
            <div>
              <div className="helpfulDiv">
                <p className="helpfulText">Helpful?</p>
              </div>
              <div className="helpfulBtnDiv">
                <button type="button" className="btnYes">
                  Yes-
                  <span className="yesText">1</span>
                </button>
                <button type="button" className="btnNo">
                  No-
                  <span className="noText">1</span>
                </button>
              </div>
              <div className="reportDiv">
                <button type="button" className="reportBtn">Report as Inappropriate</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewEntry;
