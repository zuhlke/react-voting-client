import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom';
import { AppContainer } from 'react-hot-loader'
import { Router, Route, hashHistory } from 'react-router';
import App from './components/App';
import Voting from './components/Voting'

const pair = ['sublime', 'emacs']

const appElement = document.getElementById('app')
const renderApp = () => {
  const routes = <Route component={App}>
    <Route path="/" component={Voting} />
  </Route>;

  render(
    <AppContainer>
      <Router history={hashHistory}>{routes}</Router>
    </AppContainer>,
    appElement
  )
}

renderApp()

if (module.hot) {
  module.hot.accept('./components/App', () => {
    // Prevent the hot reloading error from react-router
    unmountComponentAtNode(appElement);
    renderApp();
  });
}