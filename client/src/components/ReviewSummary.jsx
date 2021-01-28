import React from 'react';
import axios from 'axios';
import { FaStar } from 'react-icons/fa';
import Example from './Histogram.jsx';
import FormModal from './FormModal.jsx'

class ReviewSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ratings: '',
    };
    this.getReviews = this.getReviews.bind(this);
    this.newReview = this.newReview.bind(this);
  }

  componentDidMount() {
    this.getReviews();
  }

  getReviews() {
    axios.get('http://localhost:3002/api/reviews').then((results) => {
      this.setState({
        ratings: (results.data.reduce((total, next) => total + next.rating, 0) / results.data.length).toFixed(1)
      });
    });
  }

  newReview() {
    this.getReviews();
  }

  render() {
    let ratingComponent;
    if (this.state.ratings >= 0.5) {
        ratingComponent = (
          <span>
            <FaStar size={50} color="rgb(201,201,201)" />
            <FaStar size={50} color="rgb(201,201,201)" />
            <FaStar size={50} color="rgb(201,201,201)" />
            <FaStar size={50} color="rgb(201,201,201)" />
            <FaStar size={50} color="rgb(201,201,201)" />
          </span>
        );
      } if (this.state.ratings > 0.5 && this.state.ratings <= 1.5) {
        ratingComponent = (
          <span>
            <FaStar size={50} color="rgb(0, 113, 141)" />
            <FaStar size={50} color="rgb(201,201,201)" />
            <FaStar size={50} color="rgb(201,201,201)" />
            <FaStar size={50} color="rgb(201,201,201)" />
            <FaStar size={50} color="rgb(201,201,201)" />
          </span>
        );
      } if (this.state.ratings > 1.5 && this.state.ratings <= 2.5) {
        ratingComponent = (
          <span>
            <FaStar size={50} color="rgb(0, 113, 141)" />
            <FaStar size={50} color="rgb(0, 113, 141)" />
            <FaStar size={50} color="rgb(201,201,201)" />
            <FaStar size={50} color="rgb(201,201,201)" />
            <FaStar size={50} color="rgb(201,201,201)" />
          </span>
        );
      } if (this.state.ratings > 2.5 && this.state.ratings <= 3.5) {
        ratingComponent = (
          <span>
            <FaStar size={50} color="rgb(0, 113, 141)" />
            <FaStar size={50} color="rgb(0, 113, 141)" />
            <FaStar size={50} color="rgb(0, 113, 141)" />
            <FaStar size={50} color="rgb(201,201,201)" />
            <FaStar size={50} color="rgb(201,201,201)" />
          </span>
        );
      } if (this.state.ratings > 3.5 && this.state.ratings <= 4.5) {
        ratingComponent = (
          <span>
            <FaStar size={50} color="rgb(0, 113, 141)" />
            <FaStar size={50} color="rgb(0, 113, 141)" />
            <FaStar size={50} color="rgb(0, 113, 141)" />
            <FaStar size={50} color="rgb(0, 113, 141)" />
            <FaStar size={50} color="rgb(201,201,201)" />
          </span>
        );
      } if (this.state.ratings > 4.5) {
        ratingComponent = (
          <span>
            <FaStar size={40} color="rgb(0, 113, 141)" />
            <FaStar size={40} color="rgb(0, 113, 141)" />
            <FaStar size={40} color="rgb(0, 113, 141)" />
            <FaStar size={40} color="rgb(0, 113, 141)" />
            <FaStar size={40} color="rgb(0, 113, 141)" />
          </span>
        );
    }
    return (
      <div className="reviewSnapShot">
          <div className="histogramContainer">
              <Example />
          </div>
           <div className="averageRating">
                {ratingComponent}
                <p className="averageRatingText">
                    {this.state.ratings} Average
                </p>
          </div>
        <div className="reviewButtonContainer">
        <FormModal postReview={this.props.postReview} newReview={this.newReview}/>
        </div>
      </div>
    );
  }
}

export default ReviewSummary;