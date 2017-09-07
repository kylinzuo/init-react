import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter, StaticRouter } from 'react-router-dom'
import routes from '../routes'
// require('../less/global.less')

const App = ({ server, location, context, store }) => {
  let router
  if (server) {
    router = (
      <StaticRouter
        location={location}
        context={context}
      >
        {routes}
      </StaticRouter>
    )
  } else {
    router = (
      <BrowserRouter>
        {routes}
      </BrowserRouter>
    )
  }

  return (
    <Provider store={store}>
      {router}
    </Provider>
  )
}

App.propTypes = {
  server: PropTypes.any,
  location: PropTypes.any,
  context: PropTypes.any,
  store: PropTypes.object
}

export default App
