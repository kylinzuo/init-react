import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Styles from './index.less'
import avatar from '../../../static/images/default.png'

class PersonalPage extends PureComponent {
  render () {
    const { kylin, match } = this.props
    return (
      <div className={Styles['personal']}>
        <p>{kylin}的个人主页 {match.path}</p>
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
