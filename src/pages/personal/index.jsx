import React, { PureComponent } from 'react'
import Styles from './index.less'

class PersonalComponent extends PureComponent {
  render () {
    return (
      <div className={Styles['personal']}>PersonalComponent 个人主页</div>
    )
  }
}

export default PersonalComponent
