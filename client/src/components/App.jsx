import React from 'react';
import ReviewList from './List.jsx';
import ReviewSnapShot from './ReviewSnapShot.jsx'
import ReviewEntry from './ReviewEntry.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <ReviewEntry />
      </div>
    );
  }
}

export default App;
