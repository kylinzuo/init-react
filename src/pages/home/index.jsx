import React, { PureComponent } from 'react'
import Styles from './index.less'

class HomePage extends PureComponent {
  render () {
    return (
      <div className={Styles['home-page']}>HomePage</div>
    )
  }
}

export default HomePage
