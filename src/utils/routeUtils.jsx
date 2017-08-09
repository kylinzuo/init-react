import React from 'react'
import { Route } from 'react-router-dom'

/**
 * 按需加载封装
 * getComponent is a function that returns a promise for a component
 * It will not be called until the first mount
 */
export const asyncComponent = (getComponent) => {
  return class AsyncComponent extends React.Component {
    static Component = null
    state = { Component: AsyncComponent.Component }

    componentWillMount () {
      if (!this.state.Component) {
        getComponent().then(Component => {
          AsyncComponent.Component = Component
          this.setState({ Component })
        })
      }
    }
    render () {
      const { Component } = this.state
      if (Component) {
        return <Component {...this.props} />
      }
      return null
    }
  }
}

export const RouteWithSubRoutes = (route) => (
  <Route path={route.path} render={props => (
    // pass the sub-routes down to keep nesting
    <route.component {...props} routes={route.routes} />
  )} />
)
