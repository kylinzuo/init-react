import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import classnames from 'classnames'
import Styles from './index.less'

class NavFootComponent extends Component {
  constructor (props) {
    super(props)
  }
  static defaultProps = {
    dataSource: [
      {
        text: '首页',
        path: '/',
        icon: 'icon-shouye'
      },
      {
        text: '行情',
        path: '/quotation',
        icon: 'icon-hangqing'
      },
      {
        text: '交易',
        path: '/trade',
        icon: 'icon-jiaoyi1'
      },
      {
        text: '我的',
        path: '/personal',
        icon: 'icon-wode'
      }
    ]
  }

  render () {
    const {dataSource} = this.props
    return (
      <ul className={Styles['nav-foot']}>
        {
          dataSource.map((d, i) => {
            const exact = i === 0 ? {exact: true} : {}
            return (
              <li key={i}>
                <NavLink
                  {...exact}
                  to={d.path}
                  className={Styles['link']}
                  activeClassName='selected'
                  activeStyle={{
                    color: '#558DED'
                  }}
                >
                  <span><i className={classnames('iconfont', d.icon)} /></span>
                  {d.text}
                </NavLink>
              </li>
            )
          })
        }
      </ul>
    )
  }
}

NavFootComponent.prototypes = {
  dataSource: PropTypes.array
}

export default NavFootComponent
