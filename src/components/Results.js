import React, {Component} from 'react'
import {connect} from 'react-redux'
import Winner from './Winner'
import * as actionCreators from '../action-creators'

export class Results extends Component {
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
    return this.props.winner ?
      <Winner ref="winner" winner={this.props.winner} /> :
       <div className="results">
        <div className="tally">
          {this.getPair().map(entry =>
            <div key={entry} className="entry">
              <h1>{entry}</h1>
              <div className="voteCount">
                {this.getVotes(entry)}
              </div>
            </div>
          )}
        </div>
        <div className="management">
          <button ref="next"
                  className="next"
                  onClick={this.props.next}>
            Next
          </button>
        </div>
      </div>
  }
}

const mapStateToProps = (state) => ({
  pair: state.vote && state.vote.pair,
  tally: state.vote && state.vote.tally,
  winner: state.winner
})

const ResultsContainer = connect(
  mapStateToProps,
  actionCreators
)(Results)

export default ResultsContainer 