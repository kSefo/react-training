import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import './index.css'
import reducer from './reducers'
import EventsIndex from './components/events_index'
import EventsNew from './components/events_new'
import * as serviceWorker from './serviceWorker'

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/events/new" component={EventsNew} />
          <Route exact path="/" component={EventsIndex} />
        </Switch>
      </BrowserRouter>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
)
serviceWorker.unregister()
