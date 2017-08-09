import React, { Component } from 'react'
import Styles from './index.less'
import { RouteWithSubRoutes } from 'utils/routeUtils'

class IndexPage extends Component {
  render () {
    const { routes } = this.props
    return (
      <div className={Styles['index-page']}>
        <h1>hello</h1>
        {
          routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))
        }
      </div>
    )
  }
}

export default IndexPage
