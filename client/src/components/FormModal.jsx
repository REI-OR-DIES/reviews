import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from "react";
import Modal from 'react-modal';
import { FaStar } from 'react-icons/fa';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    padding: '0px',
    width: '900px',
    margin: '0px',
    height: 'auto',

  },
};

Modal.setAppElement('#reviews-mount');

function FormModal(props) {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [recommend, setRecommend] = useState("");
  const [age, setAge] = useState("");
  const [userName, setUserName] = useState("");
  const [city, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  let postItem = {
    userName,
    age,
    email,
    rating,
    title,
    body,
    location: city,
    recommend,
    inappropriate: false,
  };

  function handleSubmit() {
    props.postReview(postItem);
    props.newReview();
  }

  const starRater = (
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

  return (
    <div className="modal">
      <button type="submit" className="button button1" onClick={openModal}>Write a Review</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="formSideBar">
          <div className="imageDiv">
             <img src="https://www.rei.com/media/8d141ee9-a7be-40b3-b5b5-c629af3903d0" width="161px" height="118"/>
          </div>
        </div>
        <div className="formContainer">
          <button className="closeModal" type="submit" onClick={closeModal} />
          <div className="productOverviewDiv"><span className="productOverviewTitle">My Review for REI Co-op Wool Stripe Beanie</span></div>
          <p className="requiredFieldsText">Required fields are marked with *</p>
          <div className="productRatingDiv">
            <div className="productRatingSpanDiv">
              <span className="productRatingSpan">
                Product Rating*
              </span>
              <div className="StarRater">
                {starRater}
              </div>
            </div>
          </div>
          <div className="reviewTitleContainer">
            <div className="reviewTitleDiv">
              <span className="reviewTitleForm">Review Title*</span>
              <input className="reviewTitleInput" placeholder="Example: Great on the Trails" onChange={(e) => setTitle(e.target.value)} />
            </div>
          </div>
          <div className="reviewBodyContainer">
            <div className="reviewBodyDiv">
              <span className="reviewBodyTitle">Review*</span>
              <div className="reviewBodyInput">
                <textarea
                  className="reviewBody"
                  placeholder="Please keep your review focused on the product and your experience with it.
                  Your review is so important
                  for improving REI and the experience for other REI shoppers!"
                  onChange={(e) => setBody(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="recommendContainer">
            <div className="recommendTitle">
              <p className="recommend">Would you recommend this product to a friend?</p>
            </div>
            <span className="recommendButtonSpan">
              <button className="recommendBtn" type="button" onClick={() => setRecommend(true)}>Yes</button>
              <button className="recommendBtn" type="button" onClick={() => setRecommend(false)}>No</button>
            </span>
          </div>
          <div className="ageContainer">
            <div className="ageDiv">
              <span className="ageTitle">Age</span>
              <select name="ageSelector" className="ageSelector" onChange={(e) => setAge(e.target.value)}>
                <option value="Select">Select</option>
                <option value="under18">Under 18</option>
                <option value="18-24">18-24</option>
                <option value="25-34">25-34</option>
                <option value="45-54">45-54</option>
                <option value="45-55">55-64</option>
                <option value="65-74">65-74</option>
                <option value="75 or Older">75 or Older</option>
              </select>
            </div>
          </div>
          <div className="usernameLocationContainer">
            <div className="usernameDiv">
              <span className="usernameLocationSpan">Nickname*</span>
              <input className="usernameLocationInput" placeholder="Example: jackie27" onChange={(e) => setUserName(e.target.value)} />
            </div>
            <div className="locationDiv">
              <span className="usernameLocationSpan">Location</span>
              <input className="usernameLocationInput" placeholder="Example: Seattle, WA" onChange={(e) => setLocation(e.target.value)} />
            </div>
          </div>
          <div className="emailContainer">
            <div className="emailDiv">
              <span className="emailSpan">Email*</span>
              <input className="emailInput" placeholder="Example: youremail@example.com" onChange={(e) => setEmail(e.target.value)} />
            </div>
          </div>
          <div className="submitContainer">
            <div className="submitDiv">
              <button className="submitBtn" type="button" onClick={() => { handleSubmit(); closeModal(); }}>Post Review</button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default FormModal;
