import React from 'react';
import axios from 'axios';
import { FaStar } from 'react-icons/fa';

class ReviewSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ratings: '',
    };
    this.getReviews = this.getReviews.bind(this);
  }

  componentDidMount() {
    this.getReviews();
  }

  getReviews() {
    axios.get('/api/reviews').then((results) => {
      this.setState({
        ratings: results.data.reduce((total, next) => total + next.rating, 0) / results.data.length,
      });
    });
  }

  render() {
      console.log(this.state.ratings)
    let ratingComponent;
    if (this.state.ratings >= 0.5) {
        ratingComponent = (
          <span>
            <FaStar size={15} color="rgb(201,201,201)" />
            <FaStar size={15} color="rgb(201,201,201)" />
            <FaStar size={15} color="rgb(201,201,201)" />
            <FaStar size={15} color="rgb(201,201,201)" />
            <FaStar size={15} color="rgb(201,201,201)" />
          </span>
        );
      } if (this.state.ratings > 0.5 && this.state.ratings <= 1.5) {
        ratingComponent = (
          <span>
            <FaStar size={15} color="rgb(0, 113, 141)" />
            <FaStar size={15} color="rgb(0, 113, 141)" />
            <FaStar size={15} color="rgb(0, 113, 141)" />
            <FaStar size={15} color="rgb(0, 113, 141)" />
            <FaStar size={15} color="rgb(0, 113, 141)" />
          </span>
        );
      } if (this.state.ratings > 1.5 && this.state.ratings <= 2.5) {
        ratingComponent = (
          <span>
            <FaStar size={15} color="rgb(0, 113, 141)" />
            <FaStar size={15} color="rgb(0, 113, 141)" />
            <FaStar size={15} color="rgb(201,201,201)" />
            <FaStar size={15} color="rgb(201,201,201)" />
            <FaStar size={15} color="rgb(201,201,201)" />
          </span>
        );
      } if (this.state.ratings > 2.5 && this.state.ratings <= 3.5) {
        ratingComponent = (
          <span>
            <FaStar size={40} color="rgb(0, 113, 141)" />
            <FaStar size={40} color="rgb(0, 113, 141)" />
            <FaStar size={40} color="rgb(0, 113, 141)" />
            <FaStar size={40} color="rgb(201,201,201)" />
            <FaStar size={40} color="rgb(201,201,201)" />
          </span>
        );
      } if (this.state.ratings > 3.5 && this.state.ratings <= 4.5) {
        ratingComponent = (
          <span>
            <FaStar size={30} color="rgb(0, 113, 141)" />
            <FaStar size={30} color="rgb(0, 113, 141)" />
            <FaStar size={30} color="rgb(0, 113, 141)" />
            <FaStar size={30} color="rgb(0, 113, 141)" />
            <FaStar size={30} color="rgb(201,201,201)" />
          </span>
        );
      } if (this.state.ratings > 4.5) {
        ratingComponent = (
          <span>
            <FaStar size={30} color="rgb(0, 113, 141)" />
            <FaStar size={30} color="rgb(0, 113, 141)" />
            <FaStar size={30} color="rgb(0, 113, 141)" />
            <FaStar size={30} color="rgb(0, 113, 141)" />
            <FaStar size={30} color="rgb(201,201,201)" />
          </span>
        );
    }
    return (
      <div className="reviewSnapShot">
           <div className="averageRating">
                {ratingComponent}
                <p className="averageRatingText">
                    {this.state.ratings} Average
                </p>
          </div>
      </div>
    );
  }
}

export default ReviewSummary;