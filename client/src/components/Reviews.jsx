import React from 'react';
import axios from 'axios';
import ReviewList from './ReviewList.jsx';
import FormModal from './FormModal.jsx';
import ReviewSummary from './ReviewSummary.jsx';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
    };
    this.getReviews = this.getReviews.bind(this);
    this.onYesClick = this.onYesClick.bind(this);
    this.onNoClick = this.onNoClick.bind(this);
    this.onInappropriate = this.onInappropriate.bind(this);
    this.onYesClicked = this.onYesClicked.bind(this);
    this.onNoClicked = this.onNoClicked.bind(this);
    this.postReview = this.postReview.bind(this);
  }

  componentDidMount() {
    this.getReviews();
  }

  onYesClick(id) {
    axios.put('http://localhost:3002/api/reviews/' +id+'/helpfulYes').then(this.getReviews());
  }

  onYesClicked(id) {
    axios.put('http://localhost:3002/api/reviews/' +id+'/helpfulYesClicked').then(this.getReviews());
  }

  onNoClick(id) {
    axios.put('http://localhost:3002/api/reviews/' +id+'/helpfulNo').then(this.getReviews());
  }

  onNoClicked(id) {
    axios.put('http://localhost:3002/api/reviews/' +id+'/helpfulNoClicked').then(this.getReviews());
  }

  onInappropriate(id) {
    axios.put('http://localhost:3002/api/reviews/'+id+ '/inappropriate').then(this.getReviews());
  }

  getReviews() {
    axios.get('http://localhost:3002/api/reviews').then((results) => {
      this.setState({
        reviews: results.data,
      });
    });
  }

  postReview(postItem) {
    axios.post('http://localhost:3002/api/reviews', postItem).then(
      this.getReviews(),
    );
  }

  render() {
    return (
      <div>
        <div>
          <ReviewSummary postReview={this.postReview} reviews={this.state.reviews} />
        </div>
        <ReviewList
          reviews={this.state.reviews}
          onYesClick={this.onYesClick}
          onYesClicked={this.onYesClicked}
          onNoClick={this.onNoClick}
          onNoClicked={this.onNoClicked}
          onInappropriate={this.onInappropriate}
        />
      </div>
    );
  }
}

export default Reviews;
