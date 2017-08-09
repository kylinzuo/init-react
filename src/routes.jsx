import React from 'react'
import {
  Route,
  Link
} from 'react-router-dom'
import { asyncComponent } from 'utils/asyncComponent'

const Home = () => (
  <div>home page</div>
)

const About = () => (
  <div>about page</div>
)

const Personal = asyncComponent(() =>
  System.import('./pages/personal').then(module => module.default)
)

export default (
  <div>
    <ul>
      <li><Link to='/'>首页</Link></li>
      <li><Link to='/about'>关于</Link></li>
      <li><Link to='/personal'>个人</Link></li>
    </ul>
    <Route exact path='/' component={Home} />
    <Route path='/about' component={About} />
    <Route path='/personal' component={Personal} />
  </div>
)
