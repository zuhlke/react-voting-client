import React, {Component} from 'react'

const pair = ['sublime', 'emacs']
const tally = {'sublime': 5, 'emacs': 4}

export default class App extends Component {
  render() {
    return React.cloneElement(this.props.children, {pair, tally})
  }
}