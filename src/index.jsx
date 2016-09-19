import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Voting from './components/Voting'

const pair = ['sublime', 'emacs']

const appElement = document.getElementById('app')

ReactDOM.render(
  <AppContainer>
    <Voting pair={pair} />
  </AppContainer>,
  appElement
)

if (module.hot) {
  module.hot.accept('./components/Voting', () => {
    const NextVoting = require('./components/Voting').default
    ReactDOM.render(
      <AppContainer>
         <NextVoting pair={pair} />
      </AppContainer>,
      appElement
    )
  })
}