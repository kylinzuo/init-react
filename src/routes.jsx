import React from 'react'
import { asyncComponent, RouteWithSubRoutes } from '@utils/routeUtils'

const routes = [
  {
    path: '/',
    component: asyncComponent(() =>
      System.import('./pages').then(module => module.default)
    ),
    routes: [
      {
        path: '/',
        component: asyncComponent(() =>
          System.import('./pages/index-container').then(module => module.default)
        ),
        routes: [
          {
            path: '/personal',
            component: asyncComponent(() =>
              System.import('./pages/personal').then(module => module.default)
            )
          }
        ]
      },
      {
        path: '/quotation',
        component: asyncComponent(() =>
          System.import('./pages/quotation').then(module => module.default)
        )
      }
    ]
  }
]

export default (
  <div className='root' style={{
    width: '100%',
    height: '100%',
    overflow: 'hidden'
  }}>
    {
      routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))
    }
  </div>
)
