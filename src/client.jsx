import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import FastClick from 'fastclick'

import appStore from './redux/reducers'
import App from '@src/containers/app'

FastClick.attach(document.body)

const store = createStore(
  appStore
)

render(
  <App store={store} />,
  document.getElementById('app')
)
