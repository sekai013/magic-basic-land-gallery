import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import App from './App.js'
import Gallery from './Gallery.js'

window.addEventListener('load', () => {
  render(
    (
      <Router history={hashHistory}>
        <Route path='/' component={App}>
          <Route path='gallery/:type' component={Gallery} />
        </Route>
      </Router>
    ),
    document.querySelector('#container')
  )
})
