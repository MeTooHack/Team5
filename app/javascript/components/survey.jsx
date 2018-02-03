import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faGlobe, faCog } from '@fortawesome/fontawesome-free-solid'
import bars from '../images/bars.png'
import circle from '../images/circle.png'

export class Survey extends React.Component {
  render() {
    return (
      <div className="fluid-wrapper">
        <div className="fluid survey">
          <h1>MeTool</h1>

          <ul className="questions">
            <li>
              <span>Long detailed properly presented question 1</span>

              <ul className="answers">
                <li><input type="radio" /> Answer 1</li>
                <li><input type="radio" /> Answer 2</li>
              </ul>
            </li>

            <li>
              <span>Long detailed properly presented question 2</span>

              <ul className="answers">
                <li><input type="radio" /> Answer 1</li>
                <li><input type="radio" /> Answer 2</li>
              </ul>
            </li>
          </ul>

          <div className="actions">
            <button>Submit Answers</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Survey
