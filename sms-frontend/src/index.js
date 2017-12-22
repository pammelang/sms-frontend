import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { Route } from 'react-router-dom';
import store, { history } from './store'
import Home from './containers/HomePage'
import Delivery from './containers/DeliveryPage'

import './index.css'

const target = document.querySelector('#root')

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/delivery" component={Delivery} />
      </div>
    </ConnectedRouter>
  </Provider>,
  target
)