import {Component} from 'react'
import './index.css'

class LettersCalcualtor extends Component {
  state = {count: 0, textInput: ''}

  enterText = event => {
    this.setState({textInput: event.target.value})
    this.setState({count: event.target.value.length})
  }

  render() {
    const {count, textInput} = this.state
    return (
      <div className="bg-container">
        <div className="image-container order-xl-2">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="calculator-image"
          />
        </div>
        <div className="text-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label className="description" htmlFor = "input">Enter the phrase</label>
          <input
            id = "input"
            type="text"
            className="input-text"
            value={textInput}
            placeholder="Enter the phrase"
            onChange={this.enterText}
          />
          <p className="letters-count">No.of letters: {count}</p>
        </div>
      </div>
    )
  }
}

export default LettersCalcualtor
