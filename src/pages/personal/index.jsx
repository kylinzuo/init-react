import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Styles from './index.less'
import avatar from '../../assets/images/default.png'
import pumpkin from '../../assets/images/pumpkin10g.png'
import car from '../../assets/images/car.png'
import cartoon from '../../assets/images/cartoon.jpg'

class PersonalPage extends PureComponent {
  render () {
    const { kylin, match } = this.props
    return (
      <div className={Styles['personal']}>
        <p>{kylin}的个人主页 {match.path}</p>
        <div className={Styles['test']}>good test</div>
        <img src={avatar} alt='avatar' />
        <img src={pumpkin} alt='avatar' />
        <div>
          <img src={car} alt='avatar' />
        </div>
        <div className={Styles['cartoon']}>
          <img src={cartoon} alt='avatar' />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    kylin: state.kylin
  }
}

PersonalPage.propTypes = {
  kylin: PropTypes.string,
  match: PropTypes.object
}

export default connect(mapStateToProps)(PersonalPage)
