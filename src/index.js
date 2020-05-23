import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import './index.css'
import reducer from './reducers'
import EventsIndex from './components/events_index'
import * as serviceWorker from './serviceWorker'

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <EventsIndex />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
)
serviceWorker.unregister()
