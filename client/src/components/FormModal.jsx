import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

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

Modal.setAppElement('#app');

function FormModal() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button type="submit" className="button button1" onClick={openModal}>Write a Review</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="formSideBar" />
        <div className="formContainer">
          <button className="closeModal" type="submit" onClick={closeModal} />
          <div className="productOverviewDiv"><span className="productOverviewTitle">My Review for REI Co-op Wool Stripe Beanie</span></div>
          <p className="requiredFieldsText">Required fields are marked with *</p>
          <div className="productRatingDiv">
            <div className="productRatingSpanDiv">
              <span className="productRatingSpan">Product Rating</span>
            </div>
          </div>
          <div className="reviewTitleContainer">
            <div className="reviewTitleDiv">
              <span className="reviewTitleForm">Review Title*</span>
              <input className="reviewTitleInput" placeholder="Example: Great on the Trails" />
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
                />
              </div>
            </div>
          </div>
          <div className="recommendContainer">
            <div className="recommendTitle">
              <p className="recommend">Would you recommend this product to a friend?</p>
            </div>
            <span className="recommendButtonSpan">
              <button className="recommendBtn" type="button">Yes</button>
              <button className="recommendBtn" type="button">No</button>
            </span>
          </div>
          <div className="ageContainer">
            <div className="ageDiv">
              <span className="ageTitle">Age</span>
              <select name="ageSelector" className="ageSelector">
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
              <input className="usernameLocationInput" placeholder="Example: jackie27" />
            </div>
            <div className="locationDiv">
              <span className="usernameLocationSpan">Location</span>
              <input className="usernameLocationInput" placeholder="Example: Seattle, WA" />
            </div>
          </div>
          <div className="emailContainer">
            <div className="emailDiv">
              <span className="emailSpan">Email*</span>
              <input className="emailInput" placeholder="Example: youremail@example.com" />
            </div>
          </div>
          <div className="submitContainer">
            <div className="submitDiv">
              <button className="submitBtn" type="button">Post Review</button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default FormModal;
