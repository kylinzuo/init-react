import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'

import todoApp from './redux/reducers'
import App from 'src/containers/app'

const store = createStore(
  todoApp
)

render(
  <App store={store} />,
  document.getElementById('app')
)
