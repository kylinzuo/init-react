import React, { Component } from 'react'
import classnames from 'classnames'
import { Switch, Route } from 'react-router-dom'
import { asyncComponent } from '../utils/routeUtils'
import Styles from './index.less'
import { isMobile } from '../utils'

const StockPage = asyncComponent(() =>
  System.import('./stock').then(module => module.default)
)
const IndexContainer = asyncComponent(() =>
  System.import('./index-container').then(module => module.default)
)

class IndexPage extends Component {
  render () {
    return (
      <div
        className={classnames(Styles['theme-light'], Styles['index-page'])}
        style={{
          width: isMobile() ? '100%' : '650px'
        }}
      >
        <Switch>
          <Route path='/stock' component={StockPage} />
          <Route path='/' component={IndexContainer} />
        </Switch>
      </div>
    )
  }
}

export default IndexPage
