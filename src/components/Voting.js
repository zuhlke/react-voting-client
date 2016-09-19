import React, {Component} from 'react'
import Winner from './Winner'
import Vote from './Vote'

export default class Voting extends Component {

  render() {
    return <div className="voting">
      {this.props.winner ?
        <Winner winner={this.props.winner} ref="winner" /> :
        <Vote {...this.props}/>}
    </div>
  }
}