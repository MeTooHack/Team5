import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faGlobe, faCog } from '@fortawesome/fontawesome-free-solid'
import bars from '../images/bars.png'
import circle from '../images/circle.png'

export class Settings extends React.Component {
  render() {
    return (
      <div className="fluid-wrapper">
        <div className="fluid dashboard">
          <div className="sidebar">
            <div className="item">
              <Link to="/dashboard">
                <FontAwesomeIcon icon={faGlobe} /> Company
              </Link>
            </div>
          </div>
          <div className="content">
            <div className="pane">
              <h3>Link to survey for employees</h3>

              <pre><code>
                <a
                  href="/survey/622aad291eb100c3a37594abb3155268"
                  >
                  https://metool.se/survey/622aad291eb100c3a37594abb3155268
                </a>
              </code></pre>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Settings
