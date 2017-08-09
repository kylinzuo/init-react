import React from 'react'
import {
  Link
} from 'react-router-dom'
import { asyncComponent, RouteWithSubRoutes } from 'utils/routeUtils'

// const IndexPage = asyncComponent(() =>
//   System.import('./pages').then(module => module.default)
// )

// const PersonalPage = asyncComponent(() =>
//   System.import('./pages/personal').then(module => module.default)
// )

const routes = [
  {
    path: '/',
    component: asyncComponent(() =>
      System.import('./pages').then(module => module.default)
    ),
    routes: [
      {
        path: '/personal',
        component: asyncComponent(() =>
          System.import('./pages/personal').then(module => module.default)
        )
      }
    ]
  }
]

export default (
  <div>
    <ul>
      <li>
        <Link to='/'>home</Link>
        <Link to='/personal'>personal</Link>
      </li>
    </ul>
    {
      routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))
    }
  </div>
)
