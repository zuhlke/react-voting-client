import React, {Component} from 'react'

const pair = ['sublime', 'emacs']

export default class App extends Component {
  render() {
    return React.cloneElement(this.props.children, {pair: pair})
  }
}