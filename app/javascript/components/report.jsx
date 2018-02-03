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

            <div className="settings">
              <Link to="/settings">
                <FontAwesomeIcon icon={faCog} /> Settings
              </Link>
            </div>
          </div>
          <div className="content">
            <div className="report">
              report
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Settings
