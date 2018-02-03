import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faGlobe, faCog } from '@fortawesome/fontawesome-free-solid'
import bars from '../images/bars.png'
import circle from '../images/circle.png'

export class Dashboard extends React.Component {
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
            <div className="pane">
              <h3>Year over year performance</h3>

              <img src={bars} className="bars" />
            </div>

            <div className="pane">
              <h3>Employee engagement</h3>

              <img src={circle} className="circle" />
            </div>

            <div className="reports">
              <h3>Reports</h3>

              <ul>
                <li><Link to="/reports/13">2018-02-01</Link></li>
                <li><Link to="/reports/13">2018-01-15</Link></li>
                <li><Link to="/reports/13">2017-09-01</Link></li>
                <li><Link to="/reports/13">2017-05-13</Link></li>
                <li><Link to="/reports/13">2017-02-24</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard
