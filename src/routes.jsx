import React from 'react'
import { Route } from 'react-router-dom'
import { asyncComponent } from '@utils/routeUtils'

export default (
  <div className='root' style={{
    width: '100%',
    height: '100%',
    overflow: 'hidden'
  }}>
    <Route path='/' component={
      asyncComponent(() =>
        System.import('./pages').then(module => module.default)
      )
    } />
  </div>
)
