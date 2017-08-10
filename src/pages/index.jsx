import React, { Component } from 'react'
import classnames from 'classnames'
import Styles from './index.less'
import { RouteWithSubRoutes } from '@utils/routeUtils'
import { isMobile } from '@utils'

class IndexPage extends Component {
  render () {
    const { routes } = this.props
    return (
      <div
        className={classnames(Styles['theme-light'], Styles['index-page'])}
        style={{
          width: isMobile() ? '100%' : '650px'
        }}
      >
        <h1>IndexPage</h1>
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
