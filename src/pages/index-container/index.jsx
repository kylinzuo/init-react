import React, { PureComponent } from 'react'
import { Switch, Route } from 'react-router-dom'
import { asyncComponent } from '../../utils/routeUtils'
import Styles from './index.less'

import NavFootComponent from '@components/nav-foot'

const HomePage = asyncComponent(() =>
  System.import('../home').then(module => module.default)
)
const QuotationPage = asyncComponent(() =>
  System.import('../quotation').then(module => module.default)
)
const TradePage = asyncComponent(() =>
  System.import('../trade').then(module => module.default)
)
const PersonalPage = asyncComponent(() =>
  System.import('../personal').then(module => module.default)
)

class IndexContainer extends PureComponent {
  render () {
    return (
      <div className={Styles['Index-container']}>
        <div className={Styles['main-body']}>
          <Switch>
            <Route path='/quotation' component={QuotationPage} />
            <Route path='/trade' component={TradePage} />
            <Route path='/personal' component={PersonalPage} />
            <Route path='/' component={HomePage} />
          </Switch>
        </div>
        <footer>
          <NavFootComponent />
        </footer>
      </div>
    )
  }
}

export default IndexContainer
