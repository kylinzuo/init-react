import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'
import Styles from './index.less'

class NavFootComponent extends PureComponent {
  constructor (props) {
    super(props)
  }
  static defaultProps = {
    dataSource: [
      {
        text: '首页',
        path: 'home',
        icon: 'icon-shouye'
      },
      {
        text: '首页',
        path: 'home',
        icon: 'icon-shouye'
      },
      {
        text: '首页',
        path: 'home',
        icon: 'icon-shouye'
      },
      {
        text: '首页',
        path: 'home',
        icon: 'icon-shouye'
      }
    ]
  }

  render () {
    const {dataSource} = this.props
    console.log('dataSource', dataSource)
    return (
      <ul className={Styles['nav-foot']}>
        {/* {
          dataSource.map((d, i) => {
            return (
              <li>
                <Link to={d.path}>{d.text}</Link>
              </li>
            )
          })
        } */}
      </ul>
    )
  }
}

NavFootComponent.prototypes = {
  dataSource: PropTypes.array
}

export default NavFootComponent
