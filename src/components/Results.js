import React, {Component} from 'react'

export default class Results extends Component {
  getPair() {
    return this.props.pair || []
  }
  getVotes(entry) {
    if (this.props.tally && this.props.tally[entry]) {
      return this.props.tally[entry];
    }
    return 0;
  }

  render() {
    return <div className="results">
      {this.getPair().map(entry =>
        <div key={entry} className="entry">
          <h1>{entry}</h1>
          <div className="voteCount">
            {this.getVotes(entry)}
          </div>
        </div>
      )}
    </div>
  }
}