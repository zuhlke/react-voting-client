import React, {Component} from 'react'
import {connect} from 'react-redux'
import Winner from './Winner'
import Vote from './Vote'

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
  winner: state.winner
})

const VotingContainer = connect(mapStateToProps)(Voting)

export default VotingContainer