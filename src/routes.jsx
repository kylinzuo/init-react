import React from 'react'
import {
  Route,
  Link
} from 'react-router-dom'

const Home = () => (
  <div>home page</div>
)

const About = () => (
  <div>about page</div>
)

export default (
  <div>
    <ul>
      <li><Link to='/'>首页</Link></li>
      <li><Link to='/about'>关于</Link></li>
    </ul>
    <Route exact path='/' component={Home} />
    <Route path='/about' component={About} />
  </div>
)
