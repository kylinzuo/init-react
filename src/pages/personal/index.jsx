import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Styles from './index.less'
import avatar from '../../assets/images/default.png'
import pumpkin from '../../assets/images/pumpkin10g.png'
import car from '../../assets/images/car.png'
import carMin from '../../assets/images/car_min.png'
import cartoon from '../../assets/images/cartoon.jpg'
import cartoonMin from '../../assets/images/cartoon_min.jpg'
import gallardo from '../../assets/images/gallardo.svg'
import qq from '../../assets/images/qq.gif'
import wifi from '../../assets/images/wifi.png'
import learn from '../../assets/images/learn.jpeg'
import halloweenjpg1 from '../../assets/images/halloween-bg1.jpg'
import halloweenpng1 from '../../assets/images/halloween-bg1.png'
import halloweenjpg2 from '../../assets/images/halloween-bg2.jpg'
import halloweenpng2 from '../../assets/images/halloween-bg2.png'
import bg from '../../assets/images/bg.png'

class PersonalPage extends PureComponent {
  render () {
    const { kylin, match } = this.props
    return (
      <div className={Styles['personal']}>
        <p>{kylin}的个人主页 {match.path}</p>
        <div className={Styles['test']}>good test</div>
        <img src={avatar} alt='avatar' />
        <img src={pumpkin} alt='avatar' />
        <div className={Styles['max-img']}>
          <img src={car} alt='avatar' />
        </div>
        <div className={Styles['max-img']}>
          <img src={carMin} alt='avatar' />
        </div>
        <div className={Styles['max-img']}>
          <img src={cartoon} alt='avatar' />
        </div>
        <div className={Styles['max-img']}>
          <img src={cartoonMin} alt='avatar' />
        </div>
        <div className={Styles['max-img']}>
          <img src={gallardo} alt='avatar' />
        </div>
        <div className={Styles['max-img']}>
          <img src={qq} alt='avatar' />
        </div>
        <div className={Styles['max-img']}>
          <img src={wifi} alt='avatar' />
        </div>
        <div className={Styles['max-img']}>
          <img src={learn} alt='avatar' />
        </div>
        <div className={Styles['max-img']}>
          <img src={halloweenjpg1} alt='avatar' />
        </div>
        <div className={Styles['max-img']}>
          <img src={halloweenpng1} alt='avatar' />
        </div>
        <div className={Styles['max-img']}>
          <img src={halloweenjpg2} alt='avatar' />
        </div>
        <div className={Styles['max-img']}>
          <img src={halloweenpng2} alt='avatar' />
        </div>
        <div className={Styles['max-img']}>
          <img src={bg} alt='avatar' />
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
