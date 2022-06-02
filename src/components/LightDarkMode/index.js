// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: false}

  changeMode = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state
    const background = isDarkMode ? 'background' : null
    const buttonText = isDarkMode ? 'Dark Mode' : 'Light Mode'
    const titleColor = isDarkMode ? 'title-color' : null

    return (
      <div className="main-container">
        <div className={`card ${background}`}>
          <h1 className={`heading ${titleColor}`}>Click to Change Mode</h1>
          <button className="button" type="button" onClick={this.changeMode}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
