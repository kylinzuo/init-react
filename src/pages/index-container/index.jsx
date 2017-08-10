import React, { PureComponent } from 'react'
import { Route } from 'react-router-dom'
import { asyncComponent } from '@utils/routeUtils'
// import Styles from './index.less'

const HomePage = asyncComponent(() =>
  System.import('../home').then(module => module.default)
)
const PersonalPage = asyncComponent(() =>
  System.import('../personal').then(module => module.default)
)

class IndexContainer extends PureComponent {
  render () {
    return (
      <div className='IndexContainer'>
        <h1>IndexContainer</h1>
        <Route path='/home' component={HomePage} />
        <Route path='/personal' component={PersonalPage} />
      </div>
    )
  }
}

export default IndexContainer
