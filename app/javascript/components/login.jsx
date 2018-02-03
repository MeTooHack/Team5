import React from 'react'
import { Link, Redirect } from 'react-router-dom'

export class Login extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loggedIn: false,
    }

    this.login = this.login.bind(this)
  }

  login() {
    this.setState({loggedIn: true})
  }

  render() {
    if (this.state.loggedIn) {
      return <Redirect to="/dashboard" push />
    }

    return (
      <div className="dialog-wrapper">
        <div id="login" className="dialog">
          <h1>MeTool</h1>
          <form onSubmit={this.login}>
            <label htmlFor="login">login</label>
            <input type="text" name="login" />

            <label htmlFor="password">password</label>
            <input type="password" name="password" />

            <div className="actions">
              <button action="submit">Log in</button>
            </div>
          </form>

          <p>
            Don't have an account yet? <Link to="/register">Sign up.</Link>
          </p>
        </div>
      </div>
    )
  }
}

export default Login
