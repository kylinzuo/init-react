import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { asyncComponent } from './utils/routeUtils'

export default (
  <div className='root' style={{
    width: '100%',
    height: '100%',
    overflow: 'hidden'
  }}>
    <Switch>
      <Route path='/' component={
        asyncComponent(() =>
          System.import('./pages').then(module => module.default)
        )
      } />
    </Switch>
  </div>
)
