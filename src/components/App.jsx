import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // countTotalFeedback()
  // countPositiveFeedbackPercentage()
  render() {
    return (
      <div className="container">
        <FeedbackOptions />
      </div>
    );
  }
}

export default App;
