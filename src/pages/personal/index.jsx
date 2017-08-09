import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Styles from './index.less'
import avatar from '../../../static/images/default.png'

class PersonalPage extends PureComponent {
  render () {
    const { kylin, match } = this.props
    console.log('kylin', kylin, match)
    return (
      <div className={Styles['personal']}>
        <p>PersonalComponent 个人主页</p>
        <div className={Styles['test']}>good test</div>
        <img src={avatar} alt='avatar' />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    kylin: state.kylin
  }
}

export default connect(mapStateToProps)(PersonalPage)
