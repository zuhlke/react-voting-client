import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Router, Route, hashHistory } from 'react-router'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducer'
import io from 'socket.io-client'
import App from './components/App'
import Voting from './components/Voting'
import Results from './components/Results'

const store = createStore(reducer)

const socket = io(`${location.protocol}//${location.hostname}:8090`)
socket.on('state', state =>
  store.dispatch({type: 'SET_STATE', state})
)

const appElement = document.getElementById('app')
const renderApp = () => {
  const routes = <Route component={App}>
    <Route path="/" component={Voting} />
    <Route path="/results" component={Results} />
  </Route>

  render(
    <AppContainer>
      <Provider store={store}>
        <Router history={hashHistory}>{routes}</Router>
      </Provider>
    </AppContainer>,
    appElement
  )
}

renderApp()

if (module.hot) {
  module.hot.accept('./components/App', () => {
    // Prevent the hot reloading error from react-router
    unmountComponentAtNode(appElement)
    renderApp()
  })
}