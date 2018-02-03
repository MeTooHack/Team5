import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faGooglePlusSquare } from '@fortawesome/fontawesome-free-brands'
import { faCheck } from '@fortawesome/fontawesome-free-solid'
import { faArrowAltCircleRight } from '@fortawesome/fontawesome-free-regular'

export class Register extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      success: false,
    }

    this.register = this.register.bind(this)
  }

  register() {
    this.setState({success: true})
  }

  signup() {
    return (
      <div className="dialog-wrapper">
        <div id="login" className="dialog">
          <h1>MeTool</h1>

          <div className="oauth">
            <a className="btn google" onClick={this.register}>
              <FontAwesomeIcon icon={faGooglePlusSquare} />
              Sign up with Google
            </a>
            <a className="btn facebook" onClick={this.register}>
              <FontAwesomeIcon icon={faFacebookSquare} />
              Sign up with Facebook
            </a>

            <hr/>
          </div>

          <p>
            <a onClick={this.register}>Sign up with email.</a>
          </p>
        </div>
      </div>
    )
  }

  success() {
    return (
      <div className="dialog-wrapper">
        <div id="login" className="dialog">
          <h1>MeTool</h1>

          <p className="success-check">
            <FontAwesomeIcon icon={faCheck} size="6x" />
          </p>

          <p>
            <Link to="/dashboard">
              <FontAwesomeIcon icon={faArrowAltCircleRight} className="forward" size="2x" />
            </Link>
          </p>
        </div>
      </div>
    )
  }

  render() {
    if (this.state.success) {
      return this.success()
    }

    return this.signup()
  }
}

export default Register
