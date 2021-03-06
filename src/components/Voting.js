import React, {Component} from 'react'
import {connect} from 'react-redux'
import Winner from './Winner'
import Vote from './Vote'
import * as actionCreators from '../action-creators'

export class Voting extends Component {

  render() {
    return <div className="voting">
      {this.props.winner ?
        <Winner winner={this.props.winner} ref="winner" /> :
        <Vote {...this.props}/>}
    </div>
  }
}

const mapStateToProps = (state) => ({
  pair: state.vote && state.vote.pair,
  hasVoted: state.hasVoted,
  winner: state.winner
})

const VotingContainer = connect(
  mapStateToProps,
  actionCreators
)(Voting)

export default VotingContainer