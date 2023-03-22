import { Component } from 'react';

class FeedbackOptions extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClickIncrement = e => {
    const name = e.target.name;

    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  render() {
    console.log('this.state :>> ', this.state);
    return (
      <div className="">
        <h1 className="card">Pleas leave feedbeack</h1>
        <div className="">
          <button
            className="btn"
            name={'good'}
            onClick={this.handleClickIncrement}
          >
            Good
          </button>
          <button
            className="btn"
            name={'neutral'}
            onClick={this.handleClickIncrement}
          >
            Nautral
          </button>
          <button
            className="btn"
            name={'bad'}
            onClick={this.handleClickIncrement}
          >
            Bad
          </button>
        </div>
        <p className="" style={{ fontSize: '30px' }}>
          Good:
          {this.state.good}
        </p>
        <p className="" style={{ fontSize: '30px' }}>
          Nautral:
          {this.state.neutral}
        </p>
        <p className="" style={{ fontSize: '30px' }}>
          Bad:
          {this.state.bad}
        </p>
      </div>
    );
  }
}
export default FeedbackOptions;
