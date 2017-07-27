import React from 'react'
import ReactDOM from 'react-dom'
import { routerForBrowser } from 'redux-little-router'
import routes from './routes'

import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import AppComponent from 'AppComponent.jsx'

// Install the router into the store for a browser-only environment.
// routerForBrowser is a factory method that returns a store
// enhancer and a middleware.
const {
  reducer: routerReducer,
  middleware: routerMiddleware,
  enhancer: routerEnhancer
} = routerForBrowser({ routes })

// Create the store
const middleware = [ routerMiddleware ]

// Create the redux store
const store = createStore(
  combineReducers({router: routerReducer }),
  compose(
    routerEnhancer,
    applyMiddleware(...middleware)
  )
)

// Assign the store to a global for easier debugging
window.sanyas = { store }

const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <Component />
    </Provider>,
    document.getElementById('root')
  )
}

render(AppComponent)
