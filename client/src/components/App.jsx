import React from 'react';
import axios from 'axios';
import ReviewList from './ReviewList.jsx';
import ReviewSnapShot from './ReviewSnapShot.jsx'
import ReviewEntry from './ReviewEntry.jsx';
import FormModal from './FormModal.jsx';

class App extends React.Component {
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
    this.onNoClicked = this.onNoClicked.bind(this)
  }

  componentDidMount() {
    this.getReviews();
  }

  onYesClick(id) {
    axios.put('/api/reviews/' +id+'/helpfulYes').then(this.getReviews());
  }

  onYesClicked(id) {
    axios.put('/api/reviews/' +id+'/helpfulYesClicked').then(this.getReviews());
  }

  onNoClick(id) {
    axios.put('/api/reviews/' +id+'/helpfulNo').then(this.getReviews());
  }

  onNoClicked(id) {
    console.log('clicked')
    axios.put('/api/reviews/' +id+'/helpfulNoClicked').then(this.getReviews());
  }

  onInappropriate(id) {
    console.log('clicked')
    axios.put('/api/reviews/'+id+ '/inappropriate').then(this.getReviews());
  }

  getReviews() {
    axios.get('/api/reviews').then((results) => {
      this.setState({
        reviews: results.data,
      });
    });
  }

  render() {
    return (
      <div>
        <div>
          <FormModal />
        </div>
        <ReviewList reviews={this.state.reviews} onYesClick={this.onYesClick} onYesClicked={this.onYesClicked} onNoClick={this.onNoClick} onNoClicked={this.onNoClicked} onInappropriate ={this.onInappropriate} />
      </div>
    );
  }
}

export default App;
