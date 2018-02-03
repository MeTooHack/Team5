import 'whatwg-fetch'
import React from 'react'
import { render } from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Login from '../components/login'
import Dashboard from '../components/dashboard'
import Settings from '../components/settings'
import Survey from '../components/survey'
import Register from '../components/register'
import Report from '../components/report'

const node = document.getElementById('metool')

const renderRoot = () => {
  render(
    <Router>
      <div>
        <Route exact path="/" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/settings" component={Settings} />
        <Route path="/survey" component={Survey} />
        <Route path="/reports" component={Report} />
      </div>
    </Router>,
    node
  )
}

renderRoot()
