// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isClicked: false}

  onClicking = () => {
    this.setState(prevValue => ({isClicked: !prevValue.isClicked}))
  }

  getBtnTxt = () => {
    const {isClicked} = this.state

    return isClicked ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const btnTxt = this.getBtnTxt()

    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="paragraph">Thank you! Happy Learning</p>
        <div className="btn-container">
          <button className="button" onClick={this.onClicking}>
            {btnTxt}
          </button>
        </div>
      </div>
    )
  }
}

export default Welcome
