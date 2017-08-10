import React, { PureComponent } from 'react'
// import Styles from './index.less'

import { RouteWithSubRoutes } from '@utils/routeUtils'

class IndexContainer extends PureComponent {
  render () {
    const { routes } = this.props
    return (
      <div className='IndexContainer'>
        <h1>IndexContainer</h1>
        {
          routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))
        }
      </div>
    )
  }
}

export default IndexContainer
